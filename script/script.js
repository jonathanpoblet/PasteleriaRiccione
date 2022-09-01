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
        asideProductos.innerHTML=""
        asideProductos.style= "width:0px; height:0px;"
        asideProductos.className= "m-0 p-0"
        seccionProductos.innerHTML=""
        seccionProductos.style= "width:0px; height:0px;"
        seccionProductos.className= "m-0 p-0 pe-0"
        articleProductos.innerHTML=""
        articleProductos.style= "width:0px; height:0px;"
        articleProductos.className= "m-0 p-0"
        formularioCompra.innerHTML= `
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example1" class="form-control" required />
              <label class="form-label mt-2" for="form3Example1">Nombre</label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input type="text" id="form3Example2" class="form-control" required />
              <label class="form-label mt-2" for="form3Example2">Apellido</label>
            </div>
          </div>
        </div>
      
        <div class="form-outline mb-4">
          <input type="email" id="form3Example3" class="form-control" required />
          <label class="form-label mt-2" for="form3Example3">Email</label>
        </div>
      
        <div class="form-outline mb-4">
          <input type="text" id="form3Example4" class="form-control" required />
          <label class="form-label mt-2" for="form3Example4">Dirreción</label>
        </div>

        
        <button id="confirmarForm" type="submit" class="btn btn-primary btn-block mb-4">ENVIAR</button>
        <button id="cancelarForm" type="submit" class="btn btn-primary btn-block mb-4">CANCELAR</button>
        `;
        const confirmarForm = document.getElementById("confirmarForm");
        const cancelarForm = document.getElementById("cancelarForm");
        confirmarForm.addEventListener("click", ConfirmarForm);
        cancelarForm.addEventListener("click",CancelarForm);
    }
    })
}

function ConfirmarForm(){
    if(carrito.length != 0){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada',
        html:'Tu compra llegara en 5 dias habiles',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(()=>{
        carrito = [];
        dibujarCarrito();
        location.reload();
      },2000)
    }
    else{
        Swal.fire('Tienes que agregar productos al carrito')
    }
}

function CancelarForm(){
    if(carrito.length != 0){
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
        }
      });
    carrito = [];
    dibujarCarrito();
    }
    else{
        Swal.fire('Tienes que agregar productos al carrito')
    }
}

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
    let min = productosConImpuestos2.sort((a,b) => a.precioConImpuestos - b.precioConImpuestos);
    articleProductos.innerHTML=""
    hacerCards(min);
}
botonPrecioMax.onclick = function(){
    let max = productosConImpuestos2.sort((b,a) => a.precioConImpuestos - b.precioConImpuestos);
    articleProductos.innerHTML=""
    hacerCards(max);
}

