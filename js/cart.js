
const items = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
let total = 0;

function renderCart() {
  cartItems.innerHTML = "";
  total = 0;
  items.forEach((item, i) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${i + 1}. ${item.name} - ${item.temp || ''}, ${item.sweet || ''}</p>
      <div>
        <button onclick="changeQty(${i}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty(${i}, 1)">+</button>
        <button onclick="removeItem(${i})">ลบ</button>
      </div>
    `;
    cartItems.appendChild(div);
  });
  document.getElementById("totalPrice").textContent = total;
}

function changeQty(index, amount) {
  items[index].quantity = Math.max(1, items[index].quantity + amount);
  localStorage.setItem("cart", JSON.stringify(items));
  renderCart();
}

function removeItem(index) {
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  renderCart();
}

function orderNow() {
  alert("สั่งซื้อแล้ว จำนวนเงิน: " + total + " บาท");
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();