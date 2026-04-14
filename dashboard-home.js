/**
 * dashboard-home.js — Fixed
 *
 * Changes from original:
 *  - Uses authHelper throughout (no more dual storage look-ups)
 *  - authFetch() replaces manual fetch with token header
 *  - requireAuth() guard at top
 *  - Logout wired to authHelper.logout()
 */

import { API_BASE } from "./js/config.js";
import {
  requireAuth,
  authFetch,
  getUser,
  getCredits,
  setCredits,
  setUser,
  logout,
} from "./js/authHelper.js";

requireAuth();

/* ── Sync fresh data from backend ───────────────────────────── */
async function syncFromBackend() {
  try {
    const res = await authFetch(`${API_BASE}/auth/me`);
    if (!res.ok) return;
    const user = await res.json();
    setUser({ name: user.name, email: user.email, id: user.id });
    setCredits(user.credits ?? 0);
  } catch { /* use cached data */ }
}

/* ── Helpers ────────────────────────────────────────────────── */
function getUserInitials(name) {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.substring(0, 2).toUpperCase();
}

function formatDate(iso) {
  const d = new Date(iso);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  const hh = (h % 12) || 12;
  const mm = String(m).padStart(2, "0");
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}, ${hh}:${mm} ${ampm}`;
}

function getScoreClass(score) {
  if (score == null) return "pending";
  return score >= 85 ? "good" : score >= 70 ? "average" : "average";
}

/* ── Populate UI ────────────────────────────────────────────── */
function initDashboard() {
  const user    = getUser();
  const credits = getCredits();

  /* Name */
  const firstName = user?.name?.split(" ")[0] ?? "User";
  const initials  = getUserInitials(user?.name);
  setText("welcomeName",      firstName);
  setText("dropdownUserName", user?.name  ?? "User");
  setText("dropdownUserEmail",user?.email ?? "");
  setText("avatarInitials",   initials);
  setText("dropdownInitials", initials);

  /* Credits */
  ["navCreditsCount","dropdownCredits","creditsDisplay","statCredits"].forEach(
    (id) => setText(id, credits)
  );
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ── Load past interviews from API ──────────────────────────── */
async function loadInterviews() {
  const listEl     = document.getElementById("interviewsList");
  const emptyState = document.getElementById("emptyState");
  if (!listEl) return;

  try {
    const res = await authFetch(`${API_BASE}/interview/reports`);
    if (!res.ok) throw new Error(`Server ${res.status}`);
    const { reports } = await res.json();

    /* Update stats */
    setText("statInterviews", reports.length);
    const scored = reports.filter((r) => r.ratings?.overall > 0);
    if (scored.length) {
      const avg = Math.round(scored.reduce((s, r) => s + r.ratings.overall, 0) / scored.length);
      setText("statAvgScore", avg);
    }

    /* Render cards */
    listEl.querySelectorAll(".interview-card").forEach((c) => c.remove());

    if (reports.length === 0) {
      if (emptyState) emptyState.style.display = "block";
      return;
    }
    if (emptyState) emptyState.style.display = "none";

    reports.slice(0, 5).forEach((r) => {
      const score      = r.ratings?.overall ?? null;
      const scoreClass = getScoreClass(score);
      const card       = document.createElement("div");
      card.className   = "interview-card";
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = `dashboard1.html?id=${r.id}`;
      });

      card.innerHTML = `
        <div class="interview-left">
          <div class="avatar"></div>
          <div class="interview-info">
            <span>
              <h3>${escHtml(r.candidate?.name ?? "")}</h3>
              <h2>${escHtml(r.candidate?.role ?? "General")}</h2>
            </span>
            <div class="interview-meta">
              <span class="meta-item">${formatDate(r.interview?.date)}</span>
              <span class="meta-item">${r.interview?.duration ?? 0} min</span>
            </div>
          </div>
        </div>
        <div class="interview-right">
          <div class="score">
            <div class="score-value ${scoreClass}">${score ?? "—"}</div>
            <div class="score-label">Overall Score</div>
          </div>
        </div>`;

      listEl.insertBefore(card, emptyState);
    });
  } catch (err) {
    console.error("Failed to load interviews:", err);
  }
}

function escHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ── Dropdown toggle ────────────────────────────────────────── */
const profileAvatar = document.getElementById("profileAvatar");
const dropdownMenu  = document.getElementById("dropdownMenu");

profileAvatar?.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu?.classList.toggle("active");
});
document.addEventListener("click", () => dropdownMenu?.classList.remove("active"));
dropdownMenu?.addEventListener("click", (e) => e.stopPropagation());

/* ── Logout ─────────────────────────────────────────────────── */
document.getElementById("logoutBtn")?.addEventListener("click", () => logout());

/* ── Start Interview ────────────────────────────────────────── */
document.getElementById("startInterviewBtn")?.addEventListener("click", () => {
  if (getCredits() <= 0) {
    alert("No credits remaining. Please purchase more credits to continue.");
    window.location.href = "pricing.html";
    return;
  }
  window.location.href = "preview1.html";
});

/* ── Navbar scroll ──────────────────────────────────────────── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 50);
});

/* ── Boot ───────────────────────────────────────────────────── */
(async () => {
  await syncFromBackend();
  initDashboard();
  await loadInterviews();
})();