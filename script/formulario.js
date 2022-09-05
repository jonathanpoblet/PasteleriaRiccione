const formularioCompra = document.getElementById("formularioCompra");
const botonCarrito = document.getElementById("carrito");

function crearForm() {
  botonCarrito.remove();
  paginaDelFormulario();
  dibujarCarritoForm();

  const nombreFormularioCompra = document.getElementById("nombre");
  const edadFormularioCompra = document.getElementById("edad");
  const emailFormularioCompra = document.getElementById("email");
  const direccionFormularioCompra = document.getElementById("direccion");
  const errorForm = document.getElementById("error");

  formularioCompra.addEventListener("submit", e => {
    e.preventDefault();
    let error = ""
    let entrar = false
    let mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    errorForm.innerHTML = ""

    if (nombreFormularioCompra.value.length < 2) {
      error += `*El nombre debe contener más de 5 caracteres <br>`
      entrar = true
    }

    if (edadFormularioCompra.value < 18) {
      error += `*Tienes que ser mayor de edad (18 años) <br>`
      entrar = true
    }

    if (!mailFormat.test(emailFormularioCompra.value)) {
      error += `*El email no es valido <br>`
      entrar = true
    }

    if (direccionFormularioCompra.value.length < 2) {
      error += `*Ingresa la direccion completa <br>`
      entrar = true
    }

    if (entrar) {
      errorForm.innerHTML = error
    }

    if (error == "") {
      if(carrito.length != ""){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada',
        html: 'Tu compra llegara en 5 dias habiles',
        showConfirmButton: false,
        timer: 3000
      });
      setTimeout(() => {
        carrito = [];
        dibujarCarrito();
        location.reload();
      }, 3000)
    }
    else{
      Swal.fire('No puedes comprar con el carrito vacio')
    }
    }
    else {
      Swal.fire('Debes tener el formulario completo');
    }
  })

  const cancelar = document.getElementById("cancelarForm");
  cancelar.onclick = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Salir',
      confirmButtonText: 'Si, elminar compra!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu compra fue eliminada.',
          'success'
        )
        setTimeout(() => {
          carrito = [];
          dibujarCarrito();
          location.reload();
        }, 3000)
      }
    });
  }
}




function paginaDelFormulario() {
  asideProductos.innerHTML = ""
  asideProductos.style = "width:0px; height:0px;"
  asideProductos.className = "m-0 p-0"
  seccionProductos.innerHTML = ""
  seccionProductos.style = "width:0px; height:0px;"
  seccionProductos.className = "m-0 p-0 pe-0"
  articleProductos.innerHTML = ""
  articleProductos.style = "width:0px; height:0px;"
  articleProductos.className = "m-0 p-0"
  document.body.style = "padding-right = 0px"

  formularioCompra.innerHTML = `
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <input type="text" id="nombre" class="form-control inputForm" />
          <label class="form-label mt-2" for="nombre">Nombre</label>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <input type="number" id="edad" class="form-control inputForm" />
          <label class="form-label mt-2" for="edad">Edad</label>
        </div>
      </div>
    </div>
  
    <div class="form-outline mb-4">
      <input type="email" id="email" class="form-control inputForm" />
      <label class="form-label mt-2" for="email">Email</label>
    </div>
  
    <div class="form-outline mb-4">
      <input type="text" id="direccion" class="form-control inputForm" />
      <label class="form-label mt-2" for="direccion">Dirreción completa</label>
    </div>

    <p id="error"></p>

    <button id="confirmarForm" type="submit" class="btn btn-success btn-block mb-4 botonForm">COMPRAR</button>
    <button id="cancelarForm" type="button" class="btn btn-danger btn-block mb-4 botonForm">CANCELAR</button>

    <div class="container">
    <table class="table">
        <thead>
            <tr>
              <th class="formDesaparece" scope="col"></th>
              <th class="formTexto" scope="col">Nombre</th>
              <th class="formTexto" scope="col">Cantidad</th>
              <th class="formDesaparece" scope="col">Precio</th>
              <th class="formTexto" scope="col">Total</th>
            </tr>
        </thead>
        <tbody id="contenedorCarritoForm">

        </tbody>
        <tfoot>
            <tr id="footerForm">
            <th class="formTexto" scope="row" colspan="5">Total:</th>
            </tr>
        </tfoot>
    </table>
    <div class="row" id="cards"></div>
    </div>
    `
}


function dibujarCarritoForm() {
  const contenedorCarritoForm = document.getElementById("contenedorCarritoForm");
  const footerCarritoForm = document.getElementById("footerForm");
  contenedorCarritoForm.innerHTML = "";

  carrito.forEach(
    (elemento) => {
      let renglonCarrito = document.createElement("tr")

      renglonCarrito.innerHTML = `
                <tr>
                    <td class="formDesaparece"><img src=${elemento.producto.foto} style= "width:80px; height:80px;"></td>
                    <td class="formTexto">${elemento.producto.nombre}</td>
                    <td><input id="cantidadProducto${elemento.producto.identificador}" type="number" value="${elemento.cantidad}" min="1" max="99" step="1" class="inputCantidad"</td>
                    <td class="formDesaparece">$${elemento.producto.precio}</td>
                    <td>$${elemento.producto.precio * elemento.cantidad}</td>
                    <td><button id="eliminarProducto${elemento.producto.identificador}" type="button" class="btn btn-danger "><i class="bi bi-trash"></i></button></td>
                </tr>
            `;

      contenedorCarritoForm.append(renglonCarrito);

      let inputCantidadProductos = document.getElementById(`cantidadProducto${elemento.producto.identificador}`)

      inputCantidadProductos.addEventListener("change", (e) => {
        let nuevaCantidad = e.target.value;
        elemento.cantidad = nuevaCantidad;
        dibujarCarritoForm();
      });

      let botonBorrar = document.getElementById(`eliminarProducto${elemento.producto.identificador}`)
      botonBorrar.addEventListener("click", () => {
        borrarProductoCarrito(elemento);
        dibujarCarritoForm();
      });
    }
  );

  let total = carrito.reduce((acumulador, elemento) => acumulador + elemento.producto.precio * elemento.cantidad, 0);

  footerCarritoForm.innerHTML = `Total: $${total}`;

}



