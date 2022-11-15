let productos = []

//---------------- ADDEVENLISTENER  ----------------//

const grilla = document.querySelector(".grid-tienda")
const containerCarrito = document.querySelector(".containerCarrito")


const activarBotones = () => {     
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
    botonesAdd.forEach((boton) => {        
        boton.addEventListener("click", (e) => { 
           agregarAlCarrito(e)    
           
        })      
    })  
    
}



const activarCarrito = () =>{
    const botonCarrito = document.querySelectorAll(".logo-carrito")
    botonCarrito.forEach((boton) => {        
        boton.addEventListener("click", (e) => { 
            /* console.table(carrito) */  
           mostrarCarrito()
           
           
                   
        }) 
             
    })  
   
}



//---------------- CARGO PRODUCTOS EN HTML ----------------//




const cargarProductos = async () => {
    
    let grillaProductos = ""
    activoBotones = true
    activoCarrito = true

    try {
        const response = await fetch("https://637114090399d1995d8aba51.mockapi.io/vault76")
        productos = await response.json()
        productos.forEach((producto) => {
            grillaProductos += crearCard(producto)
        })
    } catch (error) {
        
    } finally {
        grilla.innerHTML = grillaProductos
        activarBotones()  
        activarCarrito()
    }
    
}

/* const cargarProductos = ()=> { 

    grilla.innerHTML = ""
    
    productos.forEach((producto) => {

        grilla.innerHTML += crearCard(producto)

    })
    activarBotones()  
    activarCarrito()
}
cargarProductos() */

//---------------- MOSTRAR CARRITO EN HTML ----------------//

const mostrarCarrito = ()=> { 
    
    if (carrito.length==0){
        grilla.innerHTML = sinProductos()
    } else {grilla.innerHTML = ""}
    
    

    carrito.forEach((producto) => {

        containerCarrito.innerHTML += mostrar(producto) 
        botonComprar()
        botonEliminar()
    })
   
}


//-------------------- AGREGO AL CARRITO --------------------//

const agregarAlCarrito = (e)=> { 
    let resultado = productos.find(producto => producto.nombre === e.target.id) // cuando hago target a este evento capturo su id (tag)
        
        if (resultado !== undefined) {
            carrito.push(resultado);  
            guardarCarritoStorage();
            precioTotal += resultado.importe;  
            contadorTitulos += 1
            console.clear()
            console.table(carrito)
            /* alertOK(e)  */
            toast(e)
        }

        precioTotalIva = precioTotal * IVA;
           
}


//-------------------- GUARDAR CARRITO EN STORAGE --------------------//

const guardarCarritoStorage = () => {
    if(carrito.length >= 0) {
        localStorage.setItem("Carrito", JSON.stringify(carrito)) // aca ya me va a agregar el carrito en un string
                
    }
}

//-------------------- RECUPERAR DATOS DEL CARRITO --------------------//

const recuperarCarrito = () => {
    
    if(localStorage.getItem("Carrito")) { 
        
        let carritoRecuperado = JSON.parse(localStorage.getItem("Carrito"))
        
        carritoRecuperado.forEach((producto) => {
            carrito.push(producto)
            contadorTitulos += 1
            precioTotal += producto.importe  
        })
        
        precioTotalIva = precioTotal * IVA;

        console.table(carritoRecuperado)

    } 
}


const botonComprar = () => {     
    const botonBuy = document.querySelectorAll(".button-comprar")
    botonBuy.forEach((boton) => {        
        boton.addEventListener("click", (e) => comprarDelCarrito(e))       
    })    
}

const comprarDelCarrito = (e) => {
   
    let resultado = carrito.find((producto) => producto.nombre === e.target.id);
    let posicion = carrito.indexOf(resultado);
  
        carrito.splice(posicion, 1);
        guardarCarritoStorage();
        containerCarrito.innerHTML = ""
        carrito.forEach((producto) => {
            
            containerCarrito.innerHTML += mostrar(producto) 
            botonComprar()
        })
        
       if (carrito.length==0) {
        grilla.innerHTML = sinProductos()
       }
        
    alertCompra(e)
    
}

const botonEliminar = () => {     
    const botonBuy = document.querySelectorAll(".button-eliminar")
    botonBuy.forEach((boton) => {        
        boton.addEventListener("click", (e) => eliminarDelCarrito(e))       
    })    
}

const eliminarDelCarrito = (e) => {
   
    let resultado = carrito.find((producto) => producto.nombre === e.target.id);
    let posicion = carrito.indexOf(resultado);
  
        carrito.splice(posicion, 1);
        guardarCarritoStorage();
        containerCarrito.innerHTML = ""
        carrito.forEach((producto) => {
            
            containerCarrito.innerHTML += mostrar(producto) 
            botonEliminar()
        })
        
       if (carrito.length==0) {
        grilla.innerHTML = sinProductos()
       }
        
    alertEliminar(e)
    
}

document.addEventListener("DOMContentLoaded", cargarProductos)

document.addEventListener("DOMContentLoaded", recuperarCarrito)



/* const alertOK = (e) => {
    productos.find(producto => producto.nombre === e.target.id)
    Swal.fire({
        icon: 'success',
        title: `${e.target.id}`,
        text: 'Fue añadido a tu carrito.',
        showConfirmButton: false,
        timer: 1500
        
      })
} */

const toast = (e) => {
    productos.find(producto => producto.nombre === e.target.id)
    Toastify({
        text: `${e.target.id} fue añadido al carrito.`,
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            color: "white",
            background: "linear-gradient(to right, #00b09b, #27c116)"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

const alertCompra = (e) => {
    productos.find(producto => producto.nombre === e.target.id)
    Swal.fire({
        icon: 'success',
        title: `${e.target.id}`,        
        text: 'Fue comprado con éxito',
        showConfirmButton: false,
        timer: 2000
        /* footer: '<a href="">Why do I have this issue?</a>' */
      })
}

const alertEliminar = (e) => {
    productos.find(producto => producto.nombre === e.target.id)
    Swal.fire({
        icon: 'error',
        title: `${e.target.id}`,        
        text: 'Fue eliminado con éxito',
        showConfirmButton: false,
        timer: 2000
        /* footer: '<a href="">Why do I have this issue?</a>' */
      })
}

