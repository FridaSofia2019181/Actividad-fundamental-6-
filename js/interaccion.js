// ====== Inicializar tooltips ======
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// ====== Botón subir arriba ======
const btnSubir = document.getElementById("btnSubir");
if (btnSubir) {
  window.addEventListener("scroll", () => {
    btnSubir.style.display = window.scrollY > 200 ? "block" : "none";
  });
  btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ====== Alertas automáticas ======
document.querySelectorAll(".alert-auto").forEach((alerta) => {
  setTimeout(() => {
    alerta.classList.remove("show");
  }, 4000);
});
// ====== Galería modal (clic en miniatura para abrir modal con imagen grande) ======
document.addEventListener("DOMContentLoaded", function () {
  const galleryImgs = document.querySelectorAll(".gallery-img");
  const galleryModalEl = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  const galleryCaption = document.getElementById("galleryCaption");
  let galleryModal;

  // Inicializar modal cuando DOM esté listo
  if (galleryModalEl) {
    galleryModal = new bootstrap.Modal(galleryModalEl);
  }

  galleryImgs.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const alt = img.getAttribute("alt") || "";
      const caption = img.getAttribute("data-caption") || alt;
      galleryImage.src = src;
      galleryImage.alt = alt;
      galleryCaption.textContent = caption;
      if (galleryModal) galleryModal.show();
    });
  });
});
