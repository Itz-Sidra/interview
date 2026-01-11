import { API_BASE } from "./config.js";
const params = new URLSearchParams(window.location.search);
const interviewId = params.get("id");

if (!interviewId) {
  alert("No interview ID found");
  window.location.href = "dashboard.html";
}

/* ---------------- DOM REFS ---------------- */
const candidateName = document.getElementById("candidateName");
const interviewDate = document.getElementById("interviewDate");
const overallScore = document.getElementById("overallScore");
const overallScoreLarge = document.getElementById("overallScoreLarge");
const flaggedTitle = document.getElementById("flaggedTitle");
const flaggedContainer = document.getElementById("flaggedContainer");
const metricsGrid = document.getElementById("metricsGrid");

/* ---------------- METRICS ---------------- */

function renderMetrics(report) {
  metricsGrid.innerHTML = "";

  const metrics = [
    { label: "Communication", score: report.ratings?.content ?? 0 },
    { label: "Grammar", score: report.grammar?.score ?? 0 },
    { label: "Filler Words", score: calcFiller(report) },
    { label: "Confidence", score: report.ratings?.confidence ?? 0 },
    { label: "Technical", score: calcTechnical(report) },
    { label: "Vocal", score: calcVocal(report) }
  ];

  metrics.forEach(m => {
    const card = document.createElement("div");
    card.className = "metric-card";

    card.innerHTML = `
      <div class="metric-header">
        <span>${m.label}</span>
      </div>
      <div class="metric-bar">
        <div class="bar-fill" style="width:${m.score}%"></div>
      </div>
      <div class="metric-score">${m.score}</div>
    `;

    metricsGrid.appendChild(card);
  });
}

function calcFiller(report) {
  const n = report.flagged?.filter(i => i.category === "FILLER_WORDS").length || 0;
  return Math.max(100 - n * 10, 60);
}

function calcTechnical(report) {
  const n = report.flagged?.filter(i => i.category === "TECHNICAL").length || 0;
  return Math.max(90 - n * 5, 60);
}

function calcVocal(report) {
  const n = report.flagged?.filter(i => i.category === "VOCAL").length || 0;
  return Math.max(90 - n * 5, 60);
}

/* ---------------- LOAD REPORT ---------------- */

async function loadReport() {
  try {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (!token) {
      window.location.href = "login.html";
      return;
    }

    const res = await fetch(`${API_BASE}interview/report/${interviewId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error(await res.text());

    const report = await res.json();
    console.log("REPORT:", report);

    /* Header */
    candidateName.textContent = report.candidate.name;
    interviewDate.textContent = new Date(report.interview.date).toLocaleString();

    /* Overall score */
    overallScore.textContent = report.ratings.overall;
    overallScoreLarge.textContent = report.ratings.overall;

    /* Metrics */
    renderMetrics(report);

    /* Flagged issues */
    const issues = report.flagged || [];
    flaggedTitle.textContent = `Flagged Issues (${issues.length})`;
    flaggedContainer.innerHTML = "";

    if (issues.length === 0) {
      flaggedContainer.innerHTML = `
        <p style="color:#5A6B7A;">No issues flagged 🎉</p>
      `;
    } else {
      issues.forEach(issue => {
        const div = document.createElement("div");
        div.className = "issue-card";

        div.innerHTML = `
          <div class="issue-header">
            <span class="issue-title">${issue.category}</span>
            <span class="issue-severity">Severity ${issue.severity}</span>
          </div>
          <div class="issue-content">
            <p class="issue-description">${issue.description}</p>
          </div>
        `;

        flaggedContainer.appendChild(div);
      });
    }

  } catch (err) {
    console.error("Report load failed:", err);
    alert("Failed to load report");
  }
}

loadReport();