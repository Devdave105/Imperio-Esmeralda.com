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

// Show "Site Under Construction" on click for all links and buttons
const clickableElements = document.querySelectorAll('a, .login-btn, .cart-icon svg');

clickableElements.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default navigation
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
ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🚧 Site Under Construction – Stay tuned!");
});


const aboutBtn = document.querySelector('.about-btn');
aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🚧 Site Under Construction – Stay tuned!");
});

document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});
// Get elements
const galleryCards = document.querySelectorAll('.gallery-card');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupClose = document.querySelector('.popup-close');

// Add click event to each gallery card
galleryCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    popupText.textContent = title;
    popup.style.display = 'flex';
  });
});

// Close popup
popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside content
popup.addEventListener('click', e => {
  if(e.target === popup){
    popup.style.display = 'none';
  }
});
