import { fetchProducts } from './functions.js';
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

let renderProducts = () => {
    fetchProducts("https://data-dawm.github.io/datum/reseller/products.json")
        .then(result => {
            if (result.success){
                let container = document.getElementById("products-container");
                container.innerHTML = '';

                let products= result.body.slice(0,6);
                
                products.forEach(product => {
                                    
                let productHTML = `
                <div class="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                    <img
                        class="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-lg object-cover transition-transform duration-300 hover:scale-[1.03]"
                        src="[PRODUCT.IMGURL]" alt="[PRODUCT.TITLE]">
                    <h3
                        class="h-6 text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-black-600 dark:hover:text-white-400">
                        $[PRODUCT.PRICE]
                    </h3>

                    <div class="h-5 rounded w-full">[PRODUCT.TITLE]</div>
                        <div class="space-y-2">
                            <a href="[PRODUCT.PRODUCTURL]" target="_blank" rel="noopener noreferrer"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full inline-block">
                                Ver en Amazon
                            </a>
                            <div class="hidden"><span class="1">[PRODUCT.CATEGORY_ID]</span></div>
                        </div>
                    </div>
                </div>`;

                productHTML = productHTML.replaceAll('[PRODUCT.TITLE]', product.title)
                productHTML = productHTML.replaceAll('[PRODUCT.IMGURL]', product.imgUrl) 
                container.innerHTML += productHTML;
                })
            }else {console.error()};
        })
}

// Función de autoejecución
(() => {
    console.log("Archivo file01.js ejecutado correctamente.");
    showToast();
    showVideo();
    renderProducts();
})();

/* fetch , objeto. que hacer en caso de que esa promesa se cunple o no 

formato de intercambio de datos
XML ES EL GRAN PADRE de html. marcado de extensiones
json

las promesas sirven para tratar requerimientos asincronos . 
-chain of promises a medida que se va generando una pormesa, paso esa responsabilidad paso el siguiente reusltado aen esa 
    cadena de responsabilidades

-async await. otra forma    

cadena de promesas con un , permtite enfocarnos en que una seccion de codigo tenga una caracteristica unica, y cuando termina la envie a la isguiente
 eso me asegura divsiibilidad , mantenimiento, etc
async/await 
*/