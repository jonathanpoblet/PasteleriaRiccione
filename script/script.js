//Apartado para poder crear cards dependiendo lo que desee el usuario y validar el carrito para pasar al form

const botonCategoria1 = document.getElementById("botonCategoria1");
const botonCategoria2 = document.getElementById("botonCategoria2");
const botonCategoria3 = document.getElementById("botonCategoria3");
const botonCategoria4 = document.getElementById("botonCategoria4");
const botonCategoria5 = document.getElementById("botonCategoria5");
const botonPrecioNormal = document.getElementById("precioNormal");
const botonPrecioMin = document.getElementById("precioMinimo");
const botonPrecioMax = document.getElementById("precioMaximo");

botonCategoria1.onclick = function(){
    articleProductos.innerHTML=""
    hacerCards(productos);
}
botonCategoria2.onclick = function(){
    const productosCategoria2 = productos.filter(productoCat => productoCat.categoria.includes("TORTAS"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria2);
}
botonCategoria3.onclick = function(){
    const productosCategoria3 = productos.filter(productoCat => productoCat.categoria.includes("MACARONS"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria3);
}
botonCategoria4.onclick = function(){
    const productosCategoria4 = productos.filter(productoCat => productoCat.categoria.includes("CUPCAKES"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria4);
}
botonCategoria5.onclick = function(){
    const productosCategoria5 = productos.filter(productoCat => productoCat.categoria.includes("BOX DULCE"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria5);
}


botonPrecioMin.onclick = function(){
    let min = productos.sort((a,b) => a.precio - b.precio);
    articleProductos.innerHTML=""
    botonPrecioMin.style.backgroundColor = "#ff59f1"
    botonPrecioMax.style.backgroundColor = "white"
    hacerCards(min);
}
botonPrecioMax.onclick = function(){
    let max = productos.sort((b,a) => a.precio - b.precio);
    articleProductos.innerHTML=""
    botonPrecioMax.style.backgroundColor = "#ff59f1"
    botonPrecioMin.style.backgroundColor = "white"
    hacerCards(max);
}


finalCompra.onclick = function(){
    carrito.length == 0? 
    Swal.fire({icon: 'error',title: 'Tienes el carrito vacio!'}):
    Swal.fire({
    title: 'Excelente compra!',
    html: 'Seras dirigido al formulario de compra',
    timer: 3500,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
            crearForm();
    }
    })
}

