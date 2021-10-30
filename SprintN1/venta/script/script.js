document.getElementById("parte2").style.display = "none";
let boton;
boton = document.getElementById("button");
document.getElementById("parte2").style.display = "none";
boton.addEventListener('click', () => {
    document.getElementById("parte2").style.display = "block";
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let nombre = document.getElementById("nombre").value;
    let valor = parseInt(document.getElementById("valor").value = (`${820000 * cantidad}$`));
    let descuento = document.getElementById("descuento");
    let total = document.getElementById("total");
    let porcentaje = document.getElementById("porcentaje");
    if ((valor > 0) && (valor <= 1640000)) {
        descuento= parseInt(document.getElementById("descuento").value = (`No hay`));
        total= parseInt(document.getElementById("total").value= (valor+"$"));
        porcentaje.innerHTML= (`Tu descuento es del 0% querid@ ${nombre}`)
    }
    else if ((valor>1640000)&&(valor<=3280000)){
        descuento= parseInt(document.getElementById("descuento").value = (`${((valor / 100) * 15)}$`));
        total= parseInt(document.getElementById("total").value= (`${valor - descuento}$`));
        porcentaje.innerHTML= (`Tu descuento es del 15% querid@ ${nombre}`)
    }
    else if ((valor>3280000)&&(valor<=6560000)){
        descuento= parseInt(document.getElementById("descuento").value = (`${((valor / 100) * 25)}$`));
        total= parseInt(document.getElementById("total").value= (`${valor - descuento}$`));
        porcentaje.innerHTML= (`Tu descuento es del 25% querid@ ${nombre}`)
    }
    else if ((valor>6560000)&&(valor<=9840000)){
        descuento= parseInt(document.getElementById("descuento").value = (`${((valor / 100) * 35)}$`));
        total= parseInt(document.getElementById("total").value= (`${valor - descuento}$`));
        porcentaje.innerHTML= (`Tu descuento es del 35% querid@ ${nombre}`)
    }
    else if (valor>9840000){
        descuento= parseInt(document.getElementById("descuento").value = (`No tienes descuento`));
        total= parseInt(document.getElementById("total").value= (valor+"$"));
        porcentaje.innerHTML= (`Tu descuento es del 0% querid@ ${nombre}`)
    }

})