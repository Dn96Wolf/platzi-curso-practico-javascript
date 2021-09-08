// funciones helper

 const esPar = (numerito) => {
 
    return(numerito % 2 === 0);
}

const calcularMediaAritmetica = (lista)=>{

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;

    return promedioLista ;
}


//Calculadora de medianas
const madianaSalarios = (lista) => {

    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1],
            personitaMitad2 =lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
    return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}



//Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

//para ordenar los elemntos
const salariosCoLSorted = salariosCol.sort(
    function(a,b){
        return a-b;
    }
);


const medianaGeneralCol = madianaSalarios(salariosCoLSorted);

//Mediana del top 10%
const spliceStart = (salariosCoLSorted.length*90)/100,
    spliceCount = salariosCoLSorted.length - spliceStart;

const salarios10ColTop = salariosCoLSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = madianaSalarios(salarios10ColTop);


console.log(
   {
       medianaGeneralCol,
       medianaTop10Col
   }
);