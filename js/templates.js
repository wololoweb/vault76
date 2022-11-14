
//---------------- TEMPLATE - CARDS ----------------//

const crearCard = (producto) => {

    return `<div class="card-general">
                
                <div class="card-imagen"><img src="${producto.imagen}" alt="Imagen de Portada"></div>
                <div class="card-nombre"><h2>${producto.nombre}</h2></div>
                <div class="card-importe"><h3>$ ${producto.importe}</h3></div>
                
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">AÑADIR</button>
                </div>
            </div>`

}


const mostrar = (producto) => {
    
    return `<div class="containerCarrito">
                
                <div>
                    <img src="${producto.imagen}" alt="Imagen de Portada">
                </div>
                <div>
                    <h1><strong>${producto.nombre}</strong></h1>
                    <h2>Importe total: $ ${producto.importe}</h2>
                    <h2>Importe total + IVA: $ ${producto.importe * IVA}</h2>
                    
                        <div class="card-button">
                            <button class="button button-outline button-add button-eliminar">ELIMINAR</button>
                            <button class="button button-outline button-add button-comprar">COMPRAR</button>
                        </div>
                </div>
                
            </div>`
            
}

const sinProductos = () => {
    return `<div class="resultadoCarrito">
    <div>
        <h1>No has ingresado ningún producto al carrito.</h1>
            <div class="card-button">
                <button class="button button-outline button-add button-comprar"><a href="tienda.html">VOLVER</a></button>
            </div>
    </div>
    </div>
    
</div>`
}

