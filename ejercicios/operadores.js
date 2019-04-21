/*
 *  1, 2, 3... GO!
 */

// OPERATORS

let num = 2;

num = +num;

let skates = "2";
let longBoards = "4";

let sum = +skates + +longBoards;

let ab, cd, ff;

ab = cd = ff = 2 + 3;

let num1 = 2;
let num2 = 2;

let num3 = 2 - (num1 = num2 + 1);

// ---

// let valor1 = ;

// if (valor1 % 2 == 0) {
//   console.log("Hola");
// }
// 2 ** 2 // 4
// 2 ** 3 // 8
// 2 ** 4 // 16  (2 * 2 * 2 * 2)

4 ** (1 / 2); // raiz cuadrada
Math.sqrt(4); //

let contador = 1;

// ++contador;

// let newContador = contador--;

// contador++;

// let newContador2 = ++contador; // 2

contador++;

console.log(contador);

// let loquesea = ++contador;

// console.log(`contador es -> ${contador} y loquesea es ->  ${loquesea}`);
// console.log(contador);
// console.log(loquesea);

// contador += 1;
// contador = contador + 1;

// contador--;

// contador -= 1;

// --contador;

let cont = 1;

console.log(3 * ++cont); // 6
console.log(3 * cont++); // 3

let numero1 = 2;

// numero1 /= 1; // 2

let res = 2;
res *= 2 + 1;

console.log(res); // 6, 5

// ,
let z = 0;
let loqs = ((z = 1 + 1), 2 + 2, 3 + 3); // 24, (2,4), 2 4, 6
console.log(z);

// for (a = 3, b = 5, c = 10 * 8; a < 5; a++) {}

// COMPARACIONES

if (3 <= 6) {
} // < =

if ("a" == "b") {
}

console.log("2" > 1); // true
console.log("01" == 1); //true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(false === false);

console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// prompt console.log, alert, confirm

let isAdmin = confirm("Eres admin?");

let age = +prompt("Cuantos anhos tienes?", 10);

if (isFinite(age)) {
}

// CONDICIONES
if (2 == 2) {
  // 1
  let mes = "Hola";
  if (true) {
    //1.1
    mes = "adios";
    console.log(mes);
  }
  console.log(mes);
} else if (3 == 1) {
  // 2
} else {
  // 3
}

true ? alert("esto es true") : alert("esto es false");

let user = {
  role: "Admin"
};

let isAdmin = user.role === "Admin" ? "Admin" : "User";

// if (3 == 3) {
//   // algo
// } else {
//   // algo
// }
