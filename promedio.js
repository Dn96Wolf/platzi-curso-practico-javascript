/*
const lista1 = [
    100,
    200,
    300,
    500,
];


let sumaLista1 = 0;

for(let i =0; i < lista1.length; i++){

    sumaLista1 = sumaLista1 + lista1[i];
}   


const promedioLista1 = sumaLista1/lista1.length;


const calcularMediaAritmetica = (lista)=>{

    /*let sumaLista = 0;

    for(let i =0; i < lista.length; i++){
    
        sumaLista = sumaLista + lista[i];
    }   */
/*
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );


    const promedioLista = sumaLista/lista.length;

    return(promedioLista);
}

/*codigo de la mediana 

const lista2 = [
    100,
    200,
    300,
    150,
];

const mitadLista2 = parseInt(lista2.length/2);

function esPar(numero){
    if(numero % 2 === 0 ){
        return true;

    }else{
        return false;
    }
}


let mediana;


if(esPar(lista2.length)){

    const elemento1= lista2[mitadLista2-1],
        elemento2 =lista2[mitadLista2],
        promeidoElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]),
        mediana = promeidoElemento1y2;

    console.log(elemento1, elemento2) 
    console.log(promeidoElemento1y2);
    console.log(mediana);

}else{
    mediana = lista2[mitadLista2];

}

codigo para una sola funcion */



let x = [5,2,3,4,5,6,7,8];

let nuevoX = [];


for( let i = 0; i < x.length; i++ ){


    if(x[i] > x[i++]){

      let a = nuevoX.push(x[i++]);
      
      console.log(a);

    }else{

        //console.log(x);
    }


}



const calcularLaMedia = () => {

    const lista = document.getElementById("InputDatos"),
        xlista = lista.length;

    function esPar(numero){
        if(numero % 2 === 0 ){
            return true;
    
        }else{
            return false;
        }
    }

    const mitadLista = parseInt(lista.length/2);

    if(esPar(xlista)){

        const elemento1= lista[mitadLista-1],
            elemento2 =lista[mitadLista],
            promeidoElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]),
            mediana = promeidoElemento1y2;
    
        console.log(elemento1, elemento2);
        console.log(promeidoElemento1y2);
        console.log(mediana);
    
    }else{
        mediana = lista[mitadLista];
    
    }

    console.log(mediana);

}