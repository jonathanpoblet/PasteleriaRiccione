/*//Algoritmo para calcular mostrar el precio del producto, luego sumarle el iva y restarle los descuentos en efe

function precioConIvaYDescuento (precio,descuentoEfectivo) {
    precioConIva = parseFloat(precio * 1.21);
    precioTotalConIvaYDescuento = parseFloat(precioConIva * 0.9);
    console.log("El precio del producto es: $" + precio + "\n" +  "El precio con el iva agregado del producto es: $" + precioConIva + "\n" + "El precio final con iva agregado y descuento es: $" + precioTotalConIvaYDescuento);

}

precioConIvaYDescuento(1000,0.9);
precioConIvaYDescuento(900,0.9);
precioConIvaYDescuento(1200,0.9);
precioConIvaYDescuento(1300,0.9);
precioConIvaYDescuento(800,0.9);
precioConIvaYDescuento(750,0.9);
precioConIvaYDescuento(1400,0.9);
precioConIvaYDescuento(1050,0.9);
precioConIvaYDescuento(1000,0.9);

//Ingresar direccion completa para poder enviar el pedido

const direccion = (calle,numero,codigoPostal) => "Dirección: " + calle + " " + numero + " CP: " + codigoPostal;

console.log(direccion("Yrigoyen", "9010" , "1840"));
console.log(direccion("Baliña", "192", "1832"));
console.log(direccion("Tucuman", "610", "1830"));
console.log(direccion("Alvear", "1090", "1920"));


//Si el cliente lleva 3 o más productos,tendra una bonificación de $300 para su proxima compra


for(i=0; i<6 ; i++){
    let compra = parseInt(prompt("Cuantos productos vas a comprar"));
    if (compra >= 3){
        console.log("Al llevar 3 productos o más, obtendra una bonificación de $300 en su proxima compra")
    }
    else{
        console.log("Para acceder a la bonificación de $300, debe adquirir 3 o más productos")
    }
}
*/

class Producto {
    constructor(nombre,categoria,precioCosto){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precioCosto = parseFloat(precioCosto);
    }
    sumaIva() {
        this.precioConImpuestos = this.precioCosto * 1.21;
    }
}

const productos = [];

productos.push(new Producto("selva negra","tortas",3100));
productos.push(new Producto("chocotorta","tortas",2700));
productos.push(new Producto("torta frutilla con crema","tortas",2400));
productos.push(new Producto("torta de chocolate","tortas",2400));
productos.push(new Producto("torta de zanahoria","tortas",2100));
productos.push(new Producto("bizcochuelo de limon","tortas",1850));
productos.push(new Producto("torta cumpleaños hombre","tortas",4100));
productos.push(new Producto("torta cumpleaños mujer","tortas",4100));
productos.push(new Producto("macarons 3 unidades","macarons",300));
productos.push(new Producto("macarons 6 unidades","macarons",500));
productos.push(new Producto("macarons 24 unidades","macarons", 2050));
productos.push(new Producto("cupcakes chocolate x 6","cupcakes",850));
productos.push(new Producto("cupcakes vainilla x 6","cupcakes",850));
productos.push(new Producto("cupcakes personalizados x 6","cupcakes",850));
productos.push(new Producto("box dulce dia del padre","box dulce",2000));
productos.push(new Producto("box dulce dia de la madre","box dulce", 2000));
productos.push(new Producto("box dulce variado","box dulce", 2000));
productos.push(new Producto("box dulce frutilla","box dulce", 2000));
productos.push(new Producto("box dulce cumpleaños","box dulce", 2000));


console.log("En total, Pasteleria Riccione tiene " + productos.length + " productos:");

for(const producto of productos){
    producto.sumaIva();
}
console.log(productos);