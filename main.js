// JavaScript for Nikon F-601 Home Page

document.getElementById('home-link').addEventListener('click', function() {
  navigateTo('Home.html');
});

document.getElementById('about-link').addEventListener('click', function() {
  navigateTo('About.html');
});

document.getElementById('product-link').addEventListener('click', function() {
  navigateTo('product.html');
});

document.getElementById('contact-link').addEventListener('click', function() {
  navigateTo('contact.html');
});

function navigateTo(page) {
  window.location.href = page;
}
