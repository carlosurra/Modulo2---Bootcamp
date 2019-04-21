/*
 *  1, 2, 3... GO!
 */

// CONDICIONES
// if (2 == 2) {
//   // 1
//   let mes = "Hola";
//   if (true) {
//     //1.1
//     mes = "adios";
//     console.log(mes);
//   }
//   console.log(mes);
// } else if (3 == 1) {
//   // 2
// } else {
//   // 3
// }

// true ? alert("esto es true") : alert("esto es false");

// let user = {
//   role: "Admin"
// };

// let isAdmin = user.role === "Admin" ? "Admin" : "User";

// let user2 = prompt("Cual es tu nombre")
//   .trim()
//   .toLowerCase();

// if (user2 === "admin") {
//   alert("hello admin");
// } else if (user2 === "user") {
//   alert("hello user");
// } else {
//   alert("i dont know you");
// }

// if (user2 === "admin" || user2 === "user") {
//   alert(`hello ${user2}`);
// } else {
//   alert("I dont know you");
// }

// let mensajeFinal =
//   user2 === "admin"
//     ? "Hello master"
//     : user2 === "user"
//     ? "hello user"
//     : "i dont know you";

// alert(mensajeFinal);

// un programa que te pida tu nombre por prompt y lance una alerta si el nombre
// es "Admin" -> "Hello master"
// es "User" -> "Hello User"
// es otra cosa -> "I don't know you"

// if - else
// ternaria

// SI NUMERO ESTA ENTRE 18 Y 28 INCLUIDOS participantType = "Junior"
// SI ES MAYOR ...  participantType = "Senior"
// SI NO ... participantType = null
// SI ES Junior o senior, preguntar cuantos anhos lleva programando
// y mostrarlo (" Soy un Junior/Senior y llevo X anhos programando ")

// let num = +prompt("Cuantos anhos tienes?", 19);
// let participantType = "874658433";
// let yearsProgramming = 0;

// let isNumber = isFinite(num);

// if (!isNumber) return "Error";

// if (isNumber) {
//   if (num >= 18 && num <= 28) {
//     participantType = "Junior";
//     yearsProgramming = +prompt("Cuantos anhos llevas programando", 6);
//   } else if (num > 28) {
//     participantType = "Senior";
//     yearsProgramming = +prompt("Cuantos anhos llevas programando");
//   } else {
//     participantType = null;
//   }

//   if (participantType) {
//     console.log(
//       `Soy un ${participantType} y llevo ${yearsProgramming} anhos programando`
//     );
//   } else {
//     console.log("ERROR EL TYPE ES NULO");
//   }
// }

// Hacer un programa que te pida un numero1 y luego un numero2
// luego que te pida la operacion que quieres hacer (suma, resta, mult o division)
// en base a lo que seleccione hacer la operacion

// let numero1 = +prompt("Dame un numero 1");
// let numero2 = +prompt("Dame un numero 2");
// let op = "";

// num1IsValid = isFinite(numero1);
// num2IsValid = isFinite(numero2);

// if (num1IsValid && num2IsValid) {
//   op = prompt("Dime que operacion quieres hacer (sum, subs, mul, div)");

//   if (op === "sum") {
//     console.log(`${numero1 + numero2}`);
//   } else if (op === "subs") {
//     console.log(`${numero1 - numero2}`);
//   } else if (op === "mul") {
//     console.log(`${numero1 * numero2}`);
//   } else if (op === "div") {
//     console.log(`${numero1 / numero2}`);
//   } else {
//     console.log("La op es invalida");
//   }
// } else {
//   console.log("Los numeros que has introducido no son validos");
// }

// OPERADORES LOGICOS

// OR || -> con que de un true da true
// alert(true || true); // true
// alert(true || false); // true
// alert(false || true); // true
// alert(false || false || false); // false

// AND && -> con que de un false da false
// alert(true && true); // true
// alert(true && false); // false
// alert(false && true); // false
// alert(false && false); // false

// let isNumber = isFinite(3) && isFinite(NaN);

// let num = 0;

// if ((num >= 10 && num <= 12) || (num >= 20 && num <= 22)) {
// }

// // let whatever = 1;
// false && alert("wtf!"); //

// if (false) {
//   alert("loque sea");
// }

// // ! NOT

// let isTall = true;
// isTall = !isTall;

// let isRed = 0;
// isRed = !isRed;

// alert(!!"hola"); // true
// alert(Boolean("Hola")); // true

// BUCLES

// let flag = false;
// while (true) {
//   console.log("Hola");
//   flag = true;
//   if (flag == true) {
//     break;
//   }
// }

// let cont = 0;
// while (cont <= 3) {
//   console.log(cont);
//   cont++;
// }

// let cont2 = 1;
// while (true) {
//   console.log(cont2);
//   cont2++;
//   if (cont2 == 3) {
//     break;
//   }
// }

// let cont3 = 5;
// while (cont3) {
//   console.log(cont3);
//   cont3--;
//   // if (cont3 == 0) break;
// }

// do {
//   console.log("Hola");
// } while (false);

// let limit = 0;

// do {
//   console.log(limit);
//   limit++;
// } while (limit < 5);

// let array = [
//   { name: "Pepe", isAdmin: true },
//   { name: "Julia", isAdmin: false },
//   { name: "Sancho", isAdmin: true },
//   { name: "Paco", isAdmin: false },
//   { name: "Abel", isAdmin: true }
// ];

// console.log("La length es -> ", array.length);

// for (let i = 0; i < array.length; i++) {
// //   if (array[i].isAdmin) {
// //     console.log(array[i].name);
// //   }
// // }

// // HACER CON IFS
// // for (let i = 0; i < 2; i++) {
// //   console.log(i);
// // }

// // let x = 0;
// // if (x < 2) {
// //   console.log(x);
// //   x++;
// // }

// // if (x < 2) {
// //   console.log(x);
// //   x++;
// // }

// // let index = 0
// // for (; index < array; index++) {
// //   const element = array[index];
// //   return
// // }

// // for( ; ; ){

// // }

// let array = [
//     { name: "Pepe", isAdmin: true },
//     { name: "Julia", isAdmin: false },
//     { name: "Sancho", isAdmin: true },
//     { name: "Paco", isAdmin: false },
//     { name: "Abel", isAdmin: true }
// ];

// for (let i = 0; i < array.length; i++) {
//     // cambiarle el nombre a los users que no sean admins a
//     // "default" y saltarse a los admins usando continue

//     if (array[i].isAdmin) continue;
//     array[i].name = "default";
// }

// for (let i = 0; i < array.length; i++) {
//     // cambiarle el nombre a los users que no sean admins a
//     // "default" y saltarse a los admins usando continue

//     if (array[i].isAdmin == false) {
//         array[i].name = "default";
//     }
// }

// // Vamos a recorrer un array de un 3x3 que en cada
// // cuadrado (pensando en como si fuera un tablero de hundir la flota)
// // pedimos un valor  (1 -> metemos barco)
// // Si no ponemos nada (EN EL PROMPT) en la casilla las iteraciones se paran

// // Pista

// pepe: for (let index = 0; index < array.length; index++) {
//     for (let index2 = 0; index2 < array2.length; index2++) {
//         if (condition) {
//             break pepe;
//         }
//     }
// }