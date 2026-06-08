"use strict";

/* (()=>{
    alert("Jelou World"); //objetos  ya creado e instanciado. el objeto alert viene predefinido en un navegador. se le pasa como parametro . el objeto alert bloquea el flujo de ejecucion de la pag
    console.log("Jelou world") //objeto c onsol, no es bloqueante . es para enseniar mensajes de consola , pero no para depurar , para eso se usa el dev tools
    // dev otols sirve tambien apra depiurar el java cript
})(); // 

// funcino anonima .  */
// 1. Creación de la función flecha
const showToast = () => {  // document objeto . metodos y atributos , representa la estructura htmll de tu pagina. . getElementById()
  // Obtiene la referencia al elemento
  const toastElement = document.getElementById("toast-interactive");
  
  // Verifica si el elemento existe en el HTML
  if (toastElement) {
    // Agrega la clase para mostrar la notificación
    toastElement.classList.add("md:block"); // ahora hace que esto se jecute in block / a la clase hidden, se le agrega que se muestre como block
  }
};


// 2. Función de autoejecución modificada
// Función flecha para mostrar/abrir el video
const showVideo = () => {
    const demo = document.getElementById("demo");

    if (demo) {
        demo.addEventListener("click", () => { // evento.cuando un usuario interactua con algo del sistema y ese reacciona.
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // window representa todo el navegador. 
        });

        console.log("Evento click agregado correctamente al elemento con ID demo.");
    } else {
        console.log("No se encontró el elemento con ID demo.");
    }
};

// Función de autoejecución
(() => {
    console.log("Archivo file01.js ejecutado correctamente.");
    showToast();
    showVideo();
})();

