
fetch("navfolder/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Reinitialize event listeners after navigation is loaded
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
  })
  .catch(error => console.error("Error loading nav:", error));





