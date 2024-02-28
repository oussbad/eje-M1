document.addEventListener('DOMContentLoaded', function () {
  showContent("foum");
});

function showContent(city) {
  const contentSection = document.getElementById("contentSection");
  const filename = city.toLowerCase().replace(/\s+/g, "") + "tours.html";

  // Fetch content from the dynamically named HTML file
  fetch(filename)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((htmlContent) => {
      contentSection.innerHTML = htmlContent;
    })
    .catch((error) => console.error("Error fetching content:", error));
}

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Loop through each navigation link
  navLinks.forEach(link => {
      // Add click event listener
      link.addEventListener('click', function (e) {
          e.preventDefault();

          // Get the target section ID from the href attribute
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          // Check if the target element exists
          if (targetElement) {
              // Scroll to the target section smoothly
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          } else {
              console.error("Target element not found:", targetId);
          }
      });
  });
});
