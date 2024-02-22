const image = document.querySelector(".inner-area img");

image.addEventListener("mouseover", () => {
  image.style.transform = "scale(1.1) rotate(5deg)";
});

image.addEventListener("mouseout", () => {
  image.style.transform = "";
});