// capturar y almacenar valores dentro de variables

let nombreUsuario = prompt('¿Cuál es tu nombre?');
let edadUsuario = prompt('¿Cuántos años tienes?');
let lenguajeUsuario = prompt('¿Qué lenguaje de programación estás estudiando?');
let opcion = 0;

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y ya estás aprendiendo ${lenguajeUsuario}!`);

while(opcion < 1 || opcion > 2) {
    opcion = prompt(`¿Te gusta estudiar ${lenguajeUsuario}? Responde con el número 1 para SÍ o 2 para NO.`);

    if (opcion == 1){
        alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
    } else if (opcion == 2) {
        alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
    }
    
} 


