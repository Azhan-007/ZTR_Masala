// --- 1. PRODUCT DATA ---
const products = [
    { id: 1, name: "Turmeric Powder", category: "Powder", price: 150, image: "components/images/Turmeric.png" },
    { id: 2, name: "Kashmiri Chilli", category: "Powder", price: 280, image: "components/images/Kashmeri Chilli.png" },
    { id: 3, name: "Garam Masala", category: "Blend", price: 350, image: "components/images/Garam.png" },
    { id: 4, name: "Coriander Powder", category: "Powder", price: 120, image: "components/images/Coriander.png" },
    { id: 5, name: "Whole Black Pepper", category: "Whole", price: 450, image: "components/images/Black pepper.png" },
    { id: 6, name: "Cardamom (Elaichi)", category: "Whole", price: 800, image: "components/images/Cardardom.png" },
    { id: 7, name: "Biryani Masala", category: "Blend", price: 320, image: "components/images/Biryani.png" },
    { id: 8, name: "Cumin Seeds", category: "Whole", price: 210, image: "components/images/Cumin seeds.png" }
];

// --- 2. RENDER PRODUCTS ---
const productContainer = document.getElementById('product-container');

function displayProducts(filter = 'all') {
    productContainer.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product-card');
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="p-info">
                <span class="p-cat">${product.category}</span>
                <h3>${product.name}</h3>
                <span class="p-price">₹${product.price}</span>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(div);
    });
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayProducts(category);
}

// --- 3. CART SYSTEM ---
let cart = [];

function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCart();
    showToast(`${item.name} added to cart!`);
    toggleCart(true); // Open cart automatically
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.qty;
            count += item.qty;
            
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <small>₹${item.price} x ${item.qty}</small>
                    </div>
                    <div>
                        <strong style="margin-right:10px;">₹${item.price * item.qty}</strong>
                        <i class="fas fa-trash remove-item" onclick="removeItem(${index})"></i>
                    </div>
                </div>
            `;
        });
    }

    totalEl.innerText = '₹' + total;
    countEl.innerText = count;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.querySelector('.cart-overlay');
    
    if (forceOpen) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    } else {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function checkout() {
    if (cart.length === 0) return showToast("Your cart is empty!", false);
    alert("Proceeding to secure checkout...");
}

// --- 4. CONTACT FORM HANDLING ---
function handleContactSubmit(e) {
    e.preventDefault(); // Stop page refresh
    
    const name = document.getElementById('name').value;
    
    // Simulate sending data
    showToast(`Thanks ${name}, we received your message!`);
    
    // Clear form
    document.getElementById('contactForm').reset();
}

// --- 5. TOAST NOTIFICATIONS (The "Pro" feature) ---
function showToast(message, isSuccess = true) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${isSuccess ? 'success' : 'error'}`;
    toast.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    
    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize Page
displayProducts();

// --- 6. MOBILE MENU TOGGLE ---
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}