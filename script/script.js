/*
//BUSCADOR
botonBuscar.onclick = function(){
    let buscar = inputBuscar.value
    const productoEncontrado = productosConImpuestos.find((producto) => producto.nombre == buscar)
    console.log(buscar)
    console.log(productoEncontrado)
    if (productoEncontrado == undefined){
        alert("Producto no encontrado");
    }else{
        alert("Producto encontrado: " + productoEncontrado.nombre);
    }
}


Ya tengo al rango de precio tomado
let rangoPrecio = document.getElementById("customRange3")
rangoPrecio.onchange = () => {
    alert("hola")
}

//No esta puesto en uso
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

//Buscador por categorias
const productoCategoria1 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("TORTAS"));
const productoCategoria2 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("MACARONS"));
const productoCategoria3 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("CUPCAKES"));
const productoCategoria4 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("BOX DULCE"));
*/