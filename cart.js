// Cart page: shows what was added on the menu page, totals, and checkout options.
const TAX_RATE = 0.0825; // sales tax; change this number if your rate is different

let cart = [];
try {
    cart = JSON.parse(localStorage.getItem("donutCart")) || [];
} catch (e) {
    cart = [];
}

const itemsEl = document.getElementById("cart-items");
const emptyEl = document.getElementById("cart-empty");
const itemsBox = document.getElementById("cart-items-box");
const checkoutBox = document.getElementById("checkout-box");
const tipSelect = document.getElementById("tip-select");

function money(n) {
    return "$" + n.toFixed(2);
}

function saveCart() {
    localStorage.setItem("donutCart", JSON.stringify(cart));
}

function getTotals() {
    const subtotal = cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
    const tax = subtotal * TAX_RATE;
    const tip = subtotal * parseFloat(tipSelect.value);
    return { subtotal: subtotal, tax: tax, tip: tip, total: subtotal + tax + tip };
}

function makeQtyButton(label, ariaLabel, onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-label", ariaLabel);
    b.addEventListener("click", onClick);
    return b;
}

function changeQty(item, delta) {
    item.qty += delta;
    if (item.qty < 1) {
        cart.splice(cart.indexOf(item), 1);
    }
    saveCart();
    render();
}

function render() {
    itemsEl.innerHTML = "";

    cart.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "cart-item";

        const name = document.createElement("div");
        name.className = "cart-item-name";
        name.textContent = item.name;
        const unit = document.createElement("div");
        unit.className = "cart-item-unit";
        unit.textContent = money(item.price) + " each";
        name.appendChild(unit);

        const qty = document.createElement("div");
        qty.className = "cart-qty";
        const num = document.createElement("span");
        num.textContent = item.qty;
        qty.append(
            makeQtyButton("−", "Decrease quantity", function () { changeQty(item, -1); }),
            num,
            makeQtyButton("+", "Increase quantity", function () { changeQty(item, 1); })
        );

        const lineTotal = document.createElement("div");
        lineTotal.className = "cart-line-total";
        lineTotal.textContent = money(item.price * item.qty);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "cart-remove";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
            cart.splice(cart.indexOf(item), 1);
            saveCart();
            render();
        });

        row.append(name, qty, lineTotal, remove);
        itemsEl.appendChild(row);
    });

    const empty = cart.length === 0;
    emptyEl.hidden = !empty;
    checkoutBox.hidden = empty;

    const t = getTotals();
    document.getElementById("tax-percent").textContent = (TAX_RATE * 100).toFixed(2);
    document.getElementById("sum-subtotal").textContent = money(t.subtotal);
    document.getElementById("sum-tax").textContent = money(t.tax);
    document.getElementById("sum-tip").textContent = money(t.tip);
    document.getElementById("sum-total").textContent = money(t.total);
}

tipSelect.addEventListener("change", render);

document.getElementById("checkout-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const error = document.getElementById("form-error");

    if (!name || phone.replace(/\D/g, "").length < 7) {
        error.textContent = "Please enter your name and a valid phone number.";
        error.hidden = false;
        return;
    }
    error.hidden = true;

    const t = getTotals();
    const pay = document.querySelector('input[name="pay"]:checked').value;
    const details = document.getElementById("order-done-details");
    details.innerHTML = "";

    const lines = cart.map(function (item) {
        return item.qty + " × " + item.name + " — " + money(item.price * item.qty);
    });
    lines.push("Total: " + money(t.total));
    lines.push(pay);
    lines.push("Name: " + name + " · Phone: " + phone);

    lines.forEach(function (text) {
        const p = document.createElement("p");
        p.textContent = text;
        details.appendChild(p);
    });

    // Clear the cart now that the order is placed
    cart = [];
    saveCart();
    itemsBox.hidden = true;
    checkoutBox.hidden = true;
    document.getElementById("order-done").hidden = false;
});

render();
