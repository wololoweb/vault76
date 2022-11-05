
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

const cargarProductos = ()=> { 

    grilla.innerHTML = ""
    
    productos.forEach((producto) => {

        grilla.innerHTML += crearCard(producto)

    })
    activarBotones()  
    activarCarrito()
}
cargarProductos()

//---------------- MOSTRAR CARRITO EN HTML ----------------//

const mostrarCarrito = ()=> { 
      
    
    grilla.innerHTML = ""
    
    carrito.forEach((producto) => {

        containerCarrito.innerHTML = mostrar(producto) 
        
    })

    
    
}




//-------------------- AGREGO AL CARRITO --------------------//

const agregarAlCarrito = (e)=> { 
    let resultado = productos.find(producto => producto.nombre === e.target.id)
        
        if (resultado !== undefined) {
            carrito.push(resultado);  
            guardarCarritoStorage();
            precioTotal += resultado.importe;  
            contadorTitulos += 1
            console.clear()
            console.table(carrito)
            alertOK(e) 
        }

        precioTotalIva = precioTotal * IVA;
           
}


//-------------------- GUARDAR CARRITO EN STORAGE --------------------//

const guardarCarritoStorage = () => {
    if(carrito.length > 0) {
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

    } else {
        containerCarrito.innerHTML = sinProductos()
    }
}
document.addEventListener("DOMContentLoaded", recuperarCarrito)

const alertOK = (e) => {
    productos.find(producto => producto.nombre === e.target.id)
    Swal.fire({
        icon: 'success',
        title: `${e.target.id}`,
        text: 'Fue añadido a tu carrito',
        /* footer: '<a href="">Why do I have this issue?</a>' */
      })
}

