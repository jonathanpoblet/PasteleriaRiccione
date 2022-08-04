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

