/**
 * dashboard.js — Fixed
 *
 * Changes from original:
 *  - Uses authHelper.authFetch() so the token is always included
 *  - Redirects to login automatically on 401/403
 *  - No dual localStorage/sessionStorage look-up
 */

import { API_BASE } from "./js/config.js";
import { requireAuth, authFetch } from "./js/authHelper.js";

/* ── Guard: redirect to login if not authenticated ─────────── */
requireAuth();

/* ── DOM refs ───────────────────────────────────────────────── */
const container  = document.getElementById("interviewsContainer");
const kpiTotal   = document.getElementById("kpiTotal");
const kpiAvgScore = document.getElementById("kpiAvgScore");
const kpiIssues  = document.getElementById("kpiIssues");
const kpiDuration = document.getElementById("kpiDuration");

/* ── Load dashboard ─────────────────────────────────────────── */
async function loadDashboard() {
  try {
    const res = await authFetch(`${API_BASE}/interview/reports`);

    if (!res.ok) {
      container.innerHTML = `<p style="color:var(--color-text-danger)">Failed to load interviews (${res.status})</p>`;
      return;
    }

    const { reports } = await res.json();
    container.innerHTML = "";

    if (!reports || reports.length === 0) {
      container.innerHTML = `<p style="color:#5A6B7A;padding:20px 0">No interviews yet. Start your first one!</p>`;
      updateKPIs([]);
      return;
    }

    reports.forEach((report) => {
      const card = document.createElement("div");
      card.className = "interview-card";
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = `dashboard1.html?id=${report.id}`;
      });

      card.innerHTML = `
        <div class="interview-left">
          <div class="avatar"></div>
          <div class="interview-info">
            <h3>${escHtml(report.candidate?.name ?? "—")}</h3>
            <h2>${escHtml(report.candidate?.role ?? "—")}</h2>
            <div class="interview-meta">
              <span>${new Date(report.interview?.date).toLocaleString()}</span>
              <span>${report.interview?.duration ?? 0} min</span>
            </div>
          </div>
        </div>
        <div class="interview-right">
          <div class="score">
            <div class="score-value">${report.ratings?.overall ?? "—"}</div>
            <div class="score-label">Overall Score</div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    updateKPIs(reports);
  } catch (err) {
    console.error("Dashboard load failed:", err);
    if (container) {
      container.innerHTML = `<p style="color:#ef4444">Error loading dashboard: ${escHtml(err.message)}</p>`;
    }
  }
}

/* ── KPIs ───────────────────────────────────────────────────── */
function updateKPIs(reports) {
  const total = reports.length;
  const avgScore = total > 0
    ? Math.round(reports.reduce((s, r) => s + (r.ratings?.overall || 0), 0) / total)
    : 0;
  const totalDuration = reports.reduce((s, r) => s + (r.interview?.duration || 0), 0);
  const issues = reports.reduce((s, r) => s + (r.issuesCount || 0), 0);

  if (kpiTotal)    kpiTotal.textContent    = total;
  if (kpiAvgScore) kpiAvgScore.textContent = avgScore;
  if (kpiDuration) kpiDuration.textContent = `${totalDuration}m`;
  if (kpiIssues)   kpiIssues.textContent   = issues;
}

/* ── Helpers ────────────────────────────────────────────────── */
function escHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

loadDashboard();