document.addEventListener('DOMContentLoaded', () => {
    // Spot It Button Interaction
    const spotItBtn = document.querySelector('.btn-spot-it');
    if (spotItBtn) {
        spotItBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = spotItBtn.innerHTML;
            spotItBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Spotting...';
            spotItBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                spotItBtn.innerHTML = originalText;
                spotItBtn.style.opacity = '1';
            }, 1500);
        });
    }

    // Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.getElementById('navOverlay');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }

    // View Shop Buttons
    const viewButtons = document.querySelectorAll('.btn-outline');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = 'Loading...';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 800);
        });
    });

    // Map Toggle Buttons
    const mapBtns = document.querySelectorAll('.map-btn');
    mapBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.parentElement;
            parent.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Make radar dots pulse
    const addPulseEffect = () => {
        const dots = document.querySelectorAll('.center-dot');
        dots.forEach(dot => {
            dot.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(1.5)', opacity: 0.5 },
                { transform: 'scale(1)', opacity: 1 }
            ], {
                duration: 2000,
                iterations: Infinity,
                easing: 'ease-in-out'
            });
        });
    };
    
    addPulseEffect();

    // Onboarding Modal Event Listener
    const btnOnboarding = document.querySelector('.btn-onboarding');
    if (btnOnboarding) {
        btnOnboarding.addEventListener('click', openModal);
    }

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            // Optional: close other open items
            // document.querySelectorAll('.faq-item').forEach(item => {
            //     if (item !== parent) item.classList.remove('active');
            // });
            parent.classList.toggle('active');
        });
    });
});

// Global functions for modal
function openModal() {
    const modal = document.getElementById('onboardingModal');
    if (modal) {
        modal.classList.add('active');
        // Reset to step 1
        nextStep(1);
    }
}

function closeModal() {
    const modal = document.getElementById('onboardingModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function nextStep(stepNum) {
    // Hide all steps
    document.querySelectorAll('.modal-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show target step
    const target = document.getElementById('step' + stepNum);
    if (target) {
        target.classList.add('active');
    }
}

// Global function for Auth Toggle
function switchAuth(type) {
    const btnLogin = document.getElementById('btnShowLogin');
    const btnSignup = document.getElementById('btnShowSignup');
    const formLogin = document.getElementById('loginForm');
    const formSignup = document.getElementById('signupForm');

    if (!btnLogin || !btnSignup || !formLogin || !formSignup) return;

    if (type === 'login') {
        btnLogin.classList.add('active');
        btnSignup.classList.remove('active');
        formLogin.classList.add('active');
        formSignup.classList.remove('active');
    } else {
        btnSignup.classList.add('active');
        btnLogin.classList.remove('active');
        formSignup.classList.add('active');
        formLogin.classList.remove('active');
    }
}
