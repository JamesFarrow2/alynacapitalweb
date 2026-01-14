// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a nav link (not dropdown trigger)
    document.querySelectorAll('.nav-link:not(.nav-dropdown-trigger)').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Mobile dropdown toggle
    const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // En móvil, prevenir la navegación y toggle el dropdown
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = trigger.closest('.nav-item-dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Navbar scroll effect - Add 'scrolled' class for transparency effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Animated Counter for Stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
};

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target;
            const target = parseInt(statValue.getAttribute('data-target'));
            animateCounter(statValue, target);
            statsObserver.unobserve(statValue);
        }
    });
}, {
    threshold: 0.5
});

// Observe all stat values
document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for actual section links, not placeholder links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for fade-in animations
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(card);
});

// Hover effect for service cards - enhance the number animation
document.querySelectorAll('.service-card').forEach(card => {
    const number = card.querySelector('.card-number');

    card.addEventListener('mouseenter', () => {
        number.style.transform = 'scale(1.05)';
        number.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        number.style.transform = 'scale(1)';
    });
});

// Add subtle animation to timeline items on scroll
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.animationPlayState = 'paused';
    timelineObserver.observe(item);
});

// Enhanced scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const valueSection = document.querySelector('.value-prop');
        if (valueSection) {
            valueSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger hero animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// Hero Background Slideshow - DISABLED (using gradient alternative)
// const heroBackgroundSlideshow = () => {
//     const slides = document.querySelectorAll('.hero-bg-slide');
//     if (slides.length === 0) return;
//     // ... slideshow code disabled
// };
// document.addEventListener('DOMContentLoaded', heroBackgroundSlideshow);

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Show success message (you can replace this with actual form submission logic)
        alert('¡Gracias por contactarnos! Te responderemos en menos de 24 horas.');

        // Reset form
        contactForm.reset();

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
    });
}

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// Performance optimization: Lazy load images if any are added
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Interactive Map with Leaflet
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('spain-map');

    if (mapElement && typeof L !== 'undefined') {
        // Initialize map centered on Spain
        const map = L.map('spain-map', {
            zoomControl: true,
            scrollWheelZoom: 'center',
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            tap: false
        }).setView([40.4168, -3.7038], 6);

        // Enable scroll wheel zoom when hovering over the map
        map.scrollWheelZoom.disable();

        mapElement.addEventListener('mouseenter', function() {
            map.scrollWheelZoom.enable();
        });

        mapElement.addEventListener('mouseleave', function() {
            map.scrollWheelZoom.disable();
        });

        // Add styled tile layer (CartoDB Voyager - elegant and reliable)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '© Colaboradores de OpenStreetMap, © CARTO',
            subdomains: 'abcd',
            maxZoom: 19,
            minZoom: 5
        }).addTo(map);

        // Project locations (proposal - you'll provide the real ones)
        const projects = [
            // Madrid - Multiple projects
            { lat: 40.4168, lng: -3.7038, type: 'fondos', city: 'Madrid', description: 'Fondos europeos para infraestructura tecnológica' },
            { lat: 40.4000, lng: -3.6500, type: 'ma', city: 'Madrid', description: 'Adquisición empresa servicios TI - 12M€' },

            // Barcelona
            { lat: 41.3851, lng: 2.1734, type: 'fondos', city: 'Barcelona', description: 'Proyecto I+D+i sectortecnológico' },
            { lat: 41.4000, lng: 2.2000, type: 'ma', city: 'Barcelona', description: 'Venta empresa logística - 8M€' },

            // Valencia
            { lat: 39.4699, lng: -0.3763, type: 'fondos', city: 'Valencia', description: 'Fondos para transformación digital' },

            // Sevilla
            { lat: 37.3891, lng: -5.9845, type: 'fondos', city: 'Sevilla', description: 'Ayuda para energías renovables' },

            // Bilbao
            { lat: 43.2630, lng: -2.9350, type: 'ma', city: 'Bilbao', description: 'Fusión empresas industriales - 15M€' },

            // Zaragoza
            { lat: 41.6488, lng: -0.8891, type: 'fondos', city: 'Zaragoza', description: 'Proyecto agricultura sostenible' },

            // Málaga
            { lat: 36.7213, lng: -4.4214, type: 'fondos', city: 'Málaga', description: 'Fondos turismo sostenible' },

            // Valladolid
            { lat: 41.6523, lng: -4.7245, type: 'ma', city: 'Valladolid', description: 'Adquisición empresa agroalimentaria - 6M€' },

            // Murcia
            { lat: 37.9922, lng: -1.1307, type: 'fondos', city: 'Murcia', description: 'Ayuda modernización agrícola' },

            // Pamplona
            { lat: 42.8125, lng: -1.6458, type: 'fondos', city: 'Pamplona', description: 'Fondos eficiencia energética' },

            // A Coruña
            { lat: 43.3623, lng: -8.4115, type: 'ma', city: 'A Coruña', description: 'Venta empresa naval - 10M€' },

            // Alicante
            { lat: 38.3452, lng: -0.4810, type: 'fondos', city: 'Alicante', description: 'Proyecto Smart City' },

            // Santander
            { lat: 43.4623, lng: -3.8100, type: 'fondos', city: 'Santander', description: 'Fondos economía azul' },
        ];

        // Custom icons with enhanced styling
        const fondosIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: linear-gradient(135deg, #74bba0 0%, #5da68a 100%); width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(116, 187, 160, 0.4), 0 2px 4px rgba(0,0,0,0.2); transition: transform 0.2s ease;"></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const maIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: linear-gradient(135deg, #f9ba73 0%, #f7a855 100%); width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(249, 186, 115, 0.4), 0 2px 4px rgba(0,0,0,0.2); transition: transform 0.2s ease;"></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        // Add markers to map
        projects.forEach(project => {
            const marker = L.marker([project.lat, project.lng], {
                icon: project.type === 'fondos' ? fondosIcon : maIcon
            }).addTo(map);

            // Add popup
            marker.bindPopup(`
                <div style="font-family: Montserrat, sans-serif;">
                    <strong style="color: #3c3c3b; font-size: 14px;">${project.city}</strong><br>
                    <span style="color: ${project.type === 'fondos' ? '#74bba0' : '#f9ba73'}; font-size: 11px; text-transform: uppercase; font-weight: 600;">
                        ${project.type === 'fondos' ? 'Fondos Europeos' : 'M&A'}
                    </span><br>
                    <span style="color: #5a5a59; font-size: 12px;">${project.description}</span>
                </div>
            `);
        });
    }

    // Interactive Spain Map for National Presence Section - SVG ILLUSTRATION
    const presenceMapElement = document.getElementById('spain-interactive-map');

    console.log('Looking for presence map element:', presenceMapElement);

    if (presenceMapElement) {
        console.log('✓ Found element, initializing illustrated Spain map...');

        // Real GPS coordinates for Spanish cities
        const spainCities = [
            { name: 'Madrid', lat: 40.4168, lng: -3.7038, type: 'fondos', desc: 'Fondos para infraestructura digital' },
            { name: 'Barcelona', lat: 41.3851, lng: 2.1734, type: 'ma', desc: 'Venta empresa tecnológica - 12M€' },
            { name: 'Valencia', lat: 39.4699, lng: -0.3763, type: 'fondos', desc: 'Ayudas transformación digital' },
            { name: 'Sevilla', lat: 37.3891, lng: -5.9845, type: 'fondos', desc: 'Fondos energías renovables' },
            { name: 'Bilbao', lat: 43.2630, lng: -2.9350, type: 'ma', desc: 'Fusión empresas industriales - 15M€' },
            { name: 'Zaragoza', lat: 41.6488, lng: -0.8891, type: 'fondos', desc: 'Agricultura sostenible' },
            { name: 'Málaga', lat: 36.7213, lng: -4.4214, type: 'fondos', desc: 'Turismo sostenible' },
            { name: 'Valladolid', lat: 41.6523, lng: -4.7245, type: 'ma', desc: 'Venta empresa agroalimentaria - 6M€' },
            { name: 'Murcia', lat: 37.9922, lng: -1.1307, type: 'fondos', desc: 'Modernización agrícola' },
            { name: 'Pamplona', lat: 42.8125, lng: -1.6458, type: 'fondos', desc: 'Eficiencia energética' },
            { name: 'A Coruña', lat: 43.3623, lng: -8.4115, type: 'ma', desc: 'Venta empresa naval - 10M€' },
            { name: 'Alicante', lat: 38.3452, lng: -0.4810, type: 'fondos', desc: 'Smart City' },
            { name: 'Santander', lat: 43.4623, lng: -3.8100, type: 'fondos', desc: 'Economía azul' },
            { name: 'Granada', lat: 37.1773, lng: -3.5986, type: 'fondos', desc: 'Patrimonio cultural' },
            { name: 'Vigo', lat: 42.2328, lng: -8.7226, type: 'ma', desc: 'Empresa logística - 8M€' },
            { name: 'Toledo', lat: 39.8628, lng: -4.0273, type: 'fondos', desc: 'Recuperación patrimonio' },
            { name: 'Salamanca', lat: 40.9701, lng: -5.6635, type: 'ma', desc: 'Venta empresa servicios - 5M€' },
            { name: 'Cáceres', lat: 39.4753, lng: -6.3724, type: 'fondos', desc: 'Desarrollo rural' },
            { name: 'Badajoz', lat: 38.8794, lng: -6.9707, type: 'fondos', desc: 'Infraestructura fronteriza' },
            { name: 'Almería', lat: 36.8381, lng: -2.4597, type: 'fondos', desc: 'Agricultura tecnificada' }
        ];

        // Initialize Leaflet map centered on Spain
        const map = L.map('spain-interactive-map', {
            zoomControl: true,
            scrollWheelZoom: false,
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            tap: false
        }).setView([40.0, -3.5], 6);

        console.log('✓ Leaflet map initialized');

        // Enable scroll wheel zoom on hover
        presenceMapElement.addEventListener('mouseenter', function() {
            map.scrollWheelZoom.enable();
        });

        presenceMapElement.addEventListener('mouseleave', function() {
            map.scrollWheelZoom.disable();
        });

        // Add styled tile layer - Using CartoDB Voyager (clear and elegant)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap, © CARTO',
            subdomains: 'abcd',
            maxZoom: 19,
            minZoom: 5
        }).addTo(map);

        console.log('✓ Map tiles loaded');

        // Custom marker icons with enhanced styling
        const fondosIcon = L.divIcon({
            className: 'custom-marker-presence fondos',
            html: `<div style="
                background: linear-gradient(135deg, #74bba0 0%, #5da68a 100%);
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 4px 12px rgba(116, 187, 160, 0.6), 0 2px 4px rgba(0,0,0,0.3);
                transition: transform 0.2s ease;
                animation: pulse-marker-presence 2.5s ease-in-out infinite;
            "></div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });

        const maIcon = L.divIcon({
            className: 'custom-marker-presence ma',
            html: `<div style="
                background: linear-gradient(135deg, #f9ba73 0%, #f7a855 100%);
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 4px 12px rgba(249, 186, 115, 0.6), 0 2px 4px rgba(0,0,0,0.3);
                transition: transform 0.2s ease;
                animation: pulse-marker-presence 2.5s ease-in-out infinite;
            "></div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });

        // Add CSS animation for pulse
        if (!document.getElementById('presence-pulse-animation')) {
            const style = document.createElement('style');
            style.id = 'presence-pulse-animation';
            style.textContent = `
                @keyframes pulse-marker-presence {
                    0%, 100% {
                        box-shadow: 0 4px 12px rgba(116, 187, 160, 0.6), 0 2px 4px rgba(0,0,0,0.3);
                    }
                    50% {
                        box-shadow: 0 0 0 15px rgba(116, 187, 160, 0), 0 4px 12px rgba(0,0,0,0.4);
                    }
                }
                .custom-marker-presence:hover > div {
                    transform: scale(1.3) !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Add markers to map with staggered animation
        spainCities.forEach((city, index) => {
            setTimeout(() => {
                const marker = L.marker([city.lat, city.lng], {
                    icon: city.type === 'fondos' ? fondosIcon : maIcon,
                    opacity: 0
                }).addTo(map);

                // Fade in marker
                setTimeout(() => {
                    marker.setOpacity(1);
                }, 50);

                // Add popup
                marker.bindPopup(`
                    <div style="font-family: Montserrat, sans-serif; min-width: 180px;">
                        <strong style="color: #3c3c3b; font-size: 15px; display: block; margin-bottom: 6px;">${city.name}</strong>
                        <span style="
                            color: ${city.type === 'fondos' ? '#74bba0' : '#f9ba73'};
                            font-size: 11px;
                            text-transform: uppercase;
                            font-weight: 600;
                            display: block;
                            margin-bottom: 6px;
                        ">
                            ${city.type === 'fondos' ? 'Fondos Europeos' : 'M&A'}
                        </span>
                        <span style="color: #5a5a59; font-size: 13px; line-height: 1.4;">
                            ${city.desc}
                        </span>
                    </div>
                `);

                console.log(`✓ Marker added: ${city.name}`);
            }, index * 80);
        });

        console.log('✅ Geographic map initialization complete!');

    } else if (!L) {
        console.error('❌ Leaflet library not loaded');
    } else {
        console.error('❌ Could not find #spain-interactive-map element');
    }
});

// ========== HERO SPECTACULAR EFFECTS ==========

// Detección de dispositivos para optimización de rendimiento
const isMobileDevice = () => window.innerWidth <= 768;
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// 1. Hero Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    // Desactivar parallax en dispositivos móviles para mejor rendimiento
    if (isMobileDevice()) return;

    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroArchitecture = document.querySelector('.hero-architecture');
    const heroSculpture = document.querySelector('.hero-sculpture');
    const heroContent = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        // Parallax de elementos arquitectónicos (más lento)
        if (heroArchitecture) {
            heroArchitecture.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Parallax de escultura (velocidad media, con rotación sutil)
        if (heroSculpture) {
            heroSculpture.style.transform = `translateY(${scrolled * -0.2}px) scale(${1 - scrolled * 0.0003})`;
            heroSculpture.style.opacity = 1 - (scrolled * 0.001);
        }

        // Parallax del contenido (velocidad normal)
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
            heroContent.style.opacity = 1 - (scrolled * 0.0015);
        }
    }
});

// 2. Dramatic Entrance Animation on Load
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroSculpture = document.querySelector('.hero-sculpture');
    const navbar = document.querySelector('.navbar');

    // Fade in hero con efecto dramático
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'scale(1.05)';

        setTimeout(() => {
            hero.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
            hero.style.opacity = '1';
            hero.style.transform = 'scale(1)';
        }, 100);
    }

    // Escultura entra con rotación
    if (heroSculpture) {
        heroSculpture.style.opacity = '0';
        heroSculpture.style.transform = 'translateY(-50%) scale(0.8) rotateY(-45deg)';

        setTimeout(() => {
            heroSculpture.style.transition = 'all 2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            heroSculpture.style.opacity = '1';
            heroSculpture.style.transform = 'translateY(-50%) scale(1) rotateY(0deg)';
        }, 400);
    }

    // Contenido entra desde abajo
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 600);
    }

    // Navbar entra suavemente
    if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            navbar.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        }, 200);
    }
});

// 3. Mouse Move Parallax Effect (sutil)
// Desactivar en dispositivos táctiles
if (!isTouchDevice()) {
    document.addEventListener('mousemove', (e) => {
        // También desactivar en móviles
        if (isMobileDevice()) return;

        const hero = document.querySelector('.hero');
        if (!hero) return;

        const heroRect = hero.getBoundingClientRect();
        if (heroRect.top > window.innerHeight || heroRect.bottom < 0) return;

        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const heroSculpture = document.querySelector('.hero-sculpture');
        const pillars = document.querySelectorAll('.arch-pillar');
        const lines = document.querySelectorAll('.arch-line');

        // Escultura sigue sutilmente el mouse
        if (heroSculpture) {
            const moveX = (mouseX - 0.5) * 15;
            const moveY = (mouseY - 0.5) * 15;
            heroSculpture.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        }

        // Pilares se mueven sutilmente
        pillars.forEach((pillar, index) => {
            const moveX = (mouseX - 0.5) * (5 + index * 2);
            pillar.style.transform = `translateX(${moveX}px)`;
        });

        // Líneas se mueven en dirección opuesta
        lines.forEach((line, index) => {
            const moveY = (mouseY - 0.5) * (3 + index * 1.5);
            line.style.transform = `translateY(${moveY}px)`;
        });
    });
}

// 4. CTA Buttons Magnetic Effect
// Solo en dispositivos no táctiles
if (!isTouchDevice()) {
    document.querySelectorAll('.hero-cta-dual .btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-3px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ========== NIVEL 1: MEJORAS VISUALES INMEDIATAS ==========

// 1. PARTÍCULAS FLOTANTES - Desactivadas (solo pilares arquitectónicos)
// (function initParticles() {
//     const canvas = document.getElementById('particles-hero');
//     if (!canvas) return;
//     // ... código comentado
// })();

// 2. CONTADORES ANIMADOS - Stats Impact
(function initCounters() {
    const counters = document.querySelectorAll('.hero-stat-number[data-target]');
    let hasAnimated = false;

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const prefix = element.getAttribute('data-prefix') || '';
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 segundos
        const start = 0;
        const increment = target / (duration / 16); // 60 FPS
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = prefix + Math.floor(current) + suffix;
        }, 16);
    }

    // Observador para detectar cuando las stats entran en viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 200); // Stagger 200ms
                });
            }
        });
    }, { threshold: 0.5 });

    // Observar el contenedor de stats
    const statsContainer = document.querySelector('.hero-stats-inline');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
})();

// ========== SERVICE CARDS MOUSE TRACKING EFFECT ==========
// Efecto de brillo que sigue el cursor en las tarjetas de servicio
(function initCardMouseTracking() {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
})();

// ========== BUTTON RIPPLE EFFECT ==========
// Efecto ripple al hacer clic en botones CTA
(function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-primary-filled, .btn-secondary-outline, .nav-link-cta');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Crear elemento ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Obtener posición del clic relativa al botón
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Posicionar el ripple
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Tamaño del ripple (proporcional al botón)
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';

            // Añadir al botón
            this.appendChild(ripple);

            // Remover después de la animación
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
})();

// ========================================
// MAPA LEAFLET - TRACK RECORD
// ========================================

(function() {
    'use strict';

    const mapElement = document.getElementById('spain-map');

    if (!mapElement || typeof L === 'undefined') {
        return;
    }

    // Inicializar mapa centrado en España
    const map = L.map('spain-map', {
        center: [40.4637, -3.7492],
        zoom: 6,
        minZoom: 5,
        maxZoom: 10,
        scrollWheelZoom: true,
        tap: true,
        tapTolerance: 15
    });

    // Añadir tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Verificar que existan los datos
    if (typeof projectsData === 'undefined') {
        console.warn('map-data.js no está cargado');
        return;
    }

    // Añadir marcadores
    projectsData.forEach(project => {
        // Convertir coordenadas ficticias a lat/lng reales (aproximado)
        const lat = project.location === 'Madrid' ? 40.4168 :
                    project.location === 'Barcelona' ? 41.3851 :
                    project.location === 'Jaén' ? 37.7796 :
                    project.location === 'Valencia' ? 39.4699 :
                    project.location === 'Sevilla' ? 37.3891 :
                    project.location === 'Zaragoza' ? 41.6488 :
                    project.location === 'Málaga' ? 36.7213 :
                    project.location === 'Bilbao' ? 43.2630 :
                    project.location === 'Valladolid' ? 41.6523 :
                    project.location === 'A Coruña' ? 43.3623 :
                    project.location === 'Murcia' ? 37.9922 :
                    project.location === 'Salamanca' ? 40.9701 :
                    project.location === 'Toledo' ? 39.8628 :
                    project.location === 'Burgos' ? 42.3439 :
                    project.location === 'Granada' ? 37.1773 :
                    project.location === 'Lleida' ? 41.6176 :
                    project.location === 'Tarragona' ? 41.1189 :
                    project.location === 'Terrassa' ? 41.5644 :
                    project.location === 'Badajoz' ? 38.8794 :
                    project.location === 'Zamora' ? 41.5034 :
                    project.location === 'León' ? 42.5987 :
                    project.location === 'Palencia' ? 42.0096 :
                    project.location === 'Ávila' ? 40.6566 :
                    project.location === 'Segovia' ? 40.9429 :
                    project.location === 'Soria' ? 41.7665 :
                    project.location === 'Logroño' ? 42.4627 :
                    project.location === 'Huelva' ? 37.2614 :
                    project.location === 'Cartagena' ? 37.6256 :
                    project.location === 'Gijón' ? 43.5322 :
                    project.location === 'Santander' ? 43.4623 :
                    project.location === 'San Sebastián' ? 43.3183 :
                    project.location === 'Pamplona' ? 42.8125 :
                    project.location === 'Vitoria-Gasteiz' ? 42.8467 :
                    project.location === 'Calatayud' ? 41.3525 :
                    project.location === 'Miranda de Ebro' ? 42.6867 :
                    project.location === 'Alfafar' ? 39.4207 :
                    project.location === 'Majadahonda' ? 40.4731 :
                    project.location === 'Motril' ? 36.7492 :
                    project.location === 'Oleiros' ? 43.3341 :
                    project.location === 'Villaviciosa' ? 43.4829 :
                    project.location === 'La Rinconada' ? 37.4832 :
                    project.location === 'Marbella' ? 36.5099 :
                    project.location === 'Ibiza' ? 38.9067 :
                    project.location === 'Benidorm' ? 38.5363 :
                    40.4637;

        const lng = project.location === 'Madrid' ? -3.7038 :
                    project.location === 'Barcelona' ? 2.1734 :
                    project.location === 'Jaén' ? -3.7850 :
                    project.location === 'Valencia' ? -0.3763 :
                    project.location === 'Sevilla' ? -5.9845 :
                    project.location === 'Zaragoza' ? -0.8891 :
                    project.location === 'Málaga' ? -4.4214 :
                    project.location === 'Bilbao' ? -2.9349 :
                    project.location === 'Valladolid' ? -4.7245 :
                    project.location === 'A Coruña' ? -8.4115 :
                    project.location === 'Murcia' ? -1.1307 :
                    project.location === 'Salamanca' ? -5.6635 :
                    project.location === 'Toledo' ? -4.0273 :
                    project.location === 'Burgos' ? -3.6969 :
                    project.location === 'Granada' ? -3.5986 :
                    project.location === 'Lleida' ? 0.6200 :
                    project.location === 'Tarragona' ? 1.2445 :
                    project.location === 'Terrassa' ? 2.0106 :
                    project.location === 'Badajoz' ? -6.9707 :
                    project.location === 'Zamora' ? -5.7446 :
                    project.location === 'León' ? -5.5671 :
                    project.location === 'Palencia' ? -4.5271 :
                    project.location === 'Ávila' ? -4.7015 :
                    project.location === 'Segovia' ? -4.1088 :
                    project.location === 'Soria' ? -2.4787 :
                    project.location === 'Logroño' ? -2.4450 :
                    project.location === 'Huelva' ? -6.9447 :
                    project.location === 'Cartagena' ? -0.9950 :
                    project.location === 'Gijón' ? -5.6615 :
                    project.location === 'Santander' ? -3.8100 :
                    project.location === 'San Sebastián' ? -1.9812 :
                    project.location === 'Pamplona' ? -1.6459 :
                    project.location === 'Vitoria-Gasteiz' ? -2.6714 :
                    project.location === 'Calatayud' ? -1.6422 :
                    project.location === 'Miranda de Ebro' ? -2.9468 :
                    project.location === 'Alfafar' ? -0.3882 :
                    project.location === 'Majadahonda' ? -3.8732 :
                    project.location === 'Motril' ? -3.5172 :
                    project.location === 'Oleiros' ? -8.3163 :
                    project.location === 'Villaviciosa' ? -5.4304 :
                    project.location === 'La Rinconada' ? -5.9736 :
                    project.location === 'Marbella' ? -4.8834 :
                    project.location === 'Ibiza' ? 1.4207 :
                    project.location === 'Benidorm' ? -0.1311 :
                    -3.7492;

        // Color según tipo
        const markerColor = project.type === 'ayudas' ? '#74bba0' : '#f9ba73';

        // Crear marcador más grande para móvil
        const isMobile = window.innerWidth <= 768;
        const marker = L.circleMarker([lat, lng], {
            radius: isMobile ? 10 : 8,
            fillColor: markerColor,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        // Popup con info - optimizado para móvil
        const popupContent = `
            <div style="min-width: ${isMobile ? '250px' : '200px'}; max-width: 300px;">
                <h4 style="margin: 0 0 8px 0; color: #3c3c3b; font-size: ${isMobile ? '1.1rem' : '1rem'};">${project.client}</h4>
                <p style="margin: 4px 0; color: rgba(60,60,59,0.7); font-size: ${isMobile ? '0.9rem' : '0.85rem'};">
                    <strong>${project.location}</strong>, ${project.province}
                </p>
                <p style="margin: 4px 0; color: rgba(60,60,59,0.7); font-size: ${isMobile ? '0.9rem' : '0.85rem'};">
                    ${project.description}
                </p>
                ${project.amount > 0 ? `
                <p style="margin: 8px 0 0 0; font-size: ${isMobile ? '1.2rem' : '1.1rem'}; font-weight: 700; color: ${markerColor};">
                    ${formatAmount(project.amount)}
                </p>
                ` : ''}
            </div>
        `;

        marker.bindPopup(popupContent, {
            closeButton: true,
            autoClose: true,
            closeOnClick: false,
            className: 'custom-popup',
            maxWidth: isMobile ? 280 : 300,
            minWidth: isMobile ? 250 : 200
        });

        // En móvil, abrir popup al tocar
        if (isMobile) {
            marker.on('click', function() {
                this.openPopup();
            });
        }
    });

    // Ajustar zoom inicial en móvil
    if (window.innerWidth <= 768) {
        map.setView([40.4637, -3.7492], 5);
    }
})();
