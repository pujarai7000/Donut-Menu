# 🍩 Donut Hut — Interactive Menu & Shopping Cart

**Donut Menu v2.0 | Frontend Web Development Project**

## 📖 Project Overview

Donut Hut is an interactive bakery menu website inspired by a real local donut shop in Irving, Texas.

The project originally began as a static website developed using HTML and CSS to display menu items, prices, store information, and product photographs.

It has since evolved into a multi-page frontend application featuring interactive product selection, customizable quantities, dynamic price calculations, category navigation, and a shopping cart.

The project focuses on practical frontend development, JavaScript programming, responsive web design, and creating user-friendly interfaces for real-world business scenarios.

---

## ✨ Features

### 🏠 Homepage

- Custom donut-themed logo and navigation bar
- Welcoming hero section
- Store hours and location information
- Store photographs
- Navigation to the interactive menu

### 🍩 Interactive Product Menu

- Three menu categories: Donuts, Kolaches, and Coffee
- Product cards with images, descriptions, and prices
- Single and dozen options for applicable products
- Quantity selection for each product
- Dynamic price updates based on selected options and quantities
- Additional customization options for selected products
- Add to Bag functionality

### 🛍️ Shopping Cart

- Dedicated shopping cart page
- View selected products and quantities
- Increase or decrease item quantities
- Remove individual products
- Automatic subtotal calculation
- Estimated sales tax calculation
- Optional tip selection
- Dynamic order total
- Cart persistence using browser localStorage

### 🧾 Demo Checkout

- Customer information form
- Simulated payment-at-pickup options
- Basic form validation
- Order summary display
- Simulated order confirmation

**Note:** Checkout is currently a frontend demonstration. No orders are transmitted to the business, and no actual payments are processed.

---

## 🛠️ Technologies Used

### Frontend

- **HTML5** — Website structure and semantic elements
- **CSS3** — Styling, layouts, and responsive design
- **JavaScript** — Interactive functionality and application logic
- **DOM Manipulation** — Dynamic interface updates
- **Browser localStorage** — Cart data persistence
- **JSON** — Data serialization and retrieval

### Development Tools

- Visual Studio Code
- Git and GitHub
- Figma — UI/UX design and prototyping

---

## 🏗️ Project Architecture

Donut Menu follows a client-side architecture, where JavaScript manages product selection, cart calculations, and user interactions.

```text
                Customer
                   |
                   v
              index.html
             Product Menu
                   |
                   v
               script.js
      Product Selection & Cart Logic
                   |
                   v
             localStorage
            Saved Cart Data
                   |
                   v
               cart.html
             Shopping Cart
                   |
                   v
                cart.js
      Quantity Management, Totals
          & Demo Checkout
```

The application currently operates without a backend server or central database.

---

## 📁 Project Structure

```text
Donut-Menu/
│
├── index.html          # Homepage and interactive menu
├── style.css           # Website styling and layouts
├── script.js           # Product selection and cart logic
├── cart.html           # Shopping cart and demo checkout
├── cart.js             # Cart calculations and interactions
├── README.md           # Project documentation
│
├── *.jpg / *.PNG       # Product and store photographs
│
└── .vscode/            # Editor configuration
```

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/pujarai7000/Donut-Menu.git
```

### 2. Navigate to the Project

```bash
cd Donut-Menu
```

### 3. Open the Website

Open `index.html` in a web browser.

Alternatively, open the project in Visual Studio Code and use a local development server such as Live Server.

No backend setup or package installation is currently required.

---

## ⚙️ How It Works

### 1. Product Selection

Customers can browse products under the Donuts, Kolaches, and Coffee categories.

Each product card provides selectable options, such as size, quantity, or filling where applicable.

JavaScript reads the selected values and updates the displayed product price dynamically.

### 2. Cart Management

When a user clicks **Add to Bag**:

1. JavaScript identifies the selected product.
2. The selected option, unit price, and quantity are retrieved.
3. The product is added to the cart.
4. If the same product configuration already exists, its quantity is increased.
5. The cart information is saved in browser localStorage.
6. The user can review and modify the cart on a separate page.

### 3. Price Calculation

The shopping cart calculates the subtotal by multiplying each product's unit price by its quantity and combining the results.

```javascript
const subtotal = cart.reduce(function(sum, item) {
    return sum + item.price * item.qty;
}, 0);
```

The order summary also includes estimated tax, optional tip, and the calculated total.

### 4. Cart Persistence

The application uses browser localStorage to preserve selected cart items.

Cart data is serialized using `JSON.stringify()` and retrieved using `JSON.parse()`.

This allows the shopping cart to retain its contents when users navigate between pages or refresh the website.

### 5. Demo Checkout

The checkout interface provides basic customer information fields, simulated payment-at-pickup options, and an order summary.

The form performs basic input validation before showing a simulated confirmation.

No real order submission or payment processing is implemented.

---

## 🧠 JavaScript Concepts Practiced

This project provides practical experience with:

- Variables and constants
- Arrays and objects
- Functions and parameters
- Event listeners
- Conditional statements
- DOM manipulation
- `querySelectorAll()` and `getElementById()`
- Array methods: `forEach()`, `find()`, `reduce()`
- Array manipulation using `push()` and `splice()`
- HTML data attributes
- JSON serialization
- Browser localStorage
- Dynamic rendering
- Form validation
- Cart state management
- Event-driven programming

---

## 🎨 UI/UX Design

The website follows a bakery-inspired visual design featuring:

- Red and pastel color combinations
- Custom donut-themed branding
- Product photography
- Consistent product card layouts
- Category-based menu navigation
- Rounded buttons and interactive controls
- Readable typography
- Responsive styling for different screen sizes

Figma was used for UI/UX design and prototyping, followed by implementation using HTML, CSS, and vanilla JavaScript.

---

## ⚠️ Current Limitations

- The application currently operates entirely on the frontend.
- Checkout is simulated and does not submit real orders.
- No actual payment processing is available.
- Cart data is stored locally in the browser.
- Product prices and availability are maintained manually.
- Additional improvements to mobile responsiveness, accessibility, and input validation may be required.
- The checkout interface requires clearer demo labeling before public use.

---

## 🔮 Future Improvements

Potential future enhancements include:

- Improved mobile responsiveness
- Enhanced accessibility and keyboard navigation
- Product search functionality
- Improved cart and checkout experience
- Integration with the shop's existing DoorDash ordering page
- Automated testing
- Backend integration for centralized product management
- Additional UI/UX refinements

A real pickup-ordering system could also be explored in the future with the business owner's approval.

---

## 🎯 Learning Objectives

Through this project, I aim to:

- Strengthen HTML, CSS, and JavaScript fundamentals
- Understand event-driven programming and DOM manipulation
- Practice developing interactive frontend applications
- Learn how data flows between webpages
- Understand shopping cart state management
- Work with browser storage and JSON
- Improve debugging and problem-solving skills
- Explore UI/UX design for a real-world business scenario
- Gain practical experience with Git and GitHub
- Improve code organization, maintainability, and testing practices

---

## 📌 Project Status

**Donut Menu v2.0 — Active Development**

The project has evolved from a static HTML/CSS menu into an interactive frontend application with product customization, dynamic pricing, shopping cart management, and a simulated checkout.

Core frontend features have been implemented. Current development focuses on testing, improving reliability, refining the user experience, and strengthening code maintainability.

---

## 📄 Disclaimer

This is an independent educational and portfolio project inspired by Donut Hut.

It is not an official online ordering platform and does not accept real customer orders or payments. Any future production use would require authorization from the business owner.
