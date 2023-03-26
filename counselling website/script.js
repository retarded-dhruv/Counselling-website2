// Select all the links in the navigation menu
const links = document.querySelectorAll('li a');

// Loop through each link and add a click event listener
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Get the ID of the section that the link points to
    const sectionId = link.getAttribute('href');

    // Get the offset top of the section
    const sectionOffset = document.querySelector(sectionId).offsetTop;

    // Scroll to the section with a smooth transition
    window.scrollTo({
      top: sectionOffset,
      behavior: 'smooth'
    });
  });
});
