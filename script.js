document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 }
        // Add more products as needed
    ];

    const main = document.querySelector("main");

    // Function to render product listings
    function renderProducts() {
        main.innerHTML = "";
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product");
            productItem.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            main.appendChild(productItem);
        });
    }

    // Initial rendering of products
    renderProducts();

    // Function to add a product to the cart (dummy function)
    function addToCart(productId) {
        // Here you can implement functionality to add the selected product to the cart
        alert(`Product ${productId} added to cart`);
    }
});
