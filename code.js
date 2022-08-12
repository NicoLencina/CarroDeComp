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
  costeFinal += total;
}

function precioFinal() {
  let totalida = document.getElementById("listCompras");
  let resultado = document.createElement("p");
  resultado.textContent = parseInt(costeFinal);
  totalida.appendChild(resultado);
}
