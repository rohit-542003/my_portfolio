// Mobile Navigation
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

// Add hamburger menu button
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
nav.insertBefore(hamburger, navLinks);

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // You can add your form submission logic here
        console.log('Form submitted:', { name, email, message });
        
        // Clear form
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Add some animations when elements come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add styles for the hamburger menu and animations
const style = document.createElement('style');
style.textContent = `
    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
    }

    .hamburger span {
        width: 30px;
        height: 3px;
        background: #333;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    .hamburger.active span:first-child {
        transform: rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:last-child {
        transform: rotate(-45deg);
    }

    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }
    }

    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style);

// Optional: Add a scroll-to-top button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-top').style.display = 'none';
    }
}; 