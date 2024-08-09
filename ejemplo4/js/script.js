// Agregar Eventos Click al Inicializar
window.onload = function() {

	let elementoBtnEliminar = document.getElementById("btnEliminarCuadrado");
	let elementoBtnCrear = document.getElementById("btnCrearCuadrado");

	//Agrega evento click al elemento Botón Eliminar
	elementoBtnEliminar.addEventListener("click", function() {
		eliminarCuadrado();
	});

	//Agrega evento click al elemento Botón Crear
	elementoBtnCrear.addEventListener("click", function() {
		crearCuadrado();
	});

};

function eliminarCuadrado() {
	document
		.getElementById("cuadrado-placeholder")
		.querySelectorAll(".cuadrado")
		.forEach(item => {
			item.remove()
		});
}

function crearCuadrado() {
	let div = document.createElement("div");
	div.classList.add("cuadrado");
	document.getElementById("cuadrado-placeholder").appendChild(div);
}