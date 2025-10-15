// Sticky navigation on scroll
function updateNavOnScroll() {
    const nav = document.querySelector('.nav-sticky');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavOnScroll);

// Ensure the nav state is correct immediately after the script loads.
// This handles cases where the nav is injected dynamically or the page
// is already scrolled when the script runs.
document.addEventListener('DOMContentLoaded', updateNavOnScroll);
updateNavOnScroll();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});