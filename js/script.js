// JavaScript para validar y procesar el formulario (puedes agregar tu lógica de envío aquí)

function cambiarColorFondo() {
  // Genera un color aleatorio
  const color = Math.floor(Math.random() * 256) + 1;
  const color2 = Math.floor(Math.random() * 256) + 1;
  const color3 = Math.floor(Math.random() * 256) + 1;

  // Establece el color de fondo de la página
  document.body.style.backgroundColor = `rgb(${color}, ${color2}, ${color3})`;
}

// Agrega un evento de clic al botón
document.querySelector("#boton").addEventListener("click", cambiarColorFondo);
      
      

// Agrega un evento de publicidad
// Función para mostrar la imagen
function mostrar() {
    document.getElementById('img').style.display = 'block';
}
function ocultar() {
    document.getElementById('img').style.display = 'none';
}

function abrirEnNuevaPestaña(url) {
  // Crea un nuevo enlace
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.target = "_blank";

  // Agrega el enlace al documento
  document.body.appendChild(enlace);

  // Activa el enlace
  enlace.click();
}

// Agrega un evento de clic a todos los enlaces
document.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", abrirEnNuevaPestaña);
});





