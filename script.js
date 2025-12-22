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
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const closeModal = document.querySelector(".close-modal");

/* Product Data */
const productData = {
  product1: {
    title: "Automatic Bottle Water Machine",
    description: "A high-speed fully automated washing, filling, and capping solution for bottled water production.",
    specs: [
      "Capacity: 5,000 BPH",
      "Accuracy: ±2mm",
      "Weight: 2400–3200Kg",
      "Power: 45.5kW"
    ]
  },
  product2: {
    title: "Automatic Bag Labeling Machine",
    description: "Designed for accurate and fast labeling of plastic and poly bags.",
    specs: [
      "Speed: 60–150 pcs/min",
      "Accuracy: ±1mm",
      "Weight: 185Kg",
      "Power: 220V 50/60Hz"
    ]
  },
  product3: {
    title: "Inline Shrink Wrap Machine",
    description: "Ideal for packaging boxes and products using shrink film technology. lorem ipsum asdf qwerty jkl;ghfbbdb rhwsfjedfjtf tkdrwrtytyuotjfg rndn rs tnsnsrnfn",
    specs: [
      "Type: Fully Automatic Inline Sleeve",
      "Speed: 10–25 packs/min",
      "Sealing Width: 600–750mm",
      "Power: 380V 3-Phase"
    ]
  }
};

/* Open Modal */
document.querySelectorAll(".product-button").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const product = productData[button.dataset.product];

    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalSpecs.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join("");

    modal.style.display = "flex";
  });
});

/* Close Modal */
closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
// ()()()()()()()()()()()()()()()
{/* <script> */}
const whatsappBtn = document.getElementById("whatsappBtn");
const quoteBtn = document.getElementById("quoteBtn");
// const quoteForm = document.getElementById("quoteForm");

document.querySelectorAll(".product-button").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();

    const product = productData[button.dataset.product];

    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalSpecs.innerHTML = product.specs.map(s => `<li>${s}</li>`).join("");

    const msg = `Hello, I am interested in the ${product.title}. Please share price and details.`;
    whatsappBtn.href = `https://wa.me/2348064482669?text=${encodeURIComponent(msg)}`;

    quoteForm.style.display = "none";
    modal.style.display = "flex";
  });
});

quoteBtn.onclick = () => {
  quoteForm.style.display = "block";
};
{/* </script> */}


// *********************************************************************************
// LAZY LOADING FOR THE FEATURED PRODUCTS 
// document.addEventListener("DOMContentLoaded", function() {
//   const productImages = document.querySelectorAll(".product-image img");
//   productImages.forEach(img => {
//     img.loading = "lazy";
//   });
// });

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


