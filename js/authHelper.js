/**
 * authHelper.js — Central authentication utility
 *
 * Replaces the scattered token logic across all pages.
 * Token always lives in localStorage (no "remember me" split).
 */

const TOKEN_KEY   = "accessToken";
const USER_KEY    = "evalvate_user";
const CREDITS_KEY = "evalvate_credits";

/* ── Token helpers ─────────────────────────────────────────── */

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || null;
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
  return !!getToken();
}

/* ── User/credits helpers ───────────────────────────────────── */

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY)) || null;
  } catch {
    return null;
  }
}

export function setUser(userData) {
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
}

export function getCredits() {
  const v = localStorage.getItem(CREDITS_KEY);
  return v !== null ? parseInt(v, 10) : 0;
}

export function setCredits(n) {
  localStorage.setItem(CREDITS_KEY, String(n));
}

/* ── Authenticated fetch ────────────────────────────────────── */

/**
 * authFetch(url, options?)
 *
 * Drop-in replacement for fetch() that:
 *  - Adds the Authorization header automatically
 *  - Redirects to login.html on 401/403
 *  - Returns the same Promise<Response> as fetch()
 *
 * Usage:
 *   const res = await authFetch("/interview/reports");
 *   const data = await res.json();
 */
export async function authFetch(url, options = {}) {
  const token = getToken();

  if (!token) {
    redirectToLogin();
    return Promise.reject(new Error("No token — redirecting to login"));
  }

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  // Don't set Content-Type when sending FormData — let the browser set the boundary
  if (options.body instanceof FormData) {
    delete headers["Content-Type"];
  }

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

/* ── Guard: call at the top of any protected page ───────────── */

export function requireAuth() {
  if (!isLoggedIn()) {
    redirectToLogin();
    return false;
  }
  return true;
}

/* ── Sync user data from backend ────────────────────────────── */

export async function syncUserFromBackend(apiBase) {
  try {
    const res = await authFetch(`${apiBase}/auth/me`);
    if (!res.ok) return;
    const user = await res.json();
    setUser({ name: user.name, email: user.email, id: user.id });
    setCredits(user.credits ?? 0);
    return user;
  } catch {
    // non-fatal — cached data will be used
  }
}

/* ── Internal ───────────────────────────────────────────────── */

function redirectToLogin() {
  // Avoid redirect loops
  if (!window.location.pathname.endsWith("login.html")) {
    window.location.href = "login.html";
  }
}