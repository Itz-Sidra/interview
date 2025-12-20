const API_BASE = "http://127.0.0.1:3000";
const token = localStorage.getItem("accessToken");

function getInterviewId() {
  return new URLSearchParams(window.location.search).get("interviewId");
}

async function loadDashboard() {
  const interviewId = getInterviewId();
  
  if (!interviewId) {
    // Try to get from localStorage (from interview.js redirect)
    const storedReport = localStorage.getItem('latestReport');
    if (storedReport) {
      const report = JSON.parse(storedReport);
      renderDashboard(report);
      return;
    }
    
    alert("Missing interviewId");
    return;
  }

  const res = await fetch(`${API_BASE}/interview/report/${interviewId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    alert("Failed to load interview report");
    return;
  }

  const report = await res.json();
  renderDashboard(report);
}

function renderDashboard(report) {
  // Update overall score
  document.querySelector(".score-number").textContent = report.ratings.overall;
  document.querySelector(".score-large").textContent = report.ratings.overall;

  // Update metric cards
  const metricCards = document.querySelectorAll(".metric-card");
  metricCards.forEach(card => {
    const metricName = card.querySelector(".metric-header span").textContent;
    let score = 0;

    // Map metric names to report data
    switch(metricName) {
      case "Communication":
        score = report.ratings.content || 0;
        break;
      case "Grammar":
        score = report.grammar.score || 0;
        break;
      case "Confidence":
        score = report.ratings.confidence || 0;
        break;
      case "Technical":
        score = report.ratings.content || 0;
        break;
      default:
        score = report.ratings.overall || 0;
    }

    card.querySelector(".metric-score").textContent = score;
    card.querySelector(".bar-fill").style.width = `${score}%`;
  });

  // Update flagged issues
  const issueContainer = document.querySelector(".flagged-section");
  const existingH3 = issueContainer.querySelector("h3");
  issueContainer.innerHTML = "";
  issueContainer.appendChild(existingH3);

  if (report.flagged && report.flagged.length > 0) {
    existingH3.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
      Flagged Issues (${report.flagged.length})
    `;

    report.flagged.forEach(issue => {
      const severityClass = issue.severity === 3 ? 'error' : issue.severity === 2 ? 'warning' : 'success';
      const icon = issue.severity === 3 ? '✕' : issue.severity === 2 ? '⚠️' : '✓';

      issueContainer.innerHTML += `
        <div class="issue-card ${severityClass}">
          <div class="issue-header">
            <span class="issue-icon">${icon}</span>
            <span class="issue-title">${issue.category}</span>
          </div>
          <div class="issue-content">
            <p class="issue-description">${issue.description}</p>
          </div>
        </div>
      `;
    });
  } else {
    issueContainer.innerHTML += `
      <div class="issue-card success">
        <div class="issue-header">
          <span class="issue-icon">✓</span>
          <span class="issue-title">No Issues Found</span>
        </div>
        <div class="issue-content">
          <p class="issue-description">Great performance! No major issues detected.</p>
        </div>
      </div>
    `;
  }

  // Update recommendations
  if (report.recommendation) {
    const assessmentSection = document.querySelector(".assessment-section");
    
    if (report.recommendation.areasToImprove) {
      report.recommendation.areasToImprove.forEach((area, index) => {
        // You can add these as assessment items or update existing ones
        console.log(`Area to improve ${index + 1}:`, area);
      });
    }
  }

  console.log("Dashboard rendered with report:", report);
}

// Event listeners for video player
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const videoOverlay = document.getElementById('videoOverlay');

if (playButton && videoPlayer && videoOverlay) {
  playButton.addEventListener('click', () => {
    videoPlayer.play();
    videoOverlay.classList.add('hidden');
  });

  videoPlayer.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      videoOverlay.classList.add('hidden');
    } else {
      videoPlayer.pause();
      videoOverlay.classList.remove('hidden');
    }
  });

  videoPlayer.addEventListener('pause', () => {
    videoOverlay.classList.remove('hidden');
  });

  videoPlayer.addEventListener('play', () => {
    videoOverlay.classList.add('hidden');
  });
}

// View buttons for timeline
const viewButtons = document.querySelectorAll('.view-button');
viewButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const timeText = e.target.textContent;
    const timeMatch = timeText.match(/(\d+):(\d+)/);
    
    if (timeMatch && videoPlayer) {
      const minutes = parseInt(timeMatch[1]);
      const seconds = parseInt(timeMatch[2]);
      const totalSeconds = minutes * 60 + seconds;
      
      videoPlayer.currentTime = totalSeconds;
      videoPlayer.play();
      
      videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Action buttons
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.textContent;
    alert(`${action} functionality would be implemented here`);
  });
});

// Animate bars on load
window.addEventListener('load', () => {
  const metricBars = document.querySelectorAll('.bar-fill');
  metricBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
});

// Load dashboard on page load
window.addEventListener("DOMContentLoaded", loadDashboard);