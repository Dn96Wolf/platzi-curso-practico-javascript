
const precioOriginal = 100,
    descuento = 15;


const calcularPrecioConDescuento = (precio,descuento) => {
 
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
        console.log(x);
        console.log( typeof xvalor);

    switch(xvalor){

        case "Relog":
        
        let precioRelog = 300,
            descuentoRelog = 10;

        document.getElementById("precioProducto").innerHTML = `El precio del Relog es: $ ${precioRelog}`;
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${descuentoRelog}%`;
        document.getElementById("precioFinal").innerHTML = `El precio con el descuento es de: $${calcularPrecioConDescuento(precioRelog,descuentoRelog)}`;
        document.getElementById("imagenProducto").src = "./smartwatch.png";
        break;

        case "Pulsera":

        
        let precioPulsera = 1200,
            descuentoPulsera = 15;

        document.getElementById("precioProducto").innerHTML = `El precio del producto es: $ ${precioPulsera}`;
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${descuentoPulsera}%`;
        document.getElementById("precioFinal").innerHTML = `El precio con el descuento es de: $${calcularPrecioConDescuento(precioPulsera,descuentoPulsera)}`;


        break;

        case "Playera":

            let pPlayera = 399,
            dPlayera = 15;

        document.getElementById("precioProducto").innerHTML = `El precio del producto es: $ ${pPlayera}`;
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${dPlayera}%`;
        document.getElementById("precioFinal").innerHTML = `El precio con el descuento es de: $${calcularPrecioConDescuento(pPlayera,dPlayera)}`;


        break;

        case "Camisa":

        let pCamisa = 499,
            dCamisa = 20;

        document.getElementById("precioProducto").innerHTML = `El precio del producto es: $ ${pCamisa}`;
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${dCamisa}%`;
        document.getElementById("precioFinal").innerHTML = `El precio con el descuento es de: $${calcularPrecioConDescuento(pCamisa,dCamisa)}`;


        break;

        case "Pantalon":

            let pPantalon = 499,
            dPantalon = 0;

        document.getElementById("precioProducto").innerHTML = `El precio del producto es: $ ${pPantalon}`;
        document.getElementById ("descuentoProducto").innerHTML = `El producto tiene un descuento de: ${dPantalon}%`;
        document.getElementById("precioFinal").innerHTML = `El precio con el descuento es de: $ ${calcularPrecioConDescuento(pPantalon,dPantalon)}`;

        break;

        default:

        document.getElementById("aviso");
    }
}
