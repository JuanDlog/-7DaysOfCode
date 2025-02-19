let areaDesarrollo =  0;
let especializacion = '';
let totalTecnologias = [];

while(areaDesarrollo < 1 || areaDesarrollo > 2) { 

areaDesarrollo = prompt('En que area de desarrollo te quieres especializar? Responde con el número 1 para Back-End o 2 para Front-End.');

if(areaDesarrollo == 1){
    
    especializacion = 'Back-End';

    prompt('Quieres aprender C# o Java? Responde con el número 1 para C# o 2 para Java.');
    
    seguirEspecializacion();
    tecnologias();

} else if(areaDesarrollo == 2) {
        
    especializacion = 'Front-End';

    prompt('Quieres aprender React o Vue? Responde con el número 1 para React o 2 para Vue.');
    
    seguirEspecializacion();
    tecnologias();

}



function seguirEspecializacion(){
 
 let especializacionElegida = 0;

 while(especializacionElegida < 1 || especializacionElegida > 2){
 especializacionElegida = prompt(`Luego de ser Desarrollador ${especializacion}, Quieres seguir especializandote es esa area o quieres desarrollarte para convertirte en un Fullstack?, Responde con el número 1 para Seguir en ${especializacion} o 2 para Convertime en Fullstack. `);
 
 if(especializacionElegida == 1) {
    alert('Seguir especializandonos en nuestra area nos volvera cada vez mas expertos, Sigue asi!')
 
} else if(especializacionElegida == 2){
    alert('Especializandonos en Back-End y Front-End nos vuelve un gran Fullstack, las empresas lo buscan mucho, Sigue asi!')
}
}
}

function tecnologias(){
 let numeroTecnologias = 0;

 while(numeroTecnologias < 1){
    numeroTecnologias = prompt('Cuantas tecnologías quieres aprender?');
 }

 for(i = 0; i <= numeroTecnologias; i++){
    
    totalTecnologias.push(prompt(`Escribe la Tecnologia #${i} que quieres aprender:`));
    
    
 }

}

}
