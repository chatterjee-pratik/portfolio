/* Disable right click and copy and keypress*/
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("copy", function(event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function(event) {
    event.preventDefault();
  });
