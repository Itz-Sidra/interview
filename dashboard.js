import { API_BASE } from "./js/config.js";
const container = document.getElementById("interviewsContainer");

/* KPI refs */
const kpiTotal = document.getElementById("kpiTotal");
const kpiAvgScore = document.getElementById("kpiAvgScore");
const kpiIssues = document.getElementById("kpiIssues");
const kpiDuration = document.getElementById("kpiDuration");

async function loadDashboard() {
  try {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (!token) {
      window.location.href = "login.html";
      return;
    }

    const res = await fetch(`${API_BASE}/interview/reports`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error(await res.text());

    const { reports } = await res.json();

    container.innerHTML = "";

    if (!reports || reports.length === 0) {
      container.innerHTML = `<p style="color:#5A6B7A;">No interviews found</p>`;
      updateKPIs([]);
      return;
    }

    /* Render interview cards */
    reports.forEach(report => {
      const card = document.createElement("div");
      card.className = "interview-card";
      card.onclick = () =>
        (window.location.href = `dashboard1.html?id=${report.id}`);

      card.innerHTML = `
        <div class="interview-left">
          <div class="avatar"></div>
          <div class="interview-info">
            <h3>${report.candidate.name}</h3>
            <h2>${report.candidate.role}</h2>
            <div class="interview-meta">
              <span>${new Date(report.interview.date).toLocaleString()}</span>
              <span>${report.interview.duration} min</span>
            </div>
          </div>
        </div>

        <div class="interview-right">
          <div class="score">
            <div class="score-value">${report.ratings.overall}</div>
            <div class="score-label">Overall Score</div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    updateKPIs(reports);

  } catch (err) {
    console.error("Dashboard load failed:", err);
  }
}

/* ---------------- KPI LOGIC ---------------- */

function updateKPIs(reports) {
  const total = reports.length;

  const avgScore =
    total > 0
      ? Math.round(
          reports.reduce((sum, r) => sum + (r.ratings.overall || 0), 0) / total
        )
      : 0;

  const totalDuration = reports.reduce(
    (sum, r) => sum + (r.interview.duration || 0),
    0
  );

  const issues = reports.reduce(
    (sum, r) => sum + (r.issuesCount || 0),
    0
  );

  kpiTotal.textContent = total;
  kpiAvgScore.textContent = avgScore;
  kpiDuration.textContent = `${totalDuration}m`;
  kpiIssues.textContent = issues;
}

loadDashboard();
