// NAVBAR TOGGLE
const nav = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

// Hamburger toggle
hamburger.addEventListener("click", () => {
    if (nav.style.right === "0px") {
        nav.style.right = "-100%";
    } else {
        nav.style.right = "0px";
    }
    hamburger.classList.toggle("active");
});

// Show "Site Under Construction" on click for all links
const clickableElements = document.querySelectorAll('a, .login-btn, .cart-icon svg');

clickableElements.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        alert("🚧 Site Under Construction – Stay tuned!");
    });
});

// Product buttons alert
const productButtons = document.querySelectorAll('.card .btn');
productButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("🚧 Site Under Construction – Stay tuned!");
    });
});

// CTA button alert
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("🚧 Site Under Construction – Stay tuned!");
    });
}

// ABOUT button alert
const aboutBtn = document.querySelector('.about-btn');
if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("🚧 Site Under Construction – Stay tuned!");
    });
}

// FAQ DROPDOWN
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// GALLERY POPUP
const galleryCards = document.querySelectorAll('.gallery-card');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupClose = document.querySelector('.popup-close');

galleryCards.forEach(card => {
    card.addEventListener('click', () => {
        popupText.textContent = card.getAttribute('data-title');
        popup.style.display = 'flex';
    });
});

popupClose.addEventListener('click', () => popup.style.display = 'none');

popup.addEventListener('click', e => {
    if (e.target === popup) popup.style.display = 'none';
});

// SCROLL TO TOP BUTTON
const scrollUpBtn = document.getElementById('footerScrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }
});

// Smooth scroll
scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
