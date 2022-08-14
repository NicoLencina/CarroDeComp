//voy a guardar todos los resultados de las multiplicaciones para dar el total
let costeFinal = 0;

function agregarProducto() {
  //traigo los tres datos de html
  let nombre = document.getElementById("nombreP").value;
  let precioPorUnidad = document.getElementById("precio").value;
  let cantidadDeProducto = document.getElementById("cantidad").value;
  //guardo dentro de el div lista
  let listaNueva = document.getElementById("lista");
  //el resultado de cantidad por producto que voy a guardar en costeFinal
  let total = cantidadDeProducto * precioPorUnidad;
  //creo 4 lista con cada objeto para editar en css
  let objetoNombre = document.createElement("li");
  let objetoProducto = document.createElement("li");
  let objetoPrecio = document.createElement("li");
  let precio = document.createElement("li");
  //armo los textos por separado
  let datoNombre = document.createTextNode("Producto: " + nombre);
  let datoProducto = document.createTextNode(
    "Precio por unidad: $" + precioPorUnidad
  );
  let datoPrecio = document.createTextNode("Cantidad: " + cantidadDeProducto);
  let datoFinal = document.createTextNode(": $" + total);
  //creo
  listaNueva.appendChild(objetoNombre);
  objetoNombre.appendChild(datoNombre);
  listaNueva.appendChild(objetoProducto);
  objetoProducto.appendChild(datoProducto);
  listaNueva.appendChild(objetoPrecio);
  objetoPrecio.appendChild(datoPrecio);
  listaNueva.appendChild(precio);
  precio.appendChild(datoFinal);

  console.log(costeFinal);
}

function precioFinal() {
  let totalida = document.getElementById("pFinal");
  let dato = parseInt(precioFinal);
  totalida.appendChild(dato);
  console.log(dato);
}
