const products = [
  {
    name: "Lipstik Matte Pink Blossom",
    description: "Lipstik tahan lama dengan hasil matte dan warna pink lembut.",
    price: "Rp49.000",
    image: "https://via.placeholder.com/200x200?text=Lipstik"
  },
  {
    name: "Serum Honey Glow",
    description: "Serum dengan ekstrak madu alami untuk kulit bercahaya dan lembap.",
    price: "Rp89.000",
    image: "https://via.placeholder.com/200x200?text=Serum"
  },
  {
    name: "Cushion Natural Look",
    description: "Cushion ringan dengan SPF 30 untuk tampilan flawless alami.",
    price: "Rp120.000",
    image: "https://via.placeholder.com/200x200?text=Cushion"
  },
  {
    name: "Eyeshadow Palette Sunset",
    description: "Warna-warna hangat dan pigmented untuk riasan mata yang memukau.",
    price: "Rp75.000",
    image: "https://via.placeholder.com/200x200?text=Eyeshadow"
  },
  {
    name: "Blush On Peachy Glow",
    description: "Blush dengan warna peach cerah untuk pipi merona alami.",
    price: "Rp45.000",
    image: "https://via.placeholder.com/200x200?text=Blush+On"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <strong>${product.price}</strong>
    <button>Beli</button>
  `;

  container.appendChild(div);
});