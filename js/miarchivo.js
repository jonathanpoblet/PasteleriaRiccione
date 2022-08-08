//creador de productos
class Producto {
    constructor(nombre,categoria,precioCosto){
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precioCosto = parseFloat(precioCosto);
    }
}

const productos = [];

//productos ingresados al array
productos.push(new Producto("torta selva negra","tortas",3100));
productos.push(new Producto("chocotorta","tortas",2700));
productos.push(new Producto("torta frutilla con crema","tortas",2400));
productos.push(new Producto("torta de chocolate","tortas",2400));
productos.push(new Producto("torta de zanahoria","tortas",2100));
productos.push(new Producto("torta de limon","tortas",1850));
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

//productos al costo
console.log(productos);

//le sume el iva a los productos
const productosConImpuestos = productos.map(productos => {
    return {
        nombre: productos.nombre,
        categoria: productos.categoria,
        precioConImpuestos: parseFloat(productos.precioCosto * 1.21)
    }
})
console.log(productosConImpuestos)

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
    alert("Gracias por venir, hasta pronto");
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

//Ingresar direccion completa para poder enviar el pedido

