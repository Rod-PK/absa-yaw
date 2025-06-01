const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Toggle dropdowns on mobile
dropdowns.forEach(dropdown => {
    const anchor = dropdown.querySelector('a');

    anchor.addEventListener('click', e => {
        // Only toggle on small screens
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });
});

// Optional: close mobile menu if window resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
        dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
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

// Product page: Image thumbnail switching
if (document.querySelector('.product-images')) {
    document.addEventListener('DOMContentLoaded', function () {
        const mainImage = document.getElementById('mainProductImage');
        const thumbnails = document.querySelectorAll('.product-thumbnails .thumbnail');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function () {
                // Change main image src
                mainImage.src = this.src;
                // Remove active from all, add to clicked
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Price option selection styling
    document.querySelectorAll('.product-price-options input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.querySelectorAll('.product-price-options .price-option').forEach(option => {
                option.classList.remove('selected');
            });
            this.closest('.price-option').classList.add('selected');
        });
    });
});

// Function to update the main image when a thumbnail is clicked
function updateMainImage(event) {
    const mainImage = document.getElementById('mainProductImage');
    const clickedThumbnail = event.target;

    // Update the main image source with the clicked thumbnail's source
    if (clickedThumbnail.tagName === 'IMG') {
        mainImage.src = clickedThumbnail.src;
    }
}

// Add event listeners to all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', updateMainImage);
});

