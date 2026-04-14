/**
 * authHelper.js  (updated)
 *
 * Still the go-to for all fetch() calls in JS modules (interview.js,
 * dashboard-home.js, dashboard1.js, etc.).
 *
 * Token is ALWAYS in localStorage.  No sessionStorage split.
 */

const TOKEN_KEY   = "accessToken";
const USER_KEY    = "evalvate_user";
const CREDITS_KEY = "evalvate_credits";

/* ── Token ─────────────────────────────────────────────────── */
export function getToken()      { return localStorage.getItem(TOKEN_KEY) || null; }
export function setToken(t)     { localStorage.setItem(TOKEN_KEY, t); }
export function clearToken()    { localStorage.removeItem(TOKEN_KEY); }
export function isLoggedIn()    { return !!getToken(); }

/* ── User ───────────────────────────────────────────────────── */
export function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)) || null; }
  catch { return null; }
}
export function setUser(u) { localStorage.setItem(USER_KEY, JSON.stringify(u)); }

/* ── Credits ────────────────────────────────────────────────── */
export function getCredits()  {
  const v = localStorage.getItem(CREDITS_KEY);
  return v !== null ? parseInt(v, 10) : 0;
}
export function setCredits(n) { localStorage.setItem(CREDITS_KEY, String(n)); }

/* ── Authenticated fetch ────────────────────────────────────── */
export async function authFetch(url, options = {}) {
  const token = getToken();
  if (!token) { redirectToLogin(); return Promise.reject(new Error("No token")); }

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };
  if (options.body instanceof FormData) delete headers["Content-Type"];

  const res = await fetch(url, { ...options, headers });
  if (res.status === 401 || res.status === 403) {
    clearToken();
    redirectToLogin();
    return Promise.reject(new Error("Session expired"));
  }
  return res;
}

/* ── Logout ─────────────────────────────────────────────────── */
export function logout() {
  clearToken();
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(CREDITS_KEY);
  localStorage.removeItem("currentInterviewId");
  localStorage.removeItem("currentConfigId");
  window.location.href = "login.html";
}

/* ── Guard ──────────────────────────────────────────────────── */
export function requireAuth(redirectTo = "login.html") {
  if (!isLoggedIn()) { redirectToLogin(redirectTo); return false; }
  return true;
}

/* ── Sync fresh user data from backend ─────────────────────── */
export async function syncUserFromBackend(apiBase) {
  try {
    const res = await authFetch(`${apiBase}/auth/me`);
    if (!res.ok) return;
    const u = await res.json();
    setUser({ name: u.name, email: u.email, id: u.id });
    setCredits(u.credits ?? 0);
    return u;
  } catch { /* non-fatal */ }
}

function redirectToLogin(to = "login.html") {
  if (!window.location.pathname.endsWith(to)) window.location.href = to;
}