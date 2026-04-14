/**
 * auth-core.js  — v2 (bug-fix release)
 *
 * Fixes three bugs visible in the screenshots:
 *
 *  BUG 1 — index.html: showed "U" avatar instead of Login/Signup when logged out.
 *    Root cause: #loggedInNav had `style="display:none !important"` hardcoded in
 *    the HTML. el.style.display = "flex" cannot override !important.
 *    Fix: setVisible() now uses setAttribute("style", "… !important") which
 *    replaces the entire inline style attribute, beating !important.
 *
 *  BUG 2 — interview.html: always showed "U" instead of real initials.
 *    Root cause: interview.html nav has a single <div class="user-avatar">
 *    with hardcoded "U". It has no #loggedInNav / #loggedOutNav elements.
 *    Fix: updateNavbar() now also overwrites every .user-avatar element.
 *
 *  BUG 3 — dashboard.html: showed Login/Signup even when user was logged in.
 *    Root cause: auth-core.js was never loaded on dashboard.html, so its nav
 *    state was never updated.
 *    Fix: Add <script type="module" src="js/auth-core.js"></script> before
 *    </body> in dashboard.html AND add the loggedInNav/loggedOutNav pattern
 *    to its nav (see PATCH_dashboard_nav.html).
 */

const TOKEN_KEY   = "accessToken";
const USER_KEY    = "evalvate_user";
const CREDITS_KEY = "evalvate_credits";

/* ── Core helpers ─────────────────────────────────────────── */

function getToken() {
  return localStorage.getItem(TOKEN_KEY) || null;
}

function isAuthenticated() {
  return !!getToken();
}

function decodeToken(token) {
  if (!token) return null;
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

function getUser() {
  try {
    const cached = localStorage.getItem(USER_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.name) return parsed;
    }
  } catch { /* ignore */ }

  const payload = decodeToken(getToken());
  if (payload) {
    return {
      id:    payload.userId || payload.sub || "",
      name:  payload.name  || "",
      email: payload.email || "",
    };
  }
  return null;
}

function getCredits() {
  const v = localStorage.getItem(CREDITS_KEY);
  return v !== null ? parseInt(v, 10) : 0;
}

/**
 * Build initials from a full name.
 *   "Sidra Jahangir" → "SJ"
 *   "Alice"          → "AL"
 *   null / ""        → ""   (empty when logged out — avoids showing "U")
 */
function getInitials(name) {
  if (!name || !name.trim()) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function logout(redirectTo = "login.html") {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(CREDITS_KEY);
  localStorage.removeItem("currentInterviewId");
  localStorage.removeItem("currentConfigId");
  window.location.href = redirectTo;
}

function requireAuth(redirectTo = "login.html") {
  if (!isAuthenticated()) {
    if (!window.location.pathname.endsWith(redirectTo)) {
      window.location.href = redirectTo;
    }
    return false;
  }
  return true;
}

/* ── DOM helpers ──────────────────────────────────────────── */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "";
}

/**
 * BUG 1 FIX:
 * index.html has `style="display:none !important"` on #loggedInNav in HTML.
 * el.style.display = "flex" loses to !important.
 * setAttribute("style", "…") replaces the entire inline style attribute —
 * this IS the inline style, so it always wins (there is no more specific rule).
 */
function setVisible(id, visible, displayValue = "flex") {
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute(
    "style",
    `display: ${visible ? displayValue : "none"} !important`
  );
}

/* ── Main navbar updater ──────────────────────────────────── */
function updateNavbar() {
  const authed   = isAuthenticated();
  const user     = getUser();
  const credits  = getCredits();
  const initials = authed ? getInitials(user?.name) : "";

  /* 1. Toggle logged-out / logged-in sections
        Works on: index.html, dashboard.html, dashboard-home.html,
        any page using navbar-shared.html */
  setVisible("loggedOutNav",      !authed, "flex");
  setVisible("loggedInNav",        authed, "flex");
  setVisible("mobileLoggedOutNav", !authed, "flex");
  setVisible("mobileLoggedInNav",  authed,  "flex");

  /* 2. Avatar initials */
  setText("navAvatarInitials", initials);
  setText("avatarInitials",    initials);
  setText("dropdownInitials",  initials);

  /* BUG 2 FIX:
     interview.html nav has <div class="user-avatar"> with "U" hardcoded.
     It has no #loggedInNav / #loggedOutNav so step 1 does nothing there.
     Overwrite every .user-avatar on the page with real initials. */
  document.querySelectorAll(".user-avatar").forEach((el) => {
    if (!el.querySelector("img")) {
      el.textContent = authed ? initials : "";
    }
  });

  /* 3. User info text */
  setText("navUserName",       user?.name  || "");
  setText("navUserEmail",      user?.email || "");
  setText("dropdownUserName",  user?.name  || "");
  setText("dropdownUserEmail", user?.email || "");

  /* 4. Credits (all badge variants) */
  [
    "navCreditsDisplay", "navCreditsDropdown",
    "navCreditsCount",   "dropdownCredits",
    "creditsDisplay",    "statCredits",
  ].forEach((id) => setText(id, String(credits)));

  /* 5. Logout buttons — wire once, idempotent */
  ["logoutBtn", "navLogoutBtn", "mobileLogoutBtn"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn && !btn._authCoreLogoutBound) {
      btn.addEventListener("click", () => logout());
      btn._authCoreLogoutBound = true;
    }
  });
}

/* ── Dropdown toggles ─────────────────────────────────────── */
function initDropdowns() {
  [
    ["navProfileAvatar", "navDropdownMenu"],
    ["profileAvatar",    "dropdownMenu"],
  ].forEach(([triggerId, menuId]) => {
    const trigger = document.getElementById(triggerId);
    const menu    = document.getElementById(menuId);
    if (!trigger || !menu) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu.active, #navDropdownMenu.active")
      .forEach((m) => m.classList.remove("active"));
  });

  document.querySelectorAll(".dropdown-menu, #navDropdownMenu").forEach((m) => {
    m.addEventListener("click", (e) => e.stopPropagation());
  });
}

/* ── Navbar scroll effect ─────────────────────────────────── */
function initNavScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

/* ── Welcome name (dashboard-home) ───────────────────────── */
function updateWelcomeName() {
  const user = getUser();
  setText("welcomeName", user?.name?.split(" ")[0] || "");
}

/* ── Public API ───────────────────────────────────────────── */
const AuthCore = {
  isAuthenticated, getUser, getToken, getCredits,
  getInitials, logout, requireAuth, updateNavbar,
};

window.AuthCore = AuthCore;

/* ── Auto-init ────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  updateNavbar();
  initDropdowns();
  initNavScroll();
  updateWelcomeName();
});

export default AuthCore;