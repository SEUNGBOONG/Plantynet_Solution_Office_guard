const copyBtn = document.getElementById("copyBtn");
const copyFeedback = document.getElementById("copyFeedback");

if (copyBtn && copyFeedback) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("tmdduqflfl@plantynet.com");
      copyFeedback.textContent = "문의 메일 주소가 복사되었습니다.";
    } catch (error) {
      copyFeedback.textContent = "복사에 실패했습니다. tmdduqflfl@plantynet.com";
    }
  });
}

const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const sections = document.querySelectorAll("main .section[id]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const zoomImages = document.querySelectorAll(".gallery-card img");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const setActiveLink = () => {
  const midpoint = window.scrollY + window.innerHeight * 0.3;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const matched = midpoint >= top && midpoint < bottom;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.opacity = matched ? "1" : "0.7";
      link.style.fontWeight = matched ? "700" : "500";
    }
  });
};

const revealTargets = document.querySelectorAll(".section, .gallery-card, .card, .image-wrap");
revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealTargets.forEach((target) => observer.observe(target));

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

const openLightbox = (img) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  const caption = img.closest(".gallery-card")?.querySelector("figcaption")?.textContent ?? "";
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
};

zoomImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img));
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
