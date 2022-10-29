
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
            console.table(carrito)  
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
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if (resultado !== undefined) {
            carrito.push(resultado)  
            precioTotal += resultado.importe;  
            contadorTitulos += 1
            console.clear()
            console.table(carrito)
              
        }

        precioTotalIva = precioTotal * IVA;
           
}


//-------------------- MUESTRO EL CARRITO --------------------//



/* console.log(precioTotal) */





/* const calcularIva =() =>{
    precioTotalIva = precioTotal * IVA;
    console.log(precioTotalIva)
}

calcularIva() */

