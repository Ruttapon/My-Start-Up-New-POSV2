
const item = JSON.parse(localStorage.getItem("selectedItem"));
const card = document.getElementById("detailCard");

let quantity = 1;
let temp = "";
let sweet = "";

function updateDetail() {
  card.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.image}">
    <div>
      <button onclick="changeQty(-1)">−</button>
      <span>${quantity}</span>
      <button onclick="changeQty(1)">+</button>
    </div>
    <div>
      <p>อุณหภูมิ</p>
      <button onclick="setTemp('เย็น')">เย็น</button>
      <button onclick="setTemp('ร้อน')">ร้อน</button>
    </div>
    <div>
      <p>ความหวาน</p>
      <button onclick="setSweet('หวานมาก')">หวานมาก</button>
      <button onclick="setSweet('หวานปกติ')">หวานปกติ</button>
      <button onclick="setSweet('หวานน้อย')">หวานน้อย</button>
    </div>
    <p>฿${item.price * quantity}</p>
    <button onclick="addToCart()">ใส่ตะกร้า</button>
  `;
}

function changeQty(amount) {
  quantity = Math.max(1, quantity + amount);
  updateDetail();
}

function setTemp(val) {
  temp = val;
}

function setSweet(val) {
  sweet = val;
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...item, quantity, temp, sweet });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("เพิ่มลงตะกร้าแล้ว!");
  window.location.href = "mainmenu.html";
}

updateDetail();
