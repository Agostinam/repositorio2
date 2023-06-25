
class torta{
  constructor(id, producto, ingrediente, precio){
    this.id = id,
    this.producto = producto,
    this.ingrediente = ingrediente,
    this.precio = precio
  }
  mostrarinfotorta(){
    console.log(`El nombre de la torta es ${this.producto} cuyo sabor es ${this.ingrediente} y su precio es  ${this.precio}`)
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

function borrartorta () {
  let productoaborrar = prompt("Ingrese el nombre de la torta que desea borrar:");
  
  const indice = opcionespasteleria.findIndex(torta => torta.producto.toUpperCase() === productoaborrar.toUpperCase());
  
  if (indice == -1) {
    opcionespasteleria.splice(indice, 1);
    console.log(`La torta "${productoaborrar}" ha sido eliminada del catálogo.`);
  } else {
    console.log(`La torta "${productoaborrar}" no se encuentra en nuestro catálogo.`);
  }
}


 function opcionespasteleriaForEach(array) {
   console.log("Nuestras tortas disponibles son:");
   array.forEach(
     torta => torta.mostrarinfotorta()
       //console.log(torta.id, torta.producto, torta.ingrediente, torta.precio);
     
   )
}



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

function buscarporingrediente(arr) {
  let ingredientebusqueda = prompt("Ingrese el sabor que está buscando");
  let busqueda = arr.filter(
    (torta) => torta.ingrediente.toLowerCase() === ingredientebusqueda.toLowerCase()
  );
  
  if (busqueda.length === 0) {
    console.log(`No hay tortas en nuestro catálogo con el sabor "${ingredientebusqueda}".`);
  } else {
    console.log("Tortas encontradas con el sabor especificado:");
    busqueda.forEach(torta => torta.mostrarinfotorta());
  }
}

//buscarporingrediente(opcionespasteleria)

function buscarporprecio(array) {
  let precioingresado = prompt("Ingrese el precio de la torta que estás buscando:");
  
  if (isNaN(precioingresado)) {
    alert("El valor ingresado no es un número válido. Por favor, ingrese un valor numérico.");
    return;
  }
  
  let precio = parseInt(precioingresado);
  
  let busqueda = array.filter(torta => torta.precio === precio);
  
  if (busqueda.length === 0) {
    console.log(`No hay tortas en nuestro catálogo con el precio de ${precio}.`);
  } else {
    console.log("Tortas encontradas con el precio especificado:");
    busqueda.forEach(torta => torta.mostrarinfotorta());
  }
}


function menu(){
   
  let salirmenu = false


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
      borrartorta()
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
    case 6:
      buscarporprecio(opcionespasteleria)
      break
    case 0:
      console.log(`Gracias por visitarnos ¡Te esperamos pronto!`)
      salirmenu = true
      break
    default:
      console.log("Opición no válida, ingresá alguna presente en el menú")
      break
    }
  }while(!salirmenu)
}

menu()
