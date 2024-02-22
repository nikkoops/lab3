const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.opacity = "0.8";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "";
    icon.style.opacity = "";
  });
});
