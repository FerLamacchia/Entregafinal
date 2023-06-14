class Paquete {
    constructor(datos) {
      this.id = datos.idProducto;
      this.nombre = datos.nombreProducto;
      this.descripcion = datos.descripcionProducto;
      this.precio = datos.precioProducto;
      this.cantidad = datos.cantidadProducto;
      this.imagen = datos.imagenProducto;
    }
  
    PrecioConIVA() {
      return this.precio * 1.21;
    }
  
    vender() {
      if (this.cantidad > 0) {
        this.cantidad -= 1;
      } else {
        console.log("se acabo");
      }
    }
  }
  
  const producto1 = new Paquete({
    idProducto: 1,
    nombreProducto: "Turquia",
    descripcionProducto:
      "  En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
    precioProducto: 1300,
    cantidadProducto: 5,
    imagenProducto: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
  });
  
  //
  const producto2 = new Paquete({
    idProducto: 2,
    nombreProducto: "Brasil",
    descripcionProducto:
      "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
    precioProducto: 900,
    cantidadProducto: 20,
    imagenProducto:
      "https://lamenteesmaravillosa.com/wp-content/uploads/2016/05/Mujer-pensando-en-sus-proyectos.jpg",
  });
  
  const producto3 = new Paquete({
    idProducto: 3,
    nombreProducto: "Argentina",
    descripcionProducto:
      "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
    precioProducto: 300,
    cantidadProducto: 15,
    imagenProducto:
      "https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
  });

  const producto4 = new Paquete({
    idProducto: 4,
    nombreProducto: "Italia",
    descripcionProducto:
      "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
    precioProducto: 1200,
    cantidadProducto: 5,
    imagenProducto:
      "https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
  });
  
  const paquetes = [producto1, producto2, producto3, producto4];