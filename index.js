// Definir precio inicial
const precioBase = 4000000;

// Referencia a los elementos del DOM
const cantidadElemento = document.querySelector(".cantidad");
const precioInicialElemento = document.querySelector(".precio-inicial");
const valorTotalElemento = document.querySelector(".valor-total");

// Establecer el precio inicial y el valor total
precioInicialElemento.textContent = precioBase;
valorTotalElemento.textContent = 0;

// Funciones
function incrementarCantidad() {
    let cantidad = parseInt(cantidadElemento.textContent);
    cantidad++;
    cantidadElemento.textContent = cantidad;
    actualizarTotal();
}

function decrementarCantidad() {
    let cantidad = parseInt(cantidadElemento.textContent);
    if (cantidad > 0) {
        cantidad--;
        cantidadElemento.textContent = cantidad;
        actualizarTotal();
    }
}

function actualizarTotal() {
    const cantidad = parseInt(cantidadElemento.textContent);
    const total = cantidad * precioBase;
    valorTotalElemento.textContent = total;
}
