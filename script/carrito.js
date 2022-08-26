let carrito = [];
const contenedorCarrito = document.getElementById("contenedorCarrito");
const contenedorFooterCarrito = document.getElementById("footer");
const finalCompra = document.getElementById("botonComprar");

carrito = carrito=JSON.parse(sessionStorage.getItem("carrito")),dibujarCarrito() ?? [];

class ElementoCarrito{
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

function dibujarCarrito(){
    contenedorCarrito.innerHTML = "";

    carrito.forEach(
        (elemento) => {
            let renglonCarrito = document.createElement("tr")

            renglonCarrito.innerHTML= `
                <tr>
                    <td>${elemento.producto.identificador}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td><input id="cantidad-producto-${elemento.producto.identificador}" type="number" value="${elemento.cantidad}" min="1" max="500" step="1"</td>
                    <td>$${elemento.producto.precioConImpuestos}</td>
                    <td>$${elemento.producto.precioConImpuestos * elemento.cantidad}</td>
                    <td><button id="eliminar-producto-${elemento.producto.identificador}" type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                </tr>
            `;

            contenedorCarrito.append(renglonCarrito);

            let inputCantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.identificador}`)
        
            inputCantidadProductos.addEventListener("change", (e) => {
               let nuevaCantidad = e.target.value;
               elemento.cantidad = nuevaCantidad;
               dibujarCarrito();
            } );

            let botonBorrar = document.getElementById(`eliminar-producto-${elemento.producto.identificador}`)
                botonBorrar.addEventListener("click", () => {
                    borrarProductoCarrito(elemento);
                    dibujarCarrito();
                });
        }
    );

    const total = carrito.reduce((acumulador,elemento)=> acumulador + elemento.producto.precioConImpuestos * elemento.cantidad,0);

    carrito.length == 0? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total: $${total}</th>`;

    finalCompra.onclick = function(){
        carrito.length == 0? alert("Tienes que agregar productos al carrito para finalizar la compra") : alert("Compra finalizada, seras dirrigido al formulario de compra"),carrito = [],dibujarCarrito();
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}

function borrarProductoCarrito(elementoEliminado){
    const elementosNoBorrados = carrito.filter(
        (elemento) => elemento.producto.identificador != elementoEliminado.producto.identificador
    );

    carrito.length = 0;

    elementosNoBorrados.forEach((elemento) => carrito.push(elemento))
}

