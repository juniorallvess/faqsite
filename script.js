// Basic intersection observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to cards and sections
    const animElements = document.querySelectorAll('.card, .timeline-item, .section-title');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.boxShadow = 'none';
        }
    });
});
