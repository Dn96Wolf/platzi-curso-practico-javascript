
const precioOriginal = 100,
    descuento = 15;


function calcularPrecioConDescuento(precio,descuento){
 
    const porcentajePrecioConDescuento = 100 - descuento,
        precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

        return precioConDescuento;

}




function onClikButtonPriceDiscount() {

    const input1 = document.getElementById("InputPrecio"),
        a = input1.value,
        input2 = document.getElementById("InputDiscount"),
        b = input2.value,
        
        d = calcularPrecioConDescuento(a,b);


    
        document.getElementById("result").innerHTML = d;

}






const aplicarDescuento = () =>{

    const x = document.getElementById("InputProducto"),
        xvalor = x.value;

        console.log(xvalor)

    switch(xvalor){

        case "Reloj":
        
        let precioRelog = 300,
            descuentoReloj = 10;

        document.getElementById("precioProducto").innerHTML = `El precio del relog es: $ ${precioRelog}`
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${descuentoReloj}%`

        break;

        case "Pulsera":



        break;

        case "Playera":


        break;

        case "Camisa":



        break;

        case "Pantalon":


        break;

        default:

        document.getElementById("aviso");
    }
}
