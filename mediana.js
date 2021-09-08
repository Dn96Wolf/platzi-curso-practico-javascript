

let x = [3,1,5,4,5];


const ordenarDatos = () => {

    for( let i = 0; i < x.length; i++ ){

        if(x[i] < x[i++]){
    
          return (x);
    
        }else{
    
           return (x.sort(function(a, b){return a - b})); 
        }
    }
}


const numeroPar = (numero) => {

        if(numero % 2 === 0 ){
            return true;

        }else{


            return false;
        }
}

const calcularMediaAritmetica = (lista) =>{

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;

    return(promedioLista);
}




const calcularLaMedia = () => {

    const lista = ordenarDatos();

    const mitadLista = parseInt(lista.length/2);

    console.log(lista.length);

    if(numeroPar(lista.length)){

        const elemento1= lista[mitadLista-1],
            elemento2 =lista[mitadLista],
            promeidoElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]),
            mediana = promeidoElemento1y2;
            console.log(`la lista es: ${lista}, es par y por lo tanto la mediana es: ${mediana}`);

    }else{

        mediana = lista[mitadLista];
        console.log(`la lista es ${lista} inpar y por lo tanto la mediana es: ${mediana}`);
    }
}




//moda


const listOne = [1,2,3,1,2,3,1,4,4,3,3,2];

const listTwo = [3,3,3,2,2,2,2,1,1,1,1,1,6,6,6,6]


//contar cuantas vaces se repite


//creamos un objeto al que se iran asignando los valores del array..

const calculoModa = ( arreglo = []) => {

    const listOneCount = {};

        arreglo.map(
            //declaramos una funcion que agrege los elementos respecto de las veces que aparecen 
            function(elemento){
                //si el elemento se repite
                if(listOneCount[elemento]){
                    //añadimos al objeto las veces que se repite ese elemento 
                    listOneCount[elemento] += 1;
                }else{
                // si no se repite aparece solo 1 vez.
                listOneCount[elemento] = 1;
                    
                }
            }
        );

        // declaramos un arreglo donde convertimos la lista de elementos de un objeto en un array ordenado 

        const listOneArray = Object.entries(listOneCount).sort(
            function (a,b){
            return  a[1] - b[1];
            }
        );

    const moda = listOneArray[listOneArray.length-1];

    return moda;
}






