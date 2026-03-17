
// fetch("navfolder/nav.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("nav-placeholder").innerHTML = data;

//     // Reinitialize event listeners after navigation is loaded
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');
//     const dropdowns = document.querySelectorAll('.dropdown');

//     // Toggle hamburger menu
//     hamburger.addEventListener('click', function() {
//       this.classList.toggle('active');
//       navMenu.classList.toggle('active');
//     });

//     // Toggle dropdown menus on mobile
//     dropdowns.forEach(dropdown => {
//       const link = dropdown.querySelector('a');
//       link.addEventListener('click', function(e) {
//         if (window.innerWidth <= 1023) {
//           e.preventDefault();
//           dropdown.classList.toggle('active');
//         }
//       });
//     });

//     // Set active link based on current page URL
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//     const navLinks = document.querySelectorAll('.nav-menu a');

//     navLinks.forEach(link => {
//       const linkHref = link.getAttribute('href');
//       if (currentPage === linkHref) {
//         link.classList.add('active');
//       }
//     });
//   })
//   .catch(error => console.error("Error loading nav:", error));






fetch("navfolder/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// 1. Toggle the Main Mobile Menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
    
    // Close all internal dropdowns if the main menu is being closed
    if (!navLinks.classList.contains('active')) {
        closeAllDropdowns();
    }
});

// 2. Logic for Dropdown Toggling
const dropdowns = document.querySelectorAll('.dropdown-link, .drop-right > a');

dropdowns.forEach(link => {
    link.addEventListener('click', (e) => {
        // We only need click-to-close logic on mobile/tablets
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            const currentMenu = link.nextElementSibling;
            const parentLi = link.parentElement;

            // Check if this specific menu is already open
            const isOpen = currentMenu.style.display === 'block';

            // Close siblings at the SAME level
            const siblingMenus = parentLi.parentElement.querySelectorAll(':scope > li > ul');
            siblingMenus.forEach(m => m.style.display = 'none');

            // Toggle the clicked menu
            currentMenu.style.display = isOpen ? 'none' : 'block';
        }
    });
});

// Helper function to shut everything
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu, .sub-dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });
}

// 3. Auto-close everything when a final link is clicked
document.querySelectorAll('.final-item').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menu.classList.remove('is-active');
        closeAllDropdowns();
    });
}); })