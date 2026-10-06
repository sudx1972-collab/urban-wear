/* ===== PRODUCT DATA ===== */
const PRODUCTS = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 1200,
    color: "White",
    sizes: ["M", "L", "XL"],
    image: "images/tshirt.jpg"
  },
  {
    id: 2,
    name: "Casual Hoodie",
    price: 2500,
    color: "White",
    sizes: ["M", "L", "XL"],
    image: "images/hoodie.jpg"
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 3200,
    color: "Black",
    sizes: ["M", "L", "XL"],
    image: "images/jacket.jpg"
  }
];

/* ===== CONFIG ===== */
const TELEGRAM_USERNAME = "UrbanWearET"; // @ ሳይጨምር

/* ===== RENDER PRODUCTS ===== */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="price">${p.price.toLocaleString()} ETB</div>
        <div class="meta">
          <span class="chip">${p.color}</span>
          ${p.sizes.map(s => `<span class="chip">${s}</span>`).join("")}
        </div>
        <button class="order-btn" data-id="${p.id}">Order on Telegram</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => orderOnTelegram(Number(btn.dataset.id)));
  });
}

/* ===== TELEGRAM ORDER ===== */
function orderOnTelegram(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const message =
    `ሰላም Urban Wear! 👋\n\n` +
    `ይህን ምርት ማዘዝ እፈልጋለሁ:\n` +
    `🛍️ ${p.name}\n` +
    `💰 ${p.price.toLocaleString()} ETB\n` +
    `🎨 ቀለም: ${p.color}\n` +
    `📏 Size: ${p.sizes.join(", ")}\n\n` +
    `እባክዎ ዝርዝሩን ያረጋግጡ።`;

  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));

nav?.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

/* ===== INIT ===== */
renderProducts();