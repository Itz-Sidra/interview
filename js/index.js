import interviewRoutes from './src/routes/interview.js';
   app.use('/api/interview', interviewRoutes);

document.addEventListener('DOMContentLoaded', () => {

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

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    const waitlistForm = document.getElementById('waitlist-form');
    const cardContent = document.querySelector('.registration-card .card-content');
    const successMessage = document.querySelector('.registration-card .success-message');
    const typingElement = document.querySelector('.typing-effect');

    if (typingElement) {
        const textToType = "Be the First to Use Evalvate";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(type, 90); 
            }
        }
        setTimeout(type, 500);
    }

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const emailInput = document.getElementById('email-input');
            
            if (emailInput.value && emailInput.checkValidity()) {
                cardContent.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                emailInput.style.borderColor = '#ef4444'; 
                setTimeout(() => { emailInput.style.borderColor = '' }, 2000); 
            }
        });
    }

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
});

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