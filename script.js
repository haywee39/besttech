document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle hamburger menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Toggle dropdown menus on mobile
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  // Set active link based on current page URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPage === linkHref) {
      link.classList.add('active');
    }
  });
});




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// *********************************************************************************
// LAZY LOADING FOR THE FEATURED PRODUCTS 
document.addEventListener("DOMContentLoaded", function() {
  const productImages = document.querySelectorAll(".product-image img");
  productImages.forEach(img => {
    img.loading = "lazy";
  });
});

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// SCRIPT FOR THE why CHOOSE US
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      stepsObserver.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

// Use a unique name for the observer to avoid conflicts
const stepsObserver = new IntersectionObserver(callback, { threshold });

targets.forEach((target) => {
  stepsObserver.observe(target);
});


