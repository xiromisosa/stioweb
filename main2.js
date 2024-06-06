document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDescription = document.getElementById("lightbox-description");
    const close = document.querySelector(".close");

    imgs.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            lightboxTitle.textContent = img.getAttribute("data-title");
            lightboxDescription.textContent = img.getAttribute("data-description");
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
