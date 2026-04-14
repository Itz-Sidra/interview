/**
 * auth.js — Backwards-compatibility shim
 *
 * Some HTML pages load this as a module and reference `EvalvateAuth` globally.
 * This shim re-exports authHelper functions under the old EvalvateAuth API so
 * nothing breaks during the transition. All real logic lives in authHelper.js.
 *
 * Usage in HTML (no change needed):
 *   <script type="module" src="js/auth.js"></script>
 */

import {
  getToken,
  setToken,
  clearToken,
  isLoggedIn,
  getUser,
  setUser,
  getCredits,
  setCredits,
  logout,
} from "./authHelper.js";

const EvalvateAuth = {
  isLoggedIn,
  getUser,
  setUser,
  getCredits,
  setCredits,

  /** @deprecated – token always in localStorage now */
  requireAuth(redirect = "login.html") {
    if (!isLoggedIn()) { window.location.href = redirect; return false; }
    return true;
  },

  logout,

  useCredit() {
    const c = getCredits();
    if (c > 0) { setCredits(c - 1); return true; }
    return false;
  },

  addCredits(n) { setCredits(getCredits() + n); },

  getUserInitials() {
    const user = getUser();
    if (!user?.name) return "U";
    const parts = user.name.trim().split(" ");
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : user.name.substring(0, 2).toUpperCase();
  },

  /** Kept for dashboard-home compatibility */
  getInterviews() {
    try { return JSON.parse(localStorage.getItem("evalvate_interviews")) || []; }
    catch { return []; }
  },

  addInterview(interview) {
    const list = this.getInterviews();
    list.unshift({
      id:       Date.now(),
      date:     new Date().toISOString(),
      role:     interview.role     || "General",
      score:    interview.score    || null,
      status:   interview.status   || "completed",
      duration: interview.duration || "0:00",
    });
    localStorage.setItem("evalvate_interviews", JSON.stringify(list));
  },

  updateUser(updates) {
    const user = getUser();
    if (user) { const u = { ...user, ...updates }; setUser(u); return u; }
    return null;
  },
};

/* Make globally accessible for non-module scripts */
window.EvalvateAuth = EvalvateAuth;

export default EvalvateAuth;