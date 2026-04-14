/**
 * auth.js  (updated shim)
 *
 * Pages that still reference window.EvalvateAuth (older HTML)
 * get a compatible object backed by auth-core.js.
 *
 * Usage:
 *   <script type="module" src="js/auth-core.js"></script>  ← add this FIRST
 *   <script type="module" src="js/auth.js"></script>
 */

import {
  getToken, setToken, clearToken, isLoggedIn,
  getUser, setUser, getCredits, setCredits, logout,
} from "./authHelper.js";

const EvalvateAuth = {
  isLoggedIn,
  getUser,
  setUser,
  getCredits,
  setCredits,
  logout,

  requireAuth(redirect = "login.html") {
    if (!isLoggedIn()) { window.location.href = redirect; return false; }
    return true;
  },

  useCredit() {
    const c = getCredits();
    if (c > 0) { setCredits(c - 1); return true; }
    return false;
  },

  addCredits(n) { setCredits(getCredits() + n); },

  getUserInitials() {
    const user = getUser();
    if (!user?.name) return "U";
    const parts = user.name.trim().split(/\s+/);
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : user.name.substring(0, 2).toUpperCase();
  },

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

window.EvalvateAuth = EvalvateAuth;
export default EvalvateAuth;