

class torta{
  constructor(id, producto, ingrediente, precio){
    this.id = id,
    this.producto = producto,
    this.ingrediente = ingrediente,
    this.precio = precio
  }
  mostrarinfotorta(){
    console.log(`El producto seleccionado ${this.producto} cuyo ingrediente es ${this.ingrediente} y su precio es  ${this.precio}`)
  }
}

const torta1 = new torta(1,"Buttercream", "Vainilla", 3000)

const torta2 = new torta(2,"Red Velvet", "Chocolate", 4500)

const torta3 = new torta(3,"Drip cake", "Chocolate blanco", 3500)

const torta4 = new torta(4,"Buttercream"," Chocolate", 3000)

const torta5 = new torta(5,"Devil's food cake", "Chocolate", 4000)

const torta6 = new torta(6, "Cheesecake", "Maracuyá", 2500)


const opcionespasteleria = []
opcionespasteleria.push(torta1, torta2, torta3, torta4, torta5, torta6) 






function agregartorta(){
let productoingresado = prompt ("Ingresá el nombre del producto")
let ingredienteingresado = prompt("¿De qué sabor te gustaría tu torta?")
let precioingresado = parseInt(prompt("Ingrese el precio"))
const productonuevo = new torta (opcionespasteleria.length+1, productoingresado, ingredienteingresado, precioingresado)
productonuevo.mostrarinfotorta()
console.log(productonuevo)
opcionespasteleria.push(productonuevo)
console.log(opcionespasteleria)

}




 function opcionespasteleriaForEach(array) {
   console.log("Nuestras tortas disponibles son:");
   array.forEach(
     torta => torta.mostrarinfotorta()
       //console.log(torta.id, torta.producto, torta.ingrediente, torta.precio);
     
   )
}

opcionespasteleriaForEach(opcionespasteleria)

function buscarporproducto(array){
  
  let productoingresado = prompt("Ingresá el nombre de la torta que querés buscar")
  let busqueda = array.find(
     (torta) => torta.producto.toUpperCase() === productoingresado.toUpperCase()
  )
  
  if(busqueda === undefined){
     console.log(`La torta ${productoingresado} no está en nuestro catálogo`)
  }else{
     console.log(busqueda)
  }
}

function buscarporingrediente(arr){
  let ingredientebusqueda = prompt("Ingrese el ingrediente que está buscando")
  let busqueda = arr.filter(
     (torta) => torta.ingrediente.toLowerCase() == ingredientebusqueda.toLowerCase()
  )
  if(arr.length == undefined){
     console.log(`Para el ingrediente ${ingredientebusqueda} no hay coincidencias en nuestro catalogo`)
  }else{
     console.log(busqueda);
  }
}
//buscarporingrediente(opcionespasteleria)



function menu(){
   
  let salirMenu = false


 do{
  let opcioningresada = parseInt(prompt(`Ingrese la opción deseada
  1 - Agregar torta
  2 - Borrar torta
  3 - Consultar catálogo
  4 - Buscar por producto
  5 - Buscar por ingrediente
  6 - Buscar por precio
  0 - Salir del menú`))

  switch(opcioningresada){
    case 1:
      agregartorta()

      break
    case 2: 
      console.log("Borrar torta")
      break
    case 3:
      opcionespasteleriaForEach(opcionespasteleria)
      break
    case 4:
      buscarporproducto(opcionespasteleria)
      break
    case 5:
      buscarporingrediente(opcionespasteleria)
      break
    case 0:
      console.log(`Gracias por visitarnos ¡Te esperamos pronto!`)
      salirmenu = true
      break
    default:
      console.log("Opición no válida, ingresá alguna presente en el menú")
      break
    }
  }while(!salirMenu)
}

menu()