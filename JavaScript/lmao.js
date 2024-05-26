// let topping = "Oreo"
// let precio = "0"
// let preciofinal = "0"
// let helado = 2;

// if (topping == "Oreo")
//     {
//         precio = "10"
//     }
//     else if (topping == "Kitkat")
//         {
//             precio = "15"
//         }
//     else if (topping == "Kinder")
//         {
//             precio = "25"
//         }
//         else
//         {
//             console.log("No tenemos ese topping")
//         }
// preciofinal = helado + precio
// console.log("El helado cuesta: " + preciofinal)

// let pedido = "carne"
// switch(pedido)
// {
//     case 'carne' :
//         console.log("Dar vino tinto")
//         break;
//     case 'pescado' :
//         console.log("Dar vino blanco")
//         break;
//     case 'verduras' :
//         console.log("Dar agua")
//         break;
//     default :
//     console.log("Elija carne, pescado o verduras")
// }

//  let Juegos = ["Monopoly", "Uno", "HDP"];
//  console.log(Juegos)
//  let nuevoJuego = Juegos.push("Estanciero")
//  let nuevoJuego2 = Juegos.push("Carrera de mentes")
//  console.log(Juegos[0])
//  console.log(Juegos[1])
//  console.log(Juegos[2])
//  console.log("cantidad de juegos: ", Juegos.length)
//  for (let i = 0; i < Juegos.length; i++) {
//      const element = Juegos[i];
//  }

//  let contar = 0;
//  while (contar < 11)
//     {
//         console.log("El numero es menor a 11")
//         contar = contar + 1
//     }

let nombre = prompt ("Ingresa tu nombre!")
function saludo(){
    if (nombre)
        {
            alert('Bienvenido ' +nombre)
        }
        else
        {
            alert('Debe ingresar un nombre!')
        }
}

saludo()