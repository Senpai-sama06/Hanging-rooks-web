const whiteDiv = document.querySelector('.white');

whiteDiv.addEventListener('contextmenu', function(event) {
  // This function will be executed on right-click
  event.preventDefault(); // Prevent default right-click behavior (like opening a context menu)
  this.style.backgroundColor = 'red'; // Change background color to red
});
