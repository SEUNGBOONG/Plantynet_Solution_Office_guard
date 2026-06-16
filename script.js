const { products, companyInfo } = window.AppData;

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const productCards = document.getElementById("productCards");
const productTabs = document.getElementById("productTabs");
const productPanels = document.getElementById("productPanels");
const companyDesc = document.getElementById("companyDesc");
const contactInfo = document.getElementById("contactInfo");
const copyBtn = document.getElementById("copyBtn");
const copyFeedback = document.getElementById("copyFeedback");

function renderProductCards() {
  productCards.innerHTML = products
    .map(
      (product, index) => `
        <a class="product-card" href="#${product.id}" style="--accent:${product.accent}">
          <span class="product-index">0${index + 1}</span>
          <span class="product-label">${product.label}</span>
          <h3>${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <p>${product.short}</p>
          <div class="mini-stats">
            ${product.highlights
              .map((item) => `<span><strong>${item.value}</strong>${item.label}</span>`)
              .join("")}
          </div>
        </a>`
    )
    .join("");
}

function renderProductTabs() {
  productTabs.innerHTML = products
    .map(
      (product, index) => `
        <button class="${index === 0 ? "active" : ""}" type="button" data-target="${product.id}">
          ${product.name}
        </button>`
    )
    .join("");

  productPanels.innerHTML = products
    .map(
      (product, index) => `
        <article id="${product.id}" class="product-panel ${index === 0 ? "active" : ""}" style="--accent:${product.accent}">
          <div class="panel-copy">
            <span class="product-label">${product.label}</span>
            <h3>${product.name}</h3>
            <p class="product-tagline">${product.tagline}</p>
            <p>${product.summary}</p>
            <ul>
              ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <p class="target"><strong>적용 범위</strong> ${product.targets}</p>
          </div>
          <div class="panel-abstract" aria-hidden="true">
            <span>${product.name}</span>
            <strong>${product.tagline}</strong>
          </div>
        </article>`
    )
    .join("");

  productTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      productTabs.querySelectorAll("button").forEach((tab) => tab.classList.remove("active"));
      productPanels.querySelectorAll(".product-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
      button.classList.add("active");
    });
  });
}

function renderCompany() {
  companyDesc.textContent = companyInfo.description;
  contactInfo.innerHTML = `
    <p><strong>${companyInfo.name}</strong> · ${companyInfo.tagline}</p>
    <p>담당: ${companyInfo.contact.name}</p>
    <p>메일: <a href="mailto:${companyInfo.contact.email}">${companyInfo.contact.email}</a></p>
    <p>연락처: ${companyInfo.contact.phone}</p>
    <p>${companyInfo.address}</p>`;
}

function initNavigation() {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initCopy() {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(companyInfo.contact.email);
      copyFeedback.textContent = "문의 메일 주소가 복사되었습니다.";
    } catch {
      copyFeedback.textContent = companyInfo.contact.email;
    }
  });
}

function initReveal() {
  document.querySelectorAll(".product-card, .product-panel, .company-profile").forEach((item) => {
    item.classList.add("reveal");
  });

  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

renderProductCards();
renderProductTabs();
renderCompany();
initNavigation();
initCopy();
initReveal();
