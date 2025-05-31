// Mobile Menu Variables
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Mobile Menu Toggle Function
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    // Optional: Change menu icon when clicked
    menuIcon.classList.toggle('bx-x');
};

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Header Scroll Effect
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("header");
    // Add/remove classes based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
    }
});

// DOM Content Loaded Event Handler
document.addEventListener("DOMContentLoaded", () => {
    // Lightbox Elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Add Click Events to Gallery Images
    document.querySelectorAll(".image-container img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // Close Lightbox Event
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Function to initialize animations
function initAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.heading').forEach(el => {
        el.classList.add('animate', 'fade-in-up');
    });

    document.querySelectorAll('.why-box').forEach(el => {
        el.classList.add('animate', 'scale-in');
    });

    document.querySelectorAll('.about-overlay').forEach(el => {
        el.classList.add('animate', 'slide-in-right');
    });

    document.querySelectorAll('.ceo-img').forEach(el => {
        el.classList.add('animate', 'slide-in-left');
    });

    document.querySelectorAll('.ceo-text').forEach(el => {
        el.classList.add('animate', 'slide-in-right');
    });

    document.querySelectorAll('.image-container').forEach(el => {
        el.classList.add('animate', 'fade-in-up');
    });

    // Observe all animated elements
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
