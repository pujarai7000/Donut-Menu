// Items added to the cart: { name, price, qty }
// The cart is saved in the browser so the cart page can show it too.
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem("donutCart")) || [];
} catch (e) {
    cart = [];
}

const cartCountDisplay = document.getElementById("cart-count");
const cartTotalDisplay = document.getElementById("cart-total");

function getQty(input) {
    const qty = parseInt(input.value, 10);
    return qty > 0 ? qty : 1;
}

// Wire up a product card that has an option dropdown + quantity box.
// ids used: <prefix>-option, <prefix>-qty, <prefix>-price, <prefix>-add
function setupProduct(prefix) {
    const option = document.getElementById(prefix + "-option");
    const qty = document.getElementById(prefix + "-qty");
    const price = document.getElementById(prefix + "-price");
    const add = document.getElementById(prefix + "-add");
    // Optional filling dropdown (e.g. eclairs): adds the choice to the cart name
    const filling = document.getElementById(prefix + "-filling");

    function updatePrice() {
        const unit = parseFloat(option.selectedOptions[0].dataset.price);
        price.textContent = "$" + (unit * getQty(qty)).toFixed(2);
    }

    option.addEventListener("change", updatePrice);
    qty.addEventListener("input", updatePrice);

    add.addEventListener("click", function () {
        const chosen = option.selectedOptions[0];
        let label = chosen.dataset.label;
        if (filling) {
            label += " - " + filling.selectedOptions[0].textContent;
        }
        addToCart(label, parseFloat(chosen.dataset.price), getQty(qty));
        // Go straight to the cart page after adding
        window.location.href = "cart.html";
    });

    updatePrice();
}

setupProduct("glazed");
setupProduct("choco");
setupProduct("mix");
setupProduct("sugar");
setupProduct("cinnamon");
setupProduct("eclair");
setupProduct("kolache");
setupProduct("jalapeno");
setupProduct("croissant");
setupProduct("jalcroissant");
setupProduct("danish");
setupProduct("spinach");
setupProduct("churro");
setupProduct("smallcoffee");
setupProduct("largecoffee");
setupProduct("coffeebox");

function addToCart(name, price, qty) {
    const existing = cart.find(function (item) { return item.name === name; });
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ name: name, price: price, qty: qty });
    }
    updateCartDisplay();
}

function calculateTotal() {
    return cart.reduce(function (total, item) {
        return total + item.price * item.qty;
    }, 0);
}

function updateCartDisplay() {
    localStorage.setItem("donutCart", JSON.stringify(cart));
    cartTotalDisplay.textContent = calculateTotal().toFixed(2);
    cartCountDisplay.textContent = cart.reduce(function (n, item) {
        return n + item.qty;
    }, 0);
}

// Menu tabs: show only the grid for the selected tab
document.querySelectorAll(".menu-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".menu-tab").forEach(function (t) {
            t.classList.toggle("active", t === tab);
        });
        document.querySelectorAll(".menu-container .product-grid").forEach(function (grid) {
            grid.hidden = !grid.classList.contains(tab.dataset.target);
        });
    });
});

// The first page is just the intro; the menu appears only when the user asks for it
const menuSection = document.getElementById("menu-section");

document.querySelectorAll("[data-show-menu]").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        menuSection.hidden = false;
        menuSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll("[data-show-home]").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        menuSection.hidden = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Show the saved cart in the top bar, and open the cart page from the Cart button
updateCartDisplay();

document.querySelector(".cart-button").addEventListener("click", function () {
    window.location.href = "cart.html";
});

// Coming back from the cart page: open the menu straight away
if (new URLSearchParams(window.location.search).has("menu")) {
    menuSection.hidden = false;
    menuSection.scrollIntoView();
}
