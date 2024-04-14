const whiteDiv = document.querySelector('.white');

whiteDiv.addEventListener('contextmenu', function(event) {
  
  event.preventDefault(); 
  this.style.backgroundColor = 'red'; 
});
