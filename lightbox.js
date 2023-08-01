document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll("#gallery img");
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.className = "lightbox-overlay";

  const lightboxImg = document.createElement("img");
  lightboxImg.className = "lightbox-img";
  lightboxOverlay.appendChild(lightboxImg);

  document.body.appendChild(lightboxOverlay);

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightboxOverlay.style.display = "flex";
      document.body.classList.add("lightbox-open");
    });
  });

  lightboxOverlay.addEventListener("click", function () {
    lightboxOverlay.style.display = "none";
    document.body.classList.remove("lightbox-open");
  });
});
