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
