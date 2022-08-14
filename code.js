let costeFinal = 0;

function agregarProducto() {
  let nombre = document.getElementById("nombreP").value;
  let precioPorUnidad = document.getElementById("precio").value;
  let cantidadDeProducto = document.getElementById("cantidad").value;
  let listaNueva = document.getElementById("lista");
  let total = cantidadDeProducto * precioPorUnidad;
  const objLista = document.createElement("li");
  listaNueva.appendChild(objLista);
  objLista.innerHTML =
    nombre +
    " " +
    precioPorUnidad +
    " -C/u- " +
    " x " +
    cantidadDeProducto +
    " = $" +
    total;
  costeFinal = costeFinal + total;
  console.log(costeFinal);
}

function precioFinal() {
  let totalida = document.getElementById("pFinal");
  let dato = parseInt(precioFinal);
  totalida.appendChild(dato);
  console.log(dato);
}
