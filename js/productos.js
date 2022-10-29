//---------------- CLASS PRODUCTO ----------------//


class Producto {
    constructor(imagen, nombre, importe, total) {

        this.imagen = imagen;
        this.nombre = nombre;
        this.importe = importe;
        this.total = importe * IVA;
    }

}


//---------------- PRODUCTOS PRE-CARGADOS ----------------//

productos.push(new Producto(`<img src="../imagenes/reviews/fallout1.jpg" alt="">`  , "FALLOUT 1",          150))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout2.jpg" alt="">`  , "FALLOUT 2",          350))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout3.jpg" alt="">`  , "FALLOUT 3",          850))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout4.jpg" alt="">`  , "FALLOUT 4",          1100))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout76.jpg" alt="">` , "FALLOUT 76",         2600))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout1.jpg" alt="">`  , "ATOM RPG",           350))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout1.jpg" alt="">`  , "ATOM RPG TRUDOGRAD", 550))
productos.push(new Producto(`<img src="../imagenes/reviews/fallout1.jpg" alt="">`  , "FIFA 23",            6500))








//---------------- IMPACTO PRODUCTOS EN HTML ----------------//



