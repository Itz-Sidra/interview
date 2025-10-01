/*
  ========================================
  Evalvate - Clean & Simple Interactive Scripts (UPDATED)
  ========================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Header scroll effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 20) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // --- NEW: Hero Pre-Registration Form Logic ---
    const waitlistForm = document.getElementById('waitlist-form');
    const cardContent = document.querySelector('.registration-card .card-content');
    const successMessage = document.querySelector('.registration-card .success-message');
    const typingElement = document.querySelector('.typing-effect');

    // 1. Typing Effect for the Headline
    if (typingElement) {
        // Use <br> to create the line break seen in the design
        const textToType = "Be the First to Use Evalvate";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(type, 90); // Adjust typing speed here (in ms)
            }
        }
        // Start typing after a short delay for better effect
        setTimeout(type, 500);
    }

    // 2. Form Submission Logic
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (event) => {
            // Prevent the form from refreshing the page
            event.preventDefault(); 
            const emailInput = document.getElementById('email-input');
            
            // Check if the email field is valid
            if (emailInput.value && emailInput.checkValidity()) {
                // Hide the form and show the success message
                cardContent.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                // If email is invalid, you could add visual feedback
                emailInput.style.borderColor = '#ef4444'; // Example: Red border
                setTimeout(() => { emailInput.style.borderColor = '' }, 2000); // Reset border after 2s
            }
        });
    }


    // --- Dynamic Company Logo Marquee ---
    const companies = [
        { name: "Accenture", filename: "Accenture.webp" },
        { name: "Adobe", filename: "adobe.svg" },
        { name: "Amazon", filename: "Amazon.jpg" },
        { name: "American Express", filename: "Amex.webp" },
        { name: "Barclays", filename: "barclays.svg" },
        { name: "Blackrock", filename: "BlackRock.webp" },
        { name: "Deloitte", filename: "deloitte.png" },
        { name: "Google", filename: "Google.jpg" },
        { name: "Goldman Sachs", filename: "goldmansachs.svg" },
        { name: "IBM", filename: "IBM.png" },
        { name: "Infosys", filename: "Infosys.png" },
        { name: "Intel", filename: "Intel.svg" },
        { name: "JP Morgan", filename: "JP Morgan.svg" },
        { name: "Meta", filename: "Meta.png" },
        { name: "Microsoft", filename: "Microsoft.png" },
        { name: "Netflix", filename: "Netflix.jpg" },
        { name: "Nvidia", filename: "NVIDIA.png" },
        { name: "Oracle", filename: "ORACLE.png" },
        { name: "TCS", filename: "TCS.png" },
        { name: "Wipro", filename: "wipro.svg" },
    ];

    const logoTrack = document.querySelector('.logo-track');
    if (logoTrack) {
        logoTrack.innerHTML = '';
        const allLogos = [...companies, ...companies];
        allLogos.forEach(company => {
            const img = document.createElement('img');
            img.src = `../Images of MNCs on Index/${company.filename}`;
            img.alt = `${company.name} Logo`;
            logoTrack.appendChild(img);
        });
    }

    // --- Analysis Nodes Interaction ---
    // Note: Calling this function, assuming it's defined elsewhere or will be.
    // If not, you may comment this out.
    // setupAnalysisNodes();

    // --- Analysis Report Charts ---
    // if (typeof Chart !== 'undefined') {
    //     createAnalysisCharts();
    // }

    // --- Report Action Buttons ---
    // setupReportActions();

    // --- Scroll-triggered Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section-title-left, .large-feature-card, .insights-content, .insights-visual, .testimonial-card, .final-cta-section');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    document.querySelectorAll('.large-feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // --- Placeholder function calls from your original file ---
    // If these functions are not defined, they might cause errors.
    // I've commented them out for safety.
    // setupCardInteractions();
    // setupChatInterface();
});

// The placeholder functions below are from your original file.
// If they are not fully implemented, they may cause errors.
// I have commented them out to ensure the page loads correctly.

/*
// --- Setup Analysis Nodes ---
function setupAnalysisNodes() {
    const analysisNodes = document.querySelectorAll('.analysis-node');
    analysisNodes.forEach(node => {
        node.addEventListener('click', () => {
            const nodeType = node.getAttribute('data-type');
            const nodeScore = node.querySelector('.node-score').textContent;
            showNodeDetails(nodeType, nodeScore);
        });
    });
}

// --- Show Node Details ---
function showNodeDetails(nodeType, nodeScore) {
    const scoreNumber = document.querySelector('.score-number');
    if (scoreNumber) {
        scoreNumber.textContent = nodeScore.replace('%', '');
    }
    const detailItems = document.querySelectorAll('.detail-item');
    detailItems.forEach(item => {
        const label = item.querySelector('.detail-label');
        if (label && label.textContent.toLowerCase().includes(nodeType)) {
            detailItems.forEach(i => {
                i.style.background = 'transparent';
            });
            item.style.background = 'rgba(37, 99, 235, 0.1)';
            setTimeout(() => {
                item.style.background = 'transparent';
            }, 2000);
        }
    });
}

// --- Analysis Charts Creation ---
function createAnalysisCharts() {
    // Chart creation logic...
}

// --- Setup Report Actions ---
function setupReportActions() {
    const viewRecordingBtn = document.querySelector('.btn-view-recording');
    if (viewRecordingBtn) {
        viewRecordingBtn.addEventListener('click', () => {
            alert('Opening interview recording player...');
        });
    }
    const downloadReportBtn = document.querySelector('.btn-download-report');
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', () => {
            alert('Downloading detailed analysis report...');
        });
    }
}
*/

// --- Video Testimonial Functionality ---
function playVideo(videoId) {
    const videoContainer = document.querySelector(`[data-video-id="${videoId}"]`);
    if (!videoContainer) return;
    const video = videoContainer.querySelector('.testimonial-video');
    const placeholder = videoContainer.querySelector('.video-placeholder');
    if (video && placeholder) {
        placeholder.style.display = 'none';
        video.classList.add('playing');
        video.play().catch(error => {
            console.log('Video autoplay failed:', error);
            video.style.display = 'block';
        });
        video.addEventListener('ended', () => {
            placeholder.style.display = 'flex';
            video.classList.remove('playing');
        });
        video.addEventListener('pause', () => {
            placeholder.style.display = 'flex';
            video.classList.remove('playing');
        });
    }
}