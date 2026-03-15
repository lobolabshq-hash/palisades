
// Palisades Website JavaScript

(function() {
    'use strict';

    // ================================
    // Age Gate
    // ================================
    const ageGate = document.getElementById('age-gate');
    const ageYes = document.getElementById('age-yes');
    const rememberAge = document.getElementById('remember-age');
    const AGE_KEY = 'palisades_age_verified';

    function checkAgeVerification() {
        const verified = localStorage.getItem(AGE_KEY);
        if (verified === 'true') {
            ageGate.classList.remove('active');
        }
    }

    function verifyAge() {
        if (rememberAge && rememberAge.checked) {
            localStorage.setItem(AGE_KEY, 'true');
        }
        ageGate.classList.remove('active');
    }

    if (ageGate && ageYes) {
        checkAgeVerification();
        ageYes.addEventListener('click', verifyAge);
    }

    // ================================
    // Header Scroll Effect
    // ================================
    const header = document.querySelector('.header');
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Check on load

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // Store Locator (Mock)
    // ================================
    const locatorForm = document.getElementById('locator-form');
    const locatorResults = document.getElementById('locator-results');

    // Mock store data
    const stores = [
        {
            name: 'Dispensary Plus',
            address: '123 Main St, Jersey City, NJ 07302',
            distance: '2.3 miles'
        },
        {
            name: 'Green Wellness',
            address: '456 Garden Ave, Hoboken, NJ 07030',
            distance: '3.7 miles'
        },
        {
            name: 'Elevation Cannabis',
            address: '789 Heights Blvd, Weehawken, NJ 07086',
            distance: '5.1 miles'
        }
    ];

    if (locatorForm) {
        locatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const zip = document.getElementById('zip').value;
            
            if (!zip) return;

            // Show loading state
            locatorResults.innerHTML = '<p>Finding stores...</p>';

            // Simulate API call
            setTimeout(() => {
                displayResults(stores);
            }, 800);
        });
    }

    function displayResults(results) {
        if (!locatorResults) return;

        if (results.length === 0) {
            locatorResults.innerHTML = '<p>No retailers found near that location. Try a different ZIP or <a href="#" class="link">view all locations</a>.</p>';
            return;
        }

        let html = '';
        results.forEach(store => {
            html += `
                <div class="store-result">
                    <h4>${escapeHtml(store.name)}</h4>
                    <p>${escapeHtml(store.address)} · ${escapeHtml(store.distance)}</p>
                </div>
            `;
        });

        locatorResults.innerHTML = html;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ================================
    // Email Signup
    // ================================
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const ageConfirm = this.querySelector('input[name="age-confirm"]').checked;

            if (!email || !ageConfirm) {
                if (signupMessage) {
                    signupMessage.textContent = 'Please confirm you are 21+ to subscribe.';
                    signupMessage.style.color = '#c44';
                }
                return;
            }

            // Show loading state
            if (signupMessage) {
                signupMessage.textContent = 'Subscribing...';
                signupMessage.style.color = '';
            }

            // Simulate API call
            setTimeout(() => {
                if (signupMessage) {
                    signupMessage.textContent = 'Welcome. You\'re on the list.';
                    signupMessage.style.color = '#2D3B2D';
                }
                signupForm.reset();
            }, 1000);
        });
    }

    // ================================
    // Scroll Reveal Animation
    // ================================
    const revealElements = document.querySelectorAll('.section > .container');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        revealObserver.observe(el);
    });

    // ================================
    // Mobile Navigation Toggle
    // ================================
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

})();
