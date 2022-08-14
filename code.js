console.clear();
//voy a guardar todos los resultados de las multiplicaciones para dar el total
let costeFinal = 0;

function agregarProducto() {
  //traigo los tres datos de html
  let nombre = document.getElementById("nombreP").value;
  let precioPorUnidad = document.getElementById("precio").value;
  let cantidadDeProducto = document.getElementById("cantidad").value;
  //guardo dentro de el div lista
  let listaNueva = document.querySelector(".listCompras");
  //el resultado de cantidad por producto que voy a guardar en costeFinal
  let total = cantidadDeProducto * precioPorUnidad;
  //creo 4 lista con cada objeto para editar en css
  let contengo = document.createElement("ul");
  let objetoNombre = document.createElement("li");
  let objetoProducto = document.createElement("li");
  let objetoPrecio = document.createElement("li");
  let precio = document.createElement("li");
  //armo los textos por separado
  let datoNombre = document.createTextNode("Producto: " + nombre);
  let datoProducto = document.createTextNode("Por unidad: $" + precioPorUnidad);
  let datoPrecio = document.createTextNode("Cantidad: " + cantidadDeProducto);
  let datoFinal = document.createTextNode("= $" + total);
  //creo
  listaNueva.appendChild(contengo);
  contengo.appendChild(objetoNombre);
  objetoNombre.appendChild(datoNombre);
  contengo.appendChild(objetoProducto);
  objetoProducto.appendChild(datoProducto);
  contengo.appendChild(objetoPrecio);
  objetoPrecio.appendChild(datoPrecio);
  contengo.appendChild(precio);
  precio.appendChild(datoFinal);

  costeFinal = costeFinal + total;
  console.log(costeFinal);
}

function precioFinal() {
  let final = document.getElementById("laLista");
  let totalida = document.createElement("p");
  let textoFinal = document.createTextNode("Total: $" + costeFinal);
  final.appendChild(totalida);
  totalida.classList.add("editoFinal");
  totalida.appendChild(textoFinal);
  console.log(totalida);
}
