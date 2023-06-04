

// Hola! El objetivo del siguiente código es que tanto el usuario nuevo como el viejo pueda interactuar y aprovechar los beneficios de nuestra web con el canje de puntos.
//Como se puede ver muy bien, dada una determinada cantidad de puntos, el usuario adquiere descuentos extras, además de obtener el descuento en el valor del producto.




let preguntacliente = prompt ("¿Sos cliente nuevo?")
console.log(preguntacliente)

if(preguntacliente == "si"){
    console.log ("!No esperes más y registrate!")
}
if (preguntacliente == "no"){
    console.log ("¡Bienvenido, te extrañamos!")
}

function validarcant(num){
    while(isNaN(num)){
    num = parseInt (prompt("ATENCIÓN INGRESE NÚMERO: Ingresa nuevamente cuantos productos te gustaría comprar"))
}

    return num
}


let canttortas = parseInt(prompt("Ingresa cuantos productos te gustaría comprar"))

while(isNaN(canttortas)){
    canttortas = parseInt(prompt("ATENCIÓN INGRESE UN NÚMERO: Ingresa cuantos productos te gustaría comprar"))
}

let canttortasvalidadas = validarcant (canttortas)
validarcant(canttortas)

let total  = 0
for (let i = 1; i <= canttortas; i++){
    let torta = parseInt(prompt("Ingresa el valor de tus puntos acumulados N°"+ i))
    torta = validarcant (torta)
    if(torta >=100 && torta <=2000){
        console.log(" Los puntos ingresados no deben ser menores a 99")
        total = total + torta
        console.log(`El total parcial es ${total}`)
    }else{
        console.log("La cantidad de puntos no es válida")
        while(torta < 100 || torta >2000){
        torta = parseInt(prompt("ATENCIÓN INGRESA UN MÍN DE 100 PUNTOS Y UN MÁX DE 2000: el total parcial es N°"+ i))
        }
        total = total + torta
        console.log(`el total parcial de puntos es ${total}`)
    }
    validarcant(torta)
    
    console.log(`El total parcial de puntos acumulados es ${total}`)
}
console.log(`El total de puntos acumulados es ${total}`)
let promedio = total / canttortas
console.log(`El total de pesos acumulados es  ${promedio.toFixed(2)}. Los mismos se descontarán de tu compra final`)
 

if (promedio < 200) {
    console.log("Tenés un 10% de descuento extra")
} else if (promedio >= 200 && promedio < 500) {
    console.log("Tenés un 15% de descuento extra")
} else if (promedio >= 500 && promedio < 700) {
    console.log("Tenés un 20% de descuento extra")
} else if (promedio == 1000) {
    console.log("Tenés un 25% de descuento extra")
}

