const modeToggle = document.getElementById("modeToggle");
const photoInput = document.getElementById("photoInput");
const profilePreview = document.getElementById("profilePreview");

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("alt-theme");
  });
}

if (photoInput && profilePreview) {
  photoInput.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    profilePreview.src = previewUrl;
    profilePreview.alt = `Selected image preview: ${file.name}`;
  });
}

const animatedCards = document.querySelectorAll(".project-card, .feature-strip article");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";
    }
  });
}, { threshold: 0.18 });

animatedCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(24px)";
  card.style.transition = `opacity 500ms ease ${index * 90}ms, transform 500ms ease ${index * 90}ms`;
  observer.observe(card);
});
