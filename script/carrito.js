let carrito = [];
const contenedorCarrito = document.getElementById("contenedorCarrito");
const contenedorFooterCarrito = document.getElementById("footer");
const finalCompra = document.getElementById("botonComprar");

//Mantengo el carrito mientras el usuario este en el sitio
if(sessionStorage.getItem("carrito") != null){
    carrito=JSON.parse(sessionStorage.getItem("carrito"));
    dibujarCarrito();
}

class ElementoCarrito{
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Dibujo el carrito
function dibujarCarrito(){
    contenedorCarrito.innerHTML = "";

    carrito.forEach(
        (elemento) => {
            let renglonCarrito = document.createElement("tr")

            renglonCarrito.innerHTML= `
                <tr>
                    <td class="formDesaparece">${elemento.producto.identificador}</td>
                    <td class="formTexto">${elemento.producto.nombre}</td>
                    <td><input class="inputCantidad" id="cantidad-producto-${elemento.producto.identificador}" type="number" value="${elemento.cantidad}" min="1" max="500" step="1"</td>
                    <td class="formDesaparece">$${elemento.producto.precio}</td>
                    <td>$${elemento.producto.precio * elemento.cantidad}</td>
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

    let total = carrito.reduce((acumulador,elemento)=> acumulador + elemento.producto.precio * elemento.cantidad,0);

    carrito.length == 0? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total: $${total}</th>`;

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}



//Funcion para borrar elementos
function borrarProductoCarrito(elementoEliminado){
    const elementosNoBorrados = carrito.filter(
        (elemento) => elemento.producto.identificador != elementoEliminado.producto.identificador
    );

    carrito.length = 0;

    elementosNoBorrados.forEach((elemento) => carrito.push(elemento))
}

