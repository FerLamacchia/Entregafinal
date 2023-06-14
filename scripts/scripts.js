

//FILTRADO DE PRODUCTOS

//FILTRADOS POR NOMBRE

let botonDeFiltroJs = document.getElementById("botonDeFiltro");

const mostrarPqueteEncontradoPorNombre = () => {

  const nombreBuscadoJs= document.getElementById("nombreBuscado").value

  const paqueteEncontrado = paquetes.find(
    (item) => item.nombre.toLowerCase() === nombreBuscadoJs.toLowerCase()
  );

  let mensajeJs = document.getElementById("mensaje");



  paqueteEncontrado ?  

  mensajeJs.innerHTML = ` 
 
  <strong>Producto encontrado con ese nombre<strong>
  <p>${paqueteEncontrado.nombre}</p>
  <p>cuesta $ ${paqueteEncontrado.PrecioConIVA()} con IVA incluido</p>
  `

  :

  mensajeJs.innerHTML = ` 
    
  <p>Paquete no encontrado</p>
  `

};

botonDeFiltroJs.addEventListener("click", ()=> mostrarPqueteEncontradoPorNombre());


//FILTRADOS POR PRECIO

let botonDeFiltroPrecioJs = document.getElementById("botonDeFiltroPrecio");

const mostrarPaqueteEncontradoPorPrecio = () => {

  const precioBuscadoJs= Number(document.getElementById("precioBuscado").value)

  const paquetesFiltradosPorPrecio =paquetes.filter(
    (item) => item.precio <= precioBuscadoJs
  );

  let mensajePrecioJs = document.getElementById("mensajePrecio");

  if (paquetesFiltradosPorPrecio.length>0) {

    paquetesFiltradosPorPrecio.forEach((item) =>{
    mensajePrecioJs.innerHTML  += `
    
    <strong>${item.nombre}<strong>
    <b>$${item.PrecioConIVA()}</b>
    
  
    `
    });


  } else {

    mensajePrecioJs.innerHTML = `
    
    No hay productos con ese precio
    
    `;
  };

};

botonDeFiltroPrecioJs.addEventListener("click", () => mostrarPaqueteEncontradoPorPrecio());