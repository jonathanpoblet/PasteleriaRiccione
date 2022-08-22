const productos = [];

class Producto {
    constructor(nombre,categoria,precioCosto,foto,identificador){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precioCosto = parseFloat(precioCosto);
        this.foto = foto
        this.identificador = identificador
    }
}
productos.push(new Producto("torta selva negra","tortas",3100,`../fotos/selva-negra.jpg`,1));
productos.push(new Producto("chocotorta","tortas",2700,`../fotos/chocotorta.jpg`,2));
productos.push(new Producto("box dulce padre","box dulce",2000,`../fotos/boxdulce-padre.jpg`,3));
productos.push(new Producto("box dulce madre","box dulce", 2000,`../fotos/boxdulce-madre.jpg`,4));
productos.push(new Producto("torta de zanahoria","tortas",2100,`../fotos/torta-zanahoria.jpg`,5));
productos.push(new Producto("box dulce frutilla","box dulce", 2000,`../fotos/boxdulce-frutilla.jpg`,6));
productos.push(new Producto("torta cumpleaños hombre","tortas",4100,`../fotos/torta-cumpleaños.jpg`,7));
productos.push(new Producto("torta cumpleaños mujer","tortas",4100,`../fotos/torta-cumpleaños-mujer.jpg`,8));
productos.push(new Producto("torta de limon","tortas",1850,`../fotos/bizcochuelo-limon.jpg`,10));
productos.push(new Producto("macarons 6 unidades","macarons",500,`../fotos/macarons-6.jpg`,11));
productos.push(new Producto("cupcakes chocolate x 6","cupcakes",850,`../fotos/cupcakes-6unidades.jpg`,12));
productos.push(new Producto("macarons 3 unidades","macarons",300,`../fotos/macaron-3.jpg`,9));
productos.push(new Producto("cupcakes vainilla x 6","cupcakes",850,`../fotos/cupcakes-6unidades-vainilla.jpg`,13));
productos.push(new Producto("cupcakes mix x 6","cupcakes",850,`../fotos/cupcakes-personalizados.jpg`,14));
productos.push(new Producto("box dulce variado","box dulce", 2000,`../fotos/boxdulce-variado.jpeg`,15));
productos.push(new Producto("torta frutilla con crema","tortas",2400,`../fotos/torta-frutilla.jpg`,16));
productos.push(new Producto("torta de chocolate","tortas",2400,`../fotos/torta-de-chocolate.jpg`,17));
productos.push(new Producto("box dulce cumpleaños","box dulce", 2000,`../fotos/boxdulcecumpleaños.jpg`,18));
productos.push(new Producto("macarons 24 unidades","macarons", 2050,`../fotos/macaron-24.jpg`,19));

const productosConImpuestos = productos.map(productos => {
    return {
        nombre: productos.nombre,
        categoria: productos.categoria,
        precioConImpuestos: parseFloat(productos.precioCosto * 1.21),
        foto: productos.foto,
        identificador: productos.identificador
    }
})

//Lo uso para el buscador de min y maximo
const productosConImpuestos2 = productos.map(productos => {
    return {
        nombre: productos.nombre,
        categoria: productos.categoria,
        precioConImpuestos: parseFloat(productos.precioCosto * 1.21),
        foto: productos.foto,
        identificador: productos.identificador
    }
})

console.log(productosConImpuestos)
console.log(productosConImpuestos2)
localStorage.setItem("productos", JSON.stringify(productosConImpuestos));



