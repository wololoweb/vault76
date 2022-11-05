
//---------------- TEMPLATE - CARDS ----------------//

const crearCard = (producto) => {

    return `<div class="card-general">
                
                <div class="card-imagen">${producto.imagen}</div>
                <div class="card-nombre"><h2>${producto.nombre}</h2></div>
                <div class="card-importe"><h3>$ ${producto.importe}</h3></div>
                
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">COMPRAR</button>
                </div>
            </div>`

}


const mostrar = (producto) => {

    return `<div class="resultadoCarrito">
                <div>
                <h1>Cantidad de títulos: ${contadorTitulos}</h1>
                <h1>Importe: $ ${precioTotal}</h1>
                <h1>Importe + IVA: $ ${precioTotalIva}</h1>
                
                <div class="card-button">
                <button class="button button-outline button-add button-volver"><a href="tienda.html">VOLVER</a></button>
                </div>
                </div>
                
            </div>`

}

const sinProductos = () => {
    return `<div class="resultadoCarrito">
    <div>
        <h1>No has ingresado ningún producto al carrito.</h1>
            <div class="card-button">
                <button class="button button-outline button-add button-volver"><a href="tienda.html">VOLVER</a></button>
            </div>
    </div>
    </div>
    
</div>`
}

