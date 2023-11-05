// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos elementos HTML
    const buyButtons = document.querySelectorAll(".buy-button");
    const cartCount = document.getElementById("cart-count");

    let itemCount = 0;
    let totalCost = 0;

    // Agregamos un controlador de clic para cada botón "Comprar"
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-product");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            // Actualizamos el carrito de compras
            itemCount++;
            totalCost += productPrice;

            // Actualizamos la cantidad en el carrito
            cartCount.textContent = itemCount;

            // Puedes agregar más lógica aquí, como mostrar los productos en el carrito
        });
    });
});
