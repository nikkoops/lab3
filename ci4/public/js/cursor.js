// Get the cursor element
const cursor = document.querySelector(".cursor");

// Update its position on mousemove
window.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

function animateCircles() {
  
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles(); 

  