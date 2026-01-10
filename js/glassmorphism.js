// Glassmorphism Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS-like animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Parallax effect for floating shapes
    const parallaxShapes = () => {
        const shapes = document.querySelectorAll('.floating-shape');
        const scrolled = window.pageYOffset;
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    };
    
    // Smooth counter animation
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-counter]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    };
    
    // Video controls
    const setupVideoControls = () => {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            // Add custom controls
            const container = video.parentElement;
            const playButton = container.querySelector('.play-button');
            
            if (playButton) {
                playButton.addEventListener('click', () => {
                    if (video.paused) {
                        video.play();
                        playButton.classList.add('hidden');
                    } else {
                        video.pause();
                        playButton.classList.remove('hidden');
                    }
                });
                
                video.addEventListener('play', () => {
                    playButton.classList.add('hidden');
                });
                
                video.addEventListener('pause', () => {
                    playButton.classList.remove('hidden');
                });
            }
        });
    };
    
    // Testimonial Carousel
    const initTestimonialCarousel = () => {
        const testimonials = document.querySelector('.testimonial-carousel');
        if (!testimonials) return;
        
        const cards = testimonials.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        
        const showTestimonial = (index) => {
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
                card.style.display = i === index ? 'block' : 'none';
            });
        };
        
        const nextTestimonial = () => {
            currentIndex = (currentIndex + 1) % cards.length;
            showTestimonial(currentIndex);
        };
        
        // Auto-rotate testimonials
        setInterval(nextTestimonial, 5000);
        
        // Initialize
        showTestimonial(0);
    };
    
    // Form validation
    const setupFormValidation = () => {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                        
                        // Show error message
                        const errorMsg = input.parentElement.querySelector('.error-message') || 
                                       document.createElement('span');
                        errorMsg.className = 'error-message text-red-500 text-sm mt-1';
                        errorMsg.textContent = `${input.placeholder || input.name} is required`;
                        
                        if (!input.parentElement.querySelector('.error-message')) {
                            input.parentElement.appendChild(errorMsg);
                        }
                    } else {
                        input.classList.remove('error');
                        const errorMsg = input.parentElement.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    }
                });
                
                if (isValid) {
                    // Show success message
                    showToast('Form submitted successfully!', 'success');
                    form.reset();
                }
            });
            
            // Clear error on input
            form.querySelectorAll('input, textarea').forEach(input => {
                input.addEventListener('input', () => {
                    input.classList.remove('error');
                    const errorMsg = input.parentElement.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                });
            });
        });
    };
    
    // Toast notifications
    window.showToast = (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `fixed top-20 right-4 z-50 p-4 rounded-lg glass-card animate-slide-in`;
        
        const colors = {
            success: 'text-green-600',
            error: 'text-red-600',
            warning: 'text-yellow-600',
            info: 'text-blue-600'
        };
        
        toast.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-5 h-5 ${colors[type]}" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-deep-navy font-medium">${message}</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('animate-slide-out');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    };
    
    // Smooth scroll with offset for fixed header
    const smoothScrollWithOffset = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    
    // Lazy load images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    };
    
    // Interactive hover effects
    const addInteractiveEffects = () => {
        const cards = document.querySelectorAll('.glass-card, .analysis-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.style.setProperty('--mouse-x', `${x}px`);
                this.style.setProperty('--mouse-y', `${y}px`);
            });
            
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.style.setProperty('--mouse-x', `${x}px`);
                this.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    };
    
    // Keyboard navigation
    const setupKeyboardNavigation = () => {
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal.active');
                modals.forEach(modal => {
                    modal.classList.remove('active');
                });
            }
            
            // Tab key trap for modals
            if (e.key === 'Tab') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    const focusableElements = activeModal.querySelectorAll(
                        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey && document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    };
    
    // Performance monitoring
    const monitorPerformance = () => {
        if ('PerformanceObserver' in window) {
            const perfObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('Performance:', entry.name, entry.duration);
                }
            });
            
            perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
        }
    };
    
    // Initialize all functions
    const init = () => {
        animateOnScroll();
        animateCounters();
        setupVideoControls();
        initTestimonialCarousel();
        setupFormValidation();
        smoothScrollWithOffset();
        lazyLoadImages();
        addInteractiveEffects();
        setupKeyboardNavigation();
        monitorPerformance();
        
        // Add scroll listeners
        window.addEventListener('scroll', () => {
            animateOnScroll();
            parallaxShapes();
        });
        
        // Add resize listener for responsive adjustments
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Recalculate positions after resize
                animateOnScroll();
            }, 250);
        });
    };
    
    // Start the app
    init();
    
    // Export for use in other scripts
    window.glassmorphism = {
        showToast,
        animateCounters,
        init
    };
});
