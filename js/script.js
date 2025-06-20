
const menu = [
  { id: 1, name: "ชาเขียวมัจฉะ", price: 75, image: "assets/greentea.png" },
  { id: 2, name: "ชาไทย", price: 75, image: "assets/greentea.png" },
  { id: 3, name: "กาแฟ", price: 75, image: "assets/greentea.png" }
];

const menuList = document.getElementById("menuList");

menu.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price} บ.</p>
    <button onclick="goToDetail(${item.id})">เลือก</button>
  `;
  menuList.appendChild(card);
});

function goToDetail(id) {
  localStorage.setItem("selectedItem", JSON.stringify(menu.find(m => m.id === id)));
  window.location.href = "details.html";
}
