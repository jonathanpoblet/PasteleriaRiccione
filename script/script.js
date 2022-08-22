botonCategoria1.onclick = function(){
    articleProductos.innerHTML=""
    hacerCards(productosConImpuestos);
}
botonCategoria2.onclick = function(){
    const productosCategoria2 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("TORTAS"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria2);
}
botonCategoria3.onclick = function(){
    const productosCategoria3 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("MACARONS"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria3);
}
botonCategoria4.onclick = function(){
    const productosCategoria4 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("CUPCAKES"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria4);
}
botonCategoria5.onclick = function(){
    const productosCategoria5 = productosConImpuestos.filter(productoCat => productoCat.categoria.includes("BOX DULCE"));
    articleProductos.innerHTML=""
    hacerCards(productosCategoria5);
}

botonPrecioMin.onclick = function(){
    let min = productosConImpuestos.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
    articleProductos.innerHTML=""
    alert("Se mostraran todos los productos desde el menor precio hasta el mayor precio");
    hacerCards(min);
}

botonPrecioMax.onclick = function(){
    let max = productosConImpuestos.sort((b,a) => a.precioConImpuestos - b.precioConImpuestos);
    articleProductos.innerHTML=""
    alert("Se mostraran todos los productos desde el mayor precio hasta el menor precio");
    hacerCards(max);
}