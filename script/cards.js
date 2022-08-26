const seccionProductos = document.getElementById("seccion-productos").getElementsByClassName("article-productos");
const articleProductos = seccionProductos[0];
const botonCategoria1 = document.getElementById("botonCategoria1");
const botonCategoria2 = document.getElementById("botonCategoria2");
const botonCategoria3 = document.getElementById("botonCategoria3");
const botonCategoria4 = document.getElementById("botonCategoria4");
const botonCategoria5 = document.getElementById("botonCategoria5");
const botonPrecioMin = document.getElementById("precioMinimo");
const botonPrecioMax = document.getElementById("precioMaximo");

function crearCartas(producto){
    let botonCarta = document.createElement("button");
    botonCarta.className = "btn btn-outline-success card-boton"
    botonCarta.innerText = "Agregar al carrito"

    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body"
    cuerpoCarta.innerHTML = `
        <h3 class="card-text">${producto.nombre}</h3>
        <p class="card-text">$${producto.precioConImpuestos}</p>
    `;
    cuerpoCarta.append(botonCarta);

    let imagenCarta = document.createElement("img");
    imagenCarta.src = producto.foto;
    imagenCarta.className = "card-img-top";
    imagenCarta.alt = producto.nombre;

    let carta = document.createElement("div");
    carta.className = "card"
    carta.append(imagenCarta);
    carta.append(cuerpoCarta);

    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "article-productos-container"
    contenedorCarta.append(carta);

    botonCarta.onclick = () => {
        let elementoExistente=carrito.find((elemento) => elemento.producto.identificador == producto.identificador)
        if(elementoExistente){
            elementoExistente.cantidad++;
        }else{
            let nuevoElementoCarrito = new ElementoCarrito(producto,1);
            carrito.push(nuevoElementoCarrito);
        }
         
        dibujarCarrito();

        swal({
            title: `${producto.nombre}`,
            text: `Agregado al carrito de compra.`,
            icon: "success",
            buttons: {
                cerrar: {
                    text: "Cerrar",
                    value: false
                },
                carrito: {
                    text: "Ir a carrito",
                    value: true
                }
            }
        }).then((irACarrito) => {

            if(irACarrito) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);
            }
        });
    }
    return contenedorCarta;
}

function hacerCards(productos){
    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCartas(producto);
            articleProductos.append(contenedorCarta)
        }
    );
}
hacerCards(productosConImpuestos);

