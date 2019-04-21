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

let user2 = prompt("Cual es tu nombre")
    .trim()
    .toLowerCase();

if (user2 === "admin") {
    alert("hello admin");
} else if (user2 === "user") {
    alert("hello user");
} else {
    alert("i dont know you");
}

if (user2 === "admin" || user2 === "user") {
    alert(`hello ${user2}`);
} else {
    alert("I dont know you");
}

let mensajeFinal =
    user2 === "admin" ?
    "Hello master" :
    user2 === "user" ?
    "hello user" :
    "i dont know you";

alert(mensajeFinal);

//** un programa que te pida tu nombre por prompt y lance una alerta si el nombre
es "Admin" - > "Hello master"
es "User" - > "Hello User"
es otra cosa - > "I don't know you"

if -
else
    ternaria

SI NUMERO ESTA ENTRE 18 Y 28 INCLUIDOS participantType = "Junior"
SI ES MAYOR...participantType = "Senior"
SI NO...participantType = null
SI ES Junior o senior, preguntar cuantos anhos lleva programando
y mostrarlo(" Soy un Junior/Senior y llevo X anhos programando ") *
    /
let num = +prompt("Cuantos anhos tienes?", 19);
let participantType = "874658433";
let yearsProgramming = 0;

let isNumber = isFinite(num);

if (!isNumber) return "Error";

if (isNumber) {
    if (num >= 18 && num <= 28) {
        participantType = "Junior";
        yearsProgramming = +prompt("Cuantos anhos llevas programando", 6);
    } else if (num > 28) {
        participantType = "Senior";
        yearsProgramming = +prompt("Cuantos anhos llevas programando");
    } else {
        participantType = null;
    }

    if (participantType) {
        console.log(
            `Soy un ${participantType} y llevo ${yearsProgramming} anhos programando`
        );
    } else {
        console.log("ERROR EL TYPE ES NULO");
    }
}

// Hacer un programa que te pida un numero1 y luego un numero2
// luego que te pida la operacion que quieres hacer (suma, resta, mult o division)
// en base a lo que seleccione hacer la operacion

let numero1 = +prompt("Dame un numero 1");
let numero2 = +prompt("Dame un numero 2");
let op = "";

num1IsValid = isFinite(numero1);
num2IsValid = isFinite(numero2);

if (num1IsValid && num2IsValid) {
    op = prompt("Dime que operacion quieres hacer (sum, subs, mul, div)");

    if (op === "sum") {
        console.log(`${numero1 + numero2}`);
    } else if (op === "subs") {
        console.log(`${numero1 - numero2}`);
    } else if (op === "mul") {
        console.log(`${numero1 * numero2}`);
    } else if (op === "div") {
        console.log(`${numero1 / numero2}`);
    } else {
        console.log("La op es invalida");
    }
} else {
    console.log("Los numeros que has introducido no son validos");
}