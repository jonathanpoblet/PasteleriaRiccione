const mainProductos = document.getElementById("mainProductos");
const asideProductos = document.getElementById("asideProductos");
const seccionProductos = document.getElementById("seccion-productos").getElementsByClassName("article-productos");
const articleProductos = seccionProductos[0];
let productos = [];


async function obtenerProductos(){
    const URLGET = "productos.json";
    const respuesta = await fetch(URLGET);
    const data = await respuesta.json();
    productos = data;
    console.log(productos)
    hacerCards(productos);
}
obtenerProductos();

function crearCartas(producto){
    let botonCarta = document.createElement("button");
    botonCarta.className = "btn btn-outline-success card-boton"
    botonCarta.innerText = "Agregar"

    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body"
    cuerpoCarta.innerHTML = `
        <h3 class="card-text">${producto.nombre}</h3>
        <p class="card-text">$${producto.precio}</p>
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

        Swal.fire({
            title: `Producto agregado al carrito!`,
            html: `${producto.nombre}`,
            showDenyButton: true,
            confirmButtonText: 'Ir al carrito',
            confirmButtonColor: "#198754",
            denyButtonText: `Salir`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);
            }
        })
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



localStorage.setItem("productos", JSON.stringify(productos));



