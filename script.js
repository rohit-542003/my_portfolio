// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Option 1: Using Formspree (Easiest)
    const form = this;
    try {
        const response = await fetch('https://formspree.io/f/your-formspree-id', {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert('Thanks for your message! I\'ll get back to you soon.');
            form.reset();
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message.');
    }
});

// Optional: Add a scroll-to-top button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-top').style.display = 'none';
    }
}; 