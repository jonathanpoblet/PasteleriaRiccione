//Creador de productos
class Producto {
    constructor(nombre,categoria,precioCosto,foto,identificador){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precioCosto = parseFloat(precioCosto);
        this.foto = foto
        this.identificador = identificador
    }
}

//Creardor de los elementos que vayamos pusheando al carrito
class ElementoCarrito{
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const productos = [];
const carrito = [];
let productoEncontrado;

//productos ingresados al array
productos.push(new Producto("torta selva negra","tortas",3100,`../fotos/selva-negra.jpg`,1));
productos.push(new Producto("chocotorta","tortas",2700,`../fotos/chocotorta.jpg`,2));
productos.push(new Producto("box dulce padre","box dulce",2000,`../fotos/boxdulce-padre.jpg`,3));
productos.push(new Producto("box dulce madre","box dulce", 2000,`../fotos/boxdulce-madre.jpg`,4));
productos.push(new Producto("torta de zanahoria","tortas",2100,`../fotos/torta-zanahoria.jpg`,5));
productos.push(new Producto("box dulce frutilla","box dulce", 2000,`../fotos/boxdulce-frutilla.jpg`,6));
productos.push(new Producto("torta cumpleaños hombre","tortas",4100,`../fotos/torta-cumpleaños.jpg`,7));
productos.push(new Producto("torta cumpleaños mujer","tortas",4100,`../fotos/torta-cumpleaños-mujer.jpg`,8));
productos.push(new Producto("macarons 3 unidades","macarons",300,`../fotos/macaron-3.jpg`,9));
productos.push(new Producto("torta de limon","tortas",1850,`../fotos/bizcochuelo-limon.jpg`,10));
productos.push(new Producto("macarons 6 unidades","macarons",500,`../fotos/macarons-6.jpg`,11));
productos.push(new Producto("cupcakes chocolate x 6","cupcakes",850,`../fotos/cupcakes-6unidades.jpg`,12));
productos.push(new Producto("cupcakes vainilla x 6","cupcakes",850,`../fotos/cupcakes-6unidades-vainilla.jpg`,13));
productos.push(new Producto("cupcakes mix x 6","cupcakes",850,`../fotos/cupcakes-personalizados.jpg`,14));
productos.push(new Producto("box dulce variado","box dulce", 2000,`../fotos/boxdulce-variado.jpeg`,15));
productos.push(new Producto("torta frutilla con crema","tortas",2400,`../fotos/torta-frutilla.jpg`,16));
productos.push(new Producto("torta de chocolate","tortas",2400,`../fotos/torta-de-chocolate.jpg`,17));
productos.push(new Producto("box dulce cumpleaños","box dulce", 2000,`../fotos/boxdulcecumpleaños.jpg`,18));
productos.push(new Producto("macarons 24 unidades","macarons", 2050,`../fotos/macaron-24.jpg`,19));

console.log("En total, Pasteleria Riccione tiene " + productos.length + " productos:");

//productos al costo
console.log(productos);


//-------------------------------------------------------------------------------------------


//le sume el iva a los productos
const productosConImpuestos = productos.map(productos => {
    return {
        nombre: productos.nombre,
        categoria: productos.categoria,
        precioConImpuestos: parseFloat(productos.precioCosto * 1.21),
        foto: productos.foto,
        identificador: productos.identificador
    }
})
console.log(productosConImpuestos)


//-------------------------------------------------------------------------------------------


//Tomo la seccion donde estan los productos y al articulo donde estan los productos, para poder hacer la funcion de armar cartas recorriendo el array de productos.
const seccionProductos = document.getElementById("seccion-productos").getElementsByClassName("article-productos");
const articleProductos = seccionProductos[0];

//Funcion para crear las cartas
function crearCartas(producto){
    //Empezamos a crear la card, desde lo mas chico hasta lo mas grande, añidando todo
    //Botón
    let botonCarta = document.createElement("button");
    botonCarta.className = "btn btn-outline-success card-boton"
    botonCarta.innerText = "Agregar al carrito"

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body"
    cuerpoCarta.innerHTML = `
        <h3 class="card-text">${producto.nombre}</h3>
        <p class="card-text">$${producto.precioConImpuestos}</p>
    `;
    cuerpoCarta.append(botonCarta);

    //Imagen
    let imagenCarta = document.createElement("img");
    imagenCarta.src = producto.foto;
    imagenCarta.className = "card-img-top";
    imagenCarta.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card"
    carta.append(imagenCarta);
    carta.append(cuerpoCarta);

    //Contenedor de las cards
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "article-productos-container"
    contenedorCarta.append(carta);


    //Evento para boton
    botonCarta.onclick = () => {
        let elementoExistente=carrito.find((elemento) => elemento.producto.identificador == producto.identificador)
        if(elementoExistente){
            elementoExistente.cantidad+=1;
            alert(`INGRESASTE ${producto.nombre} AL CARRITO`)
        }else{
            let nuevoElementoCarrito = new ElementoCarrito(producto,1);
            carrito.push(nuevoElementoCarrito);
            alert(`INGRESASTE ${producto.nombre} AL CARRITO`)
        }
        dibujarCarrito();
    }



    return contenedorCarta;
}


function hacerCards(){
    productosConImpuestos.forEach(
        (producto) => {
            let contenedorCarta = crearCartas(producto);
            articleProductos.append(contenedorCarta)
        }
    );
}
hacerCards();


//----------------------------------------------------------------------
//Carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");
const contenedorFooterCarrito = document.getElementById("footer")

function dibujarCarrito(){
    contenedorCarrito.innerHTML = "";

    let suma = 0;

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

            suma+= elemento.producto.precioConImpuestos * elemento.cantidad

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

    if(carrito.length == 0){
        contenedorFooterCarrito.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `;
    }else{
        contenedorFooterCarrito.innerHTML = `
        <th scope="row" colspan="5">Total: $${suma}</th>
        `;
    }
}

function borrarProductoCarrito(elementoEliminado){
    const elementosNoBorrados = carrito.filter(
        (elemento) => elemento.producto.identificador != elementoEliminado.producto.identificador
    );

    carrito.length = 0;

    elementosNoBorrados.forEach((elemento) => carrito.push(elemento))
}

//----------------------------------------------------------------------------------
//BUSCADOR
const botonBuscar = document.getElementById("btn");
const inputBuscar = document.getElementById("buscar");

botonBuscar.onclick = function(){
    let buscar = inputBuscar.value
    productoEncontrado = productosConImpuestos.find((producto) => producto.nombre == buscar)
    console.log(buscar)
    console.log(productoEncontrado)
    if (productoEncontrado == undefined){
        alert("Producto no encontrado");
    }else{
        alert("Producto encontrado: " + productoEncontrado.nombre);
    }
}









//ESTE CODIGO LO TENGO GUARDADO POR SI ME SIRVE PARA REALIZAR ACCIONES MEDIANTE AVANZAMOS EN EL CURSO
/*
//La idea de un buscador por precios de menor a mayor
//produco < 1000
const barato1 = productosConImpuestos.filter(productoBarato => productoBarato.precioConImpuestos < 1000);
barato1.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
console.log(barato1);
//produco < 2000
const barato2 = productosConImpuestos.filter(productoBarato => productoBarato.precioConImpuestos < 2000);
barato2.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
console.log(barato2);
//produco < 3000
const barato3 = productosConImpuestos.filter(productoBarato => productoBarato.precioConImpuestos < 3000);
barato3.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
console.log(barato3);
//produco < 4000
const barato4 = productosConImpuestos.filter(productoBarato => productoBarato.precioConImpuestos < 4000);
barato4.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
console.log(barato4);
//produco < 5000 , es decir, todos
const barato5 = productosConImpuestos.filter(productoBarato => productoBarato.precioConImpuestos < 5000);
barato5.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
console.log(barato5);


//buscador de texto
//tortas
const productoCategoria1 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("TORTAS"));
console.log(productoCategoria1);
//macarons
const productoCategoria2 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("MACARONS"));
console.log(productoCategoria2);
//cupcakes
const productoCategoria3 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("CUPCAKES"));
console.log(productoCategoria3);
//box dulce
const productoCategoria4 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("BOX DULCE"));
console.log(productoCategoria4);


//Interaccion con el usuario para agregar al carrito
let carrito = [];
let seleccion = prompt("Hola, desea comprar algun producto?(SI/NO)").toUpperCase();

while(seleccion != "SI" && seleccion != "NO"){
    alert("Por favor, ingresa SI o NO");
    seleccion = prompt("Hola, desea comprar algun producto?(SI/NO)").toUpperCase();
}

if(seleccion == "SI"){
    alert("Estos son todos los productos disposibles:");
    let todosLosProductos = productosConImpuestos.map((producto) => producto.nombre + " $" + producto.precioConImpuestos)
    alert(todosLosProductos.join("\n"));
}
else if(seleccion == "NO"){
    alert("Si cambias de opinion, presiona F5");
}

while(seleccion != "NO"){
    let producto = prompt("Agrega un producto a tu carrito").toUpperCase();
    let precio = 0;

    if(producto == "TORTA SELVA NEGRA" || producto == "CHOCOTORTA" || producto == "TORTA FRUTILLA CON CREMA" || producto == "TORTA DE CHOCOLATE" || producto == "TORTA DE ZANAHORIA" || producto == "TORTA DE LIMON" || producto == "TORTA CUMPLEAÑOS HOMBRE" || producto == "TORTA CUMPLEAÑOS MUJER" || producto == "MACARONS 3 UNIDADES" || producto == "MACARONS 6 UNIDADES" || producto == "MACARON 24 UNIDADES" || producto == "CUPCAKES CHOCOLATE X 6" || producto == "CUPCAKES VAINILLA X 6" || producto == "CUPCAKES PERSONALIZADOS X 6" || producto == "BOX DULCE DIA DEL PADRE" || producto == "BOX DULCE DIA DE LA MADRE" || producto == "BOX DULCE VARIADO" || producto == "BOX DULCE FRUTILLA" || producto == "BOX DULCE CUMPLEAÑOS"){
        switch(producto){
            case "TORTA SELVA NEGRA":
                precio = 3751;
                break;
            case "CHOCOTORTA":
                precio = 3267;
                break;  
            case "TORTA FRUTILLA CON CREMA":
                precio = 3267;
                break;  
            case "TORTA DE CHOCOLATE":
                precio = 3267;
                break;  
            case "TORTA DE ZANAHORIA":
                precio = 3267;
                break;  
            case "TORTA DE LIMON":
                precio = 3267;
                break;  
            case "TORTA CUMPLEAÑOS HOMBRE":
                precio = 3267;
                break;  
            case "TORTA CUMPLEAÑOS MUJER":
                precio = 3267;
                break;  
            case "MACARONS 3 UNIDADES":
                precio = 3267;
                break;  
            case "MACARONS 6 UNIDADES":
                 precio = 3267;
                 break;  
            case "MACARONS 24 UNIDADES":
                precio = 3267;
                break; 
            case "CUPCAKES CHOCOLATE X 6":
                precio = 3267;
                break;  
            case "CUPCAKES VAINILLA X 6":
                precio = 3267;
                break;   
            case "CUPCAKES PERSONALIZAODS X 6":
                precio = 3267;
                break; 
            case "BOX DULCE DIA DEL PADRE":
                precio = 3267;
                break;  
            case "BOX DULCE DIA DE LA MADRE":
                precio = 3267;
                break;   
            case "BOX DULCE VARIADO":
                precio = 3267;
                break;  
            case "BOX DULCE FRUTILLA":
                precio = 3267;
                break; 
            case "BOX DULCE CUMPLEAÑOS":
                precio = 3267;
                break;      
            default:
                break;
        }
        
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
        carrito.push({producto,unidades,precio});
        console.log(carrito);
    }
    else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt("Desea seguir comprando?").toUpperCase();
    
    while(seleccion === "NO"){
        alert("Gracias por la compra! Tendras el carrito en tu consola.");
        const direccion = (calle,numero,codigoPostal) => "Dirección: " + calle + " " + numero + " CP: " + codigoPostal;
        console.log(direccion(prompt("Dime la calle que vivis para enviarte el pedido").toUpperCase(),prompt("Dime el numero de tu casa"),prompt("Dime tu codigo postal")));
        carrito.forEach((carritoFinal) => console.log("producto: " + carritoFinal.producto + " unidades: " + carritoFinal.unidades + " total de producto $ " + carritoFinal.precio * carritoFinal.unidades));
        break;
    }
}

const total = carrito.reduce((acumulador,elemento)=> acumulador + elemento.precio * elemento.unidades,0);
console.log("TOTAL: " + total);
*/
