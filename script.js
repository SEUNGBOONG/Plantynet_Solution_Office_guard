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
