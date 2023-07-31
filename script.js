// Get the hamburger menu and menu element
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class on the menu element
  menu.classList.toggle('active');
});
