const API_BASE = "http://127.0.0.1:3000";
const token = localStorage.getItem("accessToken");

function getInterviewId() {
  return new URLSearchParams(window.location.search).get("interviewId");
}

async function loadDashboard() {
  const interviewId = getInterviewId();
  if (!interviewId) return alert("Missing interviewId");

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

window.addEventListener("DOMContentLoaded", loadDashboard);

document.querySelector(".score-number").textContent = report.ratings.overall;
document.querySelector(".score-large").textContent = report.ratings.overall;

const metricMap = {
  COMMUNICATION: "Communication",
  TECHNICAL: "Technical",
  CONFIDENCE: "Confidence",
  EMOTIONAL: "Emotional"
};

report.skills.forEach(skill => {
  // dynamically build metric cards here later
});

const issueContainer = document.querySelector(".flagged-section");
issueContainer.innerHTML = "";

report.recommendation?.areasToImprove?.forEach(issue => {
  issueContainer.innerHTML += `
    <div class="issue-card warning">
      <div class="issue-header">
        <span class="issue-title">${issue}</span>
      </div>
    </div>
  `;
});


const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const videoOverlay = document.getElementById('videoOverlay');

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

const uploadButton = document.getElementById('uploadButton');
const videoUpload = document.getElementById('videoUpload');
const uploadInfo = document.getElementById('uploadInfo');

uploadButton.addEventListener('click', () => {
    videoUpload.click();
});

videoUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
        if (!file.type.startsWith('video/')) {
            uploadInfo.textContent = 'Please select a valid video file';
            uploadInfo.style.color = '#ef4444';
            return;
        }

        const fileSize = (file.size / (1024 * 1024)).toFixed(2);
        uploadInfo.textContent = `Selected: ${file.name} (${fileSize} MB)`;
        uploadInfo.style.color = '#10b981';

        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        
        setTimeout(() => {
            uploadInfo.textContent = 'Video loaded successfully! Click play to preview.';
        }, 500);

        videoPlayer.addEventListener('loadeddata', () => {
            URL.revokeObjectURL(videoURL);
        }, { once: true });
    }
});

const viewButtons = document.querySelectorAll('.view-button');
viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const timeText = e.target.textContent;
        const timeMatch = timeText.match(/(\d+):(\d+)/);
        
        if (timeMatch) {
            const minutes = parseInt(timeMatch[1]);
            const seconds = parseInt(timeMatch[2]);
            const totalSeconds = minutes * 60 + seconds;
            
            videoPlayer.currentTime = totalSeconds;
            videoPlayer.play();
            
            videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent;
        alert(`${action} functionality would be implemented here`);
    });
});

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