/**
 * SERVICE PAGE JAVASCRIPT
 * Ayudas y Subvenciones - Alyna Capital
 * Handles FAQ accordions and page interactions
 */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // FAQ ACCORDION FUNCTIONALITY
    // ========================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other FAQ items in the same block
            const currentBlock = this.closest('.faq-block');
            const allQuestionsInBlock = currentBlock.querySelectorAll('.faq-question');

            allQuestionsInBlock.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // NAVBAR SCROLL BEHAVIOR
    // ========================================

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for fade-in animation
    const animatedElements = document.querySelectorAll('.target-card, .process-service-card, .project-type-card, .why-us-card, .faq-block');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // ========================================
    // SCROLL REVEAL FOR PROBLEM REASONS (ZOOM EFFECT)
    // ========================================

    const reasonObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const reasonObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add revealed class with stagger delay
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 200);
                // Unobserve after revealing
                reasonObserver.unobserve(entry.target);
            }
        });
    }, reasonObserverOptions);

    // Observe all reason items
    const reasonItems = document.querySelectorAll('.reason-item[data-reveal]');
    reasonItems.forEach(item => {
        reasonObserver.observe(item);
    });

    // ========================================
    // TIMELINE SCROLL REVEAL ANIMATION
    // ========================================

    const timelineObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const step = entry.target.getAttribute('data-step');
                // Stagger delay based on step number
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, parseInt(step) * 150);
                // Unobserve after revealing
                timelineObserver.unobserve(entry.target);
            }
        });
    }, timelineObserverOptions);

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item[data-step]');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ========================================
    // FORM SUBMISSION (if contact form exists)
    // ========================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Here you would typically send the data to your backend
            console.log('Form submitted:', data);

            // Show success message (you can customize this)
            alert('Gracias por tu mensaje. Te responderemos en menos de 24 horas.');

            // Reset form
            this.reset();
        });
    }

    // ========================================
    // KEYBOARD ACCESSIBILITY FOR FAQ
    // ========================================

    faqQuestions.forEach(question => {
        question.addEventListener('keydown', function(e) {
            // Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // ========================================
    // MODAL FUNCTIONALITY
    // ========================================

    const modalButtons = document.querySelectorAll('.btn-view-example');
    const modals = document.querySelectorAll('.example-modal');

    // Open modal
    modalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });
    });

    // Close modal function
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }

    // Close modal on X button
    modals.forEach(modal => {
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                closeModal(modal);
            });
        }

        // Close modal on overlay click
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', function() {
                closeModal(modal);
            });
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });

});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
