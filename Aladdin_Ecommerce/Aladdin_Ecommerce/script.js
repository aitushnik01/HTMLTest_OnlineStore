document.addEventListener("DOMContentLoaded", function() {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


    function updateCart() {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }


    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productContainer = event.target.closest(".pro");
            const productId = productContainer.getAttribute("data-id");
            const productName = productContainer.getAttribute("data-name");
            const productBrand = productContainer.getAttribute("data-brand");
            const productPrice = parseFloat(productContainer.getAttribute("data-price"));
            const quantity = 1;


            const existingItem = cartItems.find(item => item.id === productId);
            if (existingItem) {

                existingItem.quantity += quantity;
            } else {

                cartItems.push({
                    id: productId,
                    name: productName,
                    brand: productBrand,
                    price: productPrice,
                    quantity: quantity
                });
            }


            updateCart();


            alert("Product added to cart!");




            updateCartDisplay();
        });
    });


    function updateCartDisplay() {
        const cartCountElement = document.querySelector(".cart-count");
        const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = cartCount;
    }


function renderCartItems() {
    const cartTableBody = document.querySelector("#cart tbody");
    const subtotalAmount = document.getElementById("subtotal-amount");
    const totalAmount = document.getElementById("total-amount");
    cartTableBody.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;


        const removeCell = document.createElement("td");
        const removeButton = document.createElement("a");
        removeButton.href = "#";
        removeButton.innerHTML = '<i class="far fa-times-circle"></i>';
        removeButton.addEventListener("click", function() {

            cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
            updateCart();
            renderCartItems();
        });
        removeCell.appendChild(removeButton);

        const productNameCell = document.createElement("td");
        productNameCell.textContent = `${item.name} (${item.brand})`;

        const productPriceCell = document.createElement("td");
        productPriceCell.textContent = `${item.price.toFixed(2)}`;

        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;

        const subtotalCell = document.createElement("td");
        subtotalCell.textContent = `${subtotal.toFixed(2)} ₸`;


        const row = document.createElement("tr");
        row.appendChild(removeCell);

        row.appendChild(productNameCell);
        row.appendChild(productPriceCell);
        row.appendChild(quantityCell);
        row.appendChild(subtotalCell);


        cartTableBody.appendChild(row);
    });


    subtotalAmount.textContent = total.toFixed(2);
    totalAmount.textContent = `${total.toFixed(2)} ₸`;
}


    renderCartItems();

    updateCartDisplay();


});


  




