/**
 * dashboard1.js — Fixed
 *
 * Changes from original:
 *  - Uses authHelper.authFetch() — no manual token look-up
 *  - requireAuth() guard at top
 *  - No dual localStorage/sessionStorage look-up
 */

import { API_BASE } from "./js/config.js";
import { requireAuth, authFetch } from "./js/authHelper.js";

requireAuth();

/* ── Read interview ID from URL ─────────────────────────────── */
const params      = new URLSearchParams(window.location.search);
const interviewId = params.get("id");

if (!interviewId) {
  alert("No interview ID found in URL. Expected: dashboard1.html?id=<id>");
  window.location.href = "dashboard.html";
}

/* ── DOM refs ───────────────────────────────────────────────── */
const candidateName     = document.getElementById("candidateName");
const interviewDate     = document.getElementById("interviewDate");
const overallScore      = document.getElementById("overallScore");
const overallScoreLarge = document.getElementById("overallScoreLarge");
const flaggedTitle      = document.getElementById("flaggedTitle");
const flaggedContainer  = document.getElementById("flaggedContainer");
const metricsGrid       = document.getElementById("metricsGrid");

/* ── Metrics ────────────────────────────────────────────────── */
function calcFiller(report)    { const n = report.flagged?.filter(i => i.category === "FILLER_WORDS").length || 0; return Math.max(100 - n * 10, 60); }
function calcTechnical(report) { const n = report.flagged?.filter(i => i.category === "TECHNICAL").length    || 0; return Math.max(90  - n * 5,  60); }
function calcVocal(report)     { const n = report.flagged?.filter(i => i.category === "VOCAL").length        || 0; return Math.max(90  - n * 5,  60); }

function renderMetrics(report) {
  if (!metricsGrid) return;
  metricsGrid.innerHTML = "";
  const metrics = [
    { label: "Communication", score: report.ratings?.content    ?? 0 },
    { label: "Grammar",       score: report.grammar?.score      ?? 0 },
    { label: "Filler Words",  score: calcFiller(report)              },
    { label: "Confidence",    score: report.ratings?.confidence ?? 0 },
    { label: "Technical",     score: calcTechnical(report)           },
    { label: "Vocal",         score: calcVocal(report)               },
  ];
  metrics.forEach((m) => {
    const card = document.createElement("div");
    card.className = "metric-card";
    card.innerHTML = `
      <div class="metric-header"><span>${m.label}</span></div>
      <div class="metric-bar">
        <div class="bar-fill" style="width:${Math.min(m.score, 100)}%"></div>
      </div>
      <div class="metric-score">${m.score}</div>`;
    metricsGrid.appendChild(card);
  });
}

/* ── escHtml ────────────────────────────────────────────────── */
function escHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ── Render report ──────────────────────────────────────────── */
function renderReport(report) {
  if (candidateName)     candidateName.textContent  = report.candidate?.name ?? "—";
  if (interviewDate)     interviewDate.textContent   = report.interview?.date
    ? new Date(report.interview.date).toLocaleString() : "—";

  const score = Math.round(report.ratings?.overall ?? 0);
  if (overallScore)      overallScore.textContent      = score;
  if (overallScoreLarge) overallScoreLarge.textContent = score;
  renderTechnical(report);
  const circle = document.querySelector(".score-circle");
  if (circle) circle.style.background =
    `conic-gradient(#3b82f6 0% ${score}%, rgba(255,255,255,0.1) ${score}% 100%)`;

  renderMetrics(report);

  const issues = report.flagged || [];
  if (flaggedTitle)    flaggedTitle.textContent   = `Flagged Issues (${issues.length})`;
  if (flaggedContainer) flaggedContainer.innerHTML = "";

  if (!issues.length) {
    if (flaggedContainer)
      flaggedContainer.innerHTML = `<p style="color:#5A6B7A;">No issues flagged 🎉</p>`;
  } else {
    issues.forEach((issue) => {
      const div = document.createElement("div");
      div.className = "issue-card";
      const borderColor = issue.severity >= 3 ? "#ef4444" : issue.severity === 2 ? "#f59e0b" : "#3b82f6";
     div.className = "issue-card";

div.innerHTML = `
  <div class="issue-header">
    <span class="issue-category">${issue.category}</span>
    <span class="issue-severity">Severity ${issue.severity}</span>
  </div>

  <p class="issue-description">
    ${escHtml(issue.explanation || "")}
  </p>

  ${issue.mistake ? `<p class="issue-mistake">❌ "${escHtml(issue.mistake)}"</p>` : ""}
  ${issue.correction ? `<p class="issue-correction">✅ "${escHtml(issue.correction)}"</p>` : ""}
`;
      
      if (flaggedContainer) flaggedContainer.appendChild(div);
    });
  }

  if (report.recommendation) renderRecommendations(report.recommendation);
}

/* ── Recommendations ────────────────────────────────────────── */
function renderRecommendations(rec) {
  const rightCol = document.querySelector(".right-column");
  if (!rightCol) return;

  let recSection = document.getElementById("recommendationSection");
  if (!recSection) {
    recSection = document.createElement("div");
    recSection.id = "recommendationSection";
    recSection.className = "flagged-section";
    recSection.style.marginTop = "20px";
    rightCol.appendChild(recSection);
  }

  const mkList = (arr) =>
    (arr || []).map((i) => `<li style="margin-bottom:6px;color:#d1d5db;">${escHtml(i)}</li>`).join("");

  recSection.innerHTML = `
  <h3 style="margin-bottom:16px;color:#0f172a;font-size:16px;">
    📋 Recommendations
  </h3>

  ${rec.strengths?.length ? `
    <p style="color:#16a34a;font-weight:600;margin-bottom:6px;">
      ✅ Strengths
    </p>
    <ul style="padding-left:18px;margin-bottom:16px;">
      ${rec.strengths.map(i => `<li style="margin-bottom:6px;color:#334155;">${escHtml(i)}</li>`).join("")}
    </ul>
  ` : ""}

  ${rec.areasToImprove?.length ? `
    <p style="color:#ea580c;font-weight:600;margin-bottom:6px;">
      ⚠️ Areas to Improve
    </p>
    <ul style="padding-left:18px;margin-bottom:16px;">
      ${rec.areasToImprove.map(i => `<li style="margin-bottom:6px;color:#334155;">${escHtml(i)}</li>`).join("")}
    </ul>
  ` : ""}

  ${rec.actionableTips?.length ? `
    <p style="color:#2563eb;font-weight:600;margin-bottom:6px;">
      💡 Actionable Tips
    </p>
    <ul style="padding-left:18px;">
      ${rec.actionableTips.map(i => `<li style="margin-bottom:6px;color:#334155;">${escHtml(i)}</li>`).join("")}
    </ul>
  ` : ""}
`;
}

/* ── Loading state ──────────────────────────────────────────── */
function setLoading() {
  if (candidateName)    candidateName.textContent  = "Loading…";
  if (flaggedTitle)     flaggedTitle.textContent   = "Loading report…";
  if (flaggedContainer) flaggedContainer.innerHTML = `<p style="color:#6b7280;">Please wait…</p>`;
  if (overallScore)     overallScore.textContent   = "—";
  if (overallScoreLarge) overallScoreLarge.textContent = "—";
}

/* ── Load report ────────────────────────────────────────────── */
async function loadReport() {
  setLoading();
  try {
    const res = await authFetch(`${API_BASE}/interview/report/${interviewId}`);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server ${res.status}: ${text}`);
    }
    const report = await res.json();
    renderReport(report);
  } catch (err) {
    console.error("[dashboard1] FAILED:", err);
    if (flaggedTitle)    flaggedTitle.textContent   = "Failed to load report";
    if (flaggedContainer) flaggedContainer.innerHTML = `
      <p style="color:#ef4444;margin-bottom:8px;"><strong>Error:</strong> ${escHtml(err.message)}</p>
      <button onclick="loadReport()"
        style="padding:8px 16px;background:#3b82f6;color:#fff;border:none;
               border-radius:6px;cursor:pointer;font-size:14px;">Retry</button>`;
  }
}

/* ── Generate report button ─────────────────────────────────── */
async function handleGenerateReport(e) {
  const btn = e?.currentTarget;
  if (btn) { btn.disabled = true; btn.textContent = "Generating…"; }

  try {
    await authFetch(`${API_BASE}/interview/status`, {
      method: "POST",
      body:   JSON.stringify({ interviewId, status: "COMPLETED" }),
    });
  } catch { /* non-fatal */ }

  await loadReport();
  if (btn) { btn.disabled = false; btn.textContent = "Generate Report"; }
}

function renderTechnical(report) {
  const container = document.getElementById("technicalContainer");
  if (!container) return;

  container.innerHTML = "";

  (report.technical || []).forEach(q => {
    const div = document.createElement("div");
    div.className = "assessment-item";


    container.appendChild(div);
  });
}

/* ── Wire up buttons ────────────────────────────────────────── */
window.loadReport = loadReport; // for inline onclick in error state

function wireButtons() {
  document.querySelectorAll(".action-button").forEach((btn) => {
    if (btn.textContent.trim() === "Generate Report") {
      btn.addEventListener("click", handleGenerateReport);
    }
  });

  const playButton   = document.getElementById("playButton");
  const videoPlayer  = document.getElementById("videoPlayer");
  const videoOverlay = document.getElementById("videoOverlay");
  if (playButton && videoPlayer) {
    playButton.addEventListener("click", () => {
      videoPlayer.play();
      videoOverlay?.classList.add("hidden");
    });
    videoPlayer.addEventListener("pause", () => videoOverlay?.classList.remove("hidden"));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", wireButtons);
} else {
  wireButtons();
}

loadReport();