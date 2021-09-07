/*
console.log(`helo world`);

console.group(`Cuadrados`);

const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado*4;

console.log(`el perimetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log(`el area del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//codigo del triangulo 

console.group(`triangulos`)

const ladoTriangulo1= 6,
    ladoTriangulo2= 6,
    baseTriangulo=2,
    perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo,
    alturaDeltriangulo =Math.round( Math.sqrt(
        (Math.pow((ladoTriangulo1),2)-Math.pow((baseTriangulo/2),2))
    )),
    areaTriangulo = (baseTriangulo*alturaDeltriangulo)/2;

console.log(`Las medidas del triangulo son: lado1 ${ladoTriangulo1} lado2: ${ladoTriangulo2} y la base: ${baseTriangulo}`);
console.log(`el perimetro del triangulo es: ${perimetroTriangulo}`);
console.log(`la altura del triangulo es: ${alturaDeltriangulo}`);
console.log(`El area del triangulo es: ${alturaDeltriangulo}`);

console.groupEnd();


//Codigo del circulo

console.group(`circulo`);

const radioCirculo = 4,
      diametroCirculo = radioCirculo*2,
      perimetroCirculo = Math.round(diametroCirculo*Math.PI),
      areaCriculo = Math.round((Math.PI*diametroCirculo)/4);


console.log(
    `Las medidas que podenmos obtener del circulo:
    el radio es: ${radioCirculo},
    el diametro es: ${diametroCirculo},
    el perimetro es: ${perimetroCirculo},
    el area es: ${areaCriculo};`
)

console.groupEnd();


console.group(`Funcion cuadrado`)

const calculoCuadrado = (ladoCuadrado) =>{

    console.log(
        `
        El lado del cuadrado es: ${ladoCuadrado}cm,
        El perimetro del cuadrado es: ${ladoCuadrado*4} cm
        El area del cuadrado es: ${ladoCuadrado*ladoCuadrado} cm^2`
    );
}

calculoCuadrado(5);

*/

// cuadrado 

function perimetroCuadrado(valor){
    
  return (valor*4);
}

function calculoAreaCuadrado(valor){
 return (valor*valor);
}

const calcularPerimetro = ()=>{

    const input = document.getElementById("InputCuadrado"),
        value = input.value,
        perimetro = perimetroCuadrado(value);

    alert(perimetro);
}



const areaCuadrado = ()=>{

    const input = document.getElementById("InputCuadrado"),
        value = input.value,
        area = calculoAreaCuadrado(value);
    alert(area);
}


//Triangulo 

 const perimetroTriangulo = (a,b,c) => {
    return a+b+c;
}




function alturaDeltriangulo(lado1,base){
    return (
        Math.sqrt(
         Math.pow(lado1,2)-Math.pow((base/2),2)   
        )
    );
}


function areaTriangulo(a,h){
    return (
        (a*h)/2
    );
}




const calcularPerimetroTriangulo = () => {

    const inputLado1 = document.getElementById("inputLado1"),
        inputLado2 = document.getElementById("inputLado2"),
        inputBase = document.getElementById("Base"),
        a = Number(inputLado1.value),
        b = Number(inputLado2.value),
        c = Number(inputBase.value),
        p = perimetroTriangulo(a,b,c);
     alert(p);
}

const calculoAreaTriangulo = ()=> {

    const inputLado1 = document.getElementById("inputLado1"),
        inputLado2 = document.getElementById("inputLado2"),
        inputBase = document.getElementById("Base"),
        a = Number(inputLado1.value),
        b = Number(inputLado2.value),
        c = Number(inputBase.value),
        h = alturaDeltriangulo(a, c),
        area = areaTriangulo(a,h);
        alert(area.toFixed(2));
}

const muestraLaAlturaDelTriangulo = () => {
    const inputLado1 = document.getElementById("inputLado1"),
        inputLado2 = document.getElementById("inputLado2"),
        inputBase = document.getElementById("Base"),
        a = Number(inputLado1.value),
        b = Number(inputLado2.value),
        c = Number(inputBase.value),
        h = alturaDeltriangulo(a, c);
        alert(h.toFixed(2));
}




//  Circulo
const Pi = Math.PI;
function perimetroCirculo(valor){

    return (Pi*2*valor);

}

function areaCriculo(valor){
    
    return (Pi*Math.pow(valor,2));
}

const calcularPerimetroCirculo = () => {
    const input = document.getElementById("InputCirculo"),
        value = input.value,
        p = perimetroCirculo(value);
        alert(p);
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("InputCirculo"),
        value = input.value,
        a = areaCriculo(value);

        alert(a);
}