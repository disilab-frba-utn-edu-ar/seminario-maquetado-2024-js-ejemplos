function cambiarColor() {
	let color = document.getElementById("color-selector").value;
	let element = document.getElementById("cuadrado2");
	
	element.classList.remove("azul");
	element.classList.remove("rojo");
	element.classList.add(color);
}