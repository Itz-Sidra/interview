import { API_BASE } from "./js/config.js";
import EvalvateAuth from "./js/dauth.js";
      async function syncCreditsFromBackend() {
  const token =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');

  if (!token) return;

  try {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) return;

    const user = await res.json();

    // 🔥 THIS IS THE FIX
    EvalvateAuth.setCredits(user.credits);
    EvalvateAuth.updateUser({
      name: user.name,
      email: user.email
    });

  } catch (err) {
    console.error('Failed to sync credits:', err);
  }
}

      // Check if user is logged in, redirect to login if not
      if (!EvalvateAuth.isLoggedIn()) {
        window.location.href = 'login.html';
      }

      // Populate user data
      function initDashboard() {
        const user = EvalvateAuth.getUser();
        const credits = EvalvateAuth.getCredits();
        const interviews = EvalvateAuth.getInterviews();

        // Update welcome name
        if (user && user.name) {
          document.getElementById('welcomeName').textContent = user.name.split(' ')[0];
          document.getElementById('dropdownUserName').textContent = user.name;
          document.getElementById('dropdownUserEmail').textContent = user.email || '';
          
          // Set initials
          const initials = EvalvateAuth.getUserInitials();
          document.getElementById('avatarInitials').textContent = initials;
          document.getElementById('dropdownInitials').textContent = initials;
        }

        // Update credits
        document.getElementById('navCreditsCount').textContent = credits;
        document.getElementById('dropdownCredits').textContent = credits;
        document.getElementById('creditsDisplay').textContent = credits;
        document.getElementById('statCredits').textContent = credits;

        // Update plan
        if (user && user.plan) {
          document.getElementById('dropdownPlan').textContent = user.plan;
        }

        // Update stats
        document.getElementById('statInterviews').textContent = interviews.length;
        
        // Calculate average score
        const scoredInterviews = interviews.filter(i => i.score !== null);
        if (scoredInterviews.length > 0) {
          const avgScore = Math.round(
            scoredInterviews.reduce((sum, i) => sum + i.score, 0) / scoredInterviews.length
          );
          document.getElementById('statAvgScore').textContent = avgScore;
        }

        // Render interviews list
        renderInterviews(interviews);
      }

      // Helper function to format interview date
      function formatInterviewDate(dateString) {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const mins = minutes < 10 ? '0' + minutes : minutes;
        return `${month} ${day}, ${year}, ${hours}:${mins} ${ampm}`;
      }

      // Helper function to generate score bars
      function generateScoreBars(score) {
        if (score === null || score === undefined) {
          // Return default bars for pending scores
          return { heights: [70, 75, 65, 72], classes: ['bar', 'barg', 'bar', 'barg'] };
        }
        // Generate 4 bar heights that average around the score
        const baseHeight = score;
        const variations = [-5, 5, -3, 3]; // Variations for each bar
        const heights = variations.map(v => Math.max(60, Math.min(100, baseHeight + v)));
        
        // Determine bar classes based on score quality
        // Higher scores get more green bars (barg), lower scores get more red bars (bar)
        let classes;
        if (score >= 85) {
          // Excellent scores: mostly green bars
          classes = ['barg', 'barg', 'barg', 'barg'];
        } else if (score >= 70) {
          // Good scores: mix of green and red
          classes = ['bar', 'barg', 'bar', 'barg'];
        } else {
          // Average scores: mostly red bars
          classes = ['bar', 'bar', 'bar', 'barg'];
        }
        
        return { heights, classes };
      }

      // Helper function to get report page URL based on index
      function getReportPageUrl(index) {
        const reportPages = ['dashboard1.html', 'dashboard2.html', 'dashboard3.html'];
        return reportPages[index % reportPages.length];
      }

      function renderInterviews(interviews) {
        const listEl = document.getElementById('interviewsList');
        const emptyState = document.getElementById('emptyState');

        // Clear any existing interview cards (except empty state)
        const existingCards = listEl.querySelectorAll('.interview-card');
        existingCards.forEach(card => card.remove());

        if (interviews.length === 0) {
          emptyState.style.display = 'block';
          return;
        }

        emptyState.style.display = 'none';

        // Get user name from auth
        const user = EvalvateAuth.getUser();
        const userName = user ? user.name : 'User';

        // Show only last 5 interviews
        const recentInterviews = interviews.slice(0, 5);
        
        recentInterviews.forEach((interview, index) => {
          const card = document.createElement('div');
          card.className = 'interview-card';
          card.onclick = () => location.href = getReportPageUrl(index);

          const formattedDate = formatInterviewDate(interview.date);
          const duration = interview.duration || 'N/A';

          // Determine score class and value
          let scoreClass = 'average';
          let scoreValue = '--';
          if (interview.score !== null && interview.score !== undefined) {
            scoreValue = interview.score;
            scoreClass = interview.score >= 85 ? 'good' : 'average';
          }

          // Generate score bars
          const scoreBars = generateScoreBars(interview.score);
          
          // Alternate avatar colors
          const avatarClass = index % 2 === 0 ? 'avatar' : 'avatar orange';

          card.innerHTML = `
            <div class="interview-left">
              <div class="${avatarClass}"></div>
              <div class="interview-info">
                <span>
                  <h3>${userName}</h3>
                  <h2>${interview.role || 'General'}</h2>
                </span>
                <div class="interview-meta">
                  <span class="meta-item">
                    <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    ${formattedDate}
                  </span>
                  <span class="meta-item">
                    <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    ${duration}
                  </span>
                </div>
              </div>
            </div>
            <div class="interview-right">
              <div class="score">
                <div class="score-value ${scoreClass}">${scoreValue}</div>
                <div class="score-label">Overall Score</div>
              </div>
              <div class="score-bars">
                ${scoreBars.heights.map((height, i) => 
                  `<div class="${scoreBars.classes[i]}" style="height: ${height}%"></div>`
                ).join('')}
              </div>
            </div>
          `;

          listEl.insertBefore(card, emptyState);
        });
      }

      // Profile dropdown toggle
      const profileAvatar = document.getElementById('profileAvatar');
      const dropdownMenu = document.getElementById('dropdownMenu');

      profileAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
      });

      dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      // Logout handler
      document.getElementById('logoutBtn').addEventListener('click', () => {
        EvalvateAuth.logout();
        window.location.href = 'login.html';
      });

      // Start Interview handler
      document.getElementById('startInterviewBtn').addEventListener('click', () => {
        const credits = EvalvateAuth.getCredits();
        
        // Frontend UX check
        if (credits <= 0) {
          alert('You have no credits remaining. Please purchase more credits to continue.');
          window.location.href = 'pricing.html';
          return;
        }

        // Navigate to interview flow - credit will be deducted by backend
        // when interview actually starts (first question asked)
        window.location.href = 'preview1.html';
      });

      // Initialize dashboard
      (async () => {
  await syncCreditsFromBackend();
  initDashboard();
})();

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });