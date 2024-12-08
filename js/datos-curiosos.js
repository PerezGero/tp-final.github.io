
// Seleccionamos el botón por su id
const botonDatoCurioso = document.getElementById('datoCuriosoBtn');

// Añadimos un listener para que ejecute la función al hacer clic
botonDatoCurioso.addEventListener('click', mostrarDatoCurioso);

// Array con 10 datos curiosos sobre los Ultraentes
const datosCuriosos = [
    "Sabías que los Ultraentes pueden alterar la percepción del tiempo debido a su conexión con los Ultraumbrales?",
    "Se ha observado que los Ultraentes tienen una capacidad única para cambiar de forma según el entorno en el que se encuentren.",
    "Algunos Ultraentes poseen habilidades telepáticas que les permiten comunicarse entre ellos sin usar palabras.",
    "Los Ultraentes que habitan en zonas volcánicas son capaces de soportar temperaturas extremas sin sufrir daño alguno.",
    "Los Ultraentes más poderosos pueden generar campos de energía capaces de alterar la gravedad en su entorno cercano.",
    "Existen Ultraentes que se alimentan exclusivamente de la energía cósmica que fluye a través de los Ultraumbrales.",
    "Los Ultraentes tienen una vida útil extremadamente larga y pueden vivir durante siglos si están en un entorno adecuado.",
    "En algunas culturas del Ultraespacio, se cree que los Ultraentes son los guardianes de los secretos universales.",
    "Los Ultraentes pueden absorber información genética de otras especies a través de sus ataques, lo que les permite evolucionar rápidamente.",
    "Se ha registrado que ciertos Ultraentes tienen la capacidad de teletransportarse a través de los Ultraumbrales, desapareciendo de un lugar y apareciendo en otro en un instante."
];

// Función que muestra un dato curioso aleatorio
function mostrarDatoCurioso() {
    // Generamos un número aleatorio para seleccionar un dato curioso del array
    const indexAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    
    // Mostramos el dato curioso seleccionado en el elemento HTML
    document.getElementById('datoCurioso').textContent = datosCuriosos[indexAleatorio];
}
