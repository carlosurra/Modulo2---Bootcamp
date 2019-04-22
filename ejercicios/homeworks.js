/*
 *  1, 2, 3... GO!
 */

// let key = "pepe";
// switch (key){
//     case "pepe":
//     console.log("hola pepe");
//     break;



// let age = 10;
// prompt("¿cuantos años tienes?")

// switch (age) {
//     case age < 18:
//         console.log("eres un niño");
//         break;
//     case age > 18:
//         console.log("puedes votar");
//         break;

// }

// switch (browser) {
//     case "Vivaldi":
//         console.log("el mejor del mundo")
//         break;
//     case "IE":
//         console.log("ewwwww");
//         break;

// }

// funciones

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// una funcion que me retorne true si soy mayor de edad o 
// retorne una alerta de confirmacion de si mis padres me dieron permiso


// forma1
// function checkAge(age) {
//     if (userAge >= 18) return true;
//     return confirm("acceder con el permiso de tus padres");
// }
// // forma2
// if (age >= 18) {
//     return true;
// }else {
//     confirm("acceder con permiso de tus padres ");
// }
// // forma3
// return age >= 18 ? true : confirm("acceder con permiso de tus padres");

//  forma4
//     return age >= 18 || confirm("acceder con permiso de tus padres");
// }

// checkAge(17);

// crear una funcion que acepte dos parametros  X y N y devuelva el resultado de x elevado a n

// function elevate(x, n) {
//     let res = x;
//     for (let i = 1; i < n; i++) {
//         res *= x;

//     }
//     return res;

// }

// let result = elevate(5, 10);
// console.log(result);

// una funcion que calcule el cambio de moneda de euro a dolares. recibe euros devuelve dolares.

// function change(euro) {
//     if (!isFinite(euro)) return false;
//     return euro * 1.5;
// }


// console.log(change(7));
// console.log(change("jfjdjd"));
// console.log(change(27));

// una funcion que reciba un nombre de una persona de cualquier forma tipo " rUBEN" y te lo devuelva con buen formato "Ruben"

// function correctName(name) {
//     name = name.toLowerCase().trim();  
//     name = name.charAt(0).toUpperCase() + name.slice(1); 
//     return name
// }
// console.log(correctName("   aRtuRo ")) // Carlos

// una funcion que recibe un string cualquiera y te dice si es palindromo o no se lee igual de izquierda a derecha que de derecha a izquierda

// function checkAge(age, accept, decline) {
//     if (age <= 18) {
//         decline();
//     } else {
//         accept();
//     }
// }

// function accept() {
//     console.log("todo ok");
// }

// function decline() {
//     cobjectonsole.log("no puedes");
// }

// checkAge(16, accept, decline)

// const sum = function(num1, num2){
//     return num1 + num2;
// };

// const sum = (num1, num2) => num1 + num2;

// const cube = num1 => num1 **3

// const cube = num1 => {
//     debugger;
//     let x = 20;
//     let y = 60;
//     debugger;
//     x = 50;
//     let res = x + y;
//     console.log("lo que sea");
//     return num1 ** 3;
// }
// cube(3);

// objeto
// let obj = {
//         name: "Alex"
//     }
// propiedades pueden ser string o symbol

// let coche = {
//     puertas: 4,
//     ventanas: 6,
//     ruedas: 4,
//     test: "ok",
// }

// function deletetest(obj) {

// }
// for (let test in coche) {
//     delete coche.test
// }
// console.log(coche);


// function deleteProperty(obj, propiedadABorrar) {
//     for (const key in obj) {
//         if (key === propiedadAABorrar) delete obj.key;

//     }
// }
// let propiedadABorrar = "test";
// deleteProperty(x, propiedadABOrrar);
// console.log(x);

// escribir una funcoin que me de el total de las manzanas
// let apples = {
//     red: 10,
//     green: 23,
//     golden: 72,
//     yellow: 2,
// }

// function getTotalApples(params) {
//     let total = 0;
//     for (let key in params) {
//         total += params[key];
//     }
//     return total;
// }
// let res = getTotalApples(apples);
// console.log(res);

// crear una funcion que multiplique por 3 todas las propiedades numericas del objeto

// let person = {
//     kg: 80,
//     size: 180,
//     name: "juan",
// };

// function tripleNum(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 3;
//         }
//     }
// }
// tripleNum(person);
// console.log(person); chequear info abajo


// dentro de la funcion se llama lo que queremos chequear function tripleNum(obj)

// funciones dentro de objetos
// let person3 = {
//         name: "maria",
//         run: function({
//                 console.log(`Im ${this.name} and Im running`);
//             }
//         }
//         person3.run();

// (function saludar() {
//     console.log("Hola");
// })(); 
// // para llamar una funcion en si misma

// funcion constructora

// function Person(name, lastName, country = "Spain") {
//     this.name = name;
//     this.lastName = lastName;
//     this.country = country;
//     this.fullName = function() {
//         return this.name + " " + this.lastName;
//     };
// }

// let person1 = new Person("Marcos", "Villanueva");
// let person2 = new Person("Alberto", "Miguez");
// console.log(person1.fullName());


// crear un objeto personaje que tenga un contador de vida
// y que tenga dos metodos -increaseLife que incrementa la vida en 50 puntos y decreaseLife que la baja en 50
// tiene que tener otra funcion que muestre la vida total

// let person = {
//     currentlife: 50,
//     increaseLife: function() {
//         this.currentlife += 10;
//     },
//     decreaseLife: function() {
//         this.currentlife -= 10;

//     },
//     showLife: function() {
//         console.log(this.currentlife);
//     }
// }

// crear una funcion constructora que cree un objeto acumulador  con un valor inicial ese objeto debe tener un metodo 'introduce' que te salta un prompt y te lo suma en el acumulador


// function Acumulador(inicio) {
//     this.inicio = inicio;
//     this.increase = function() {
//         let res = +prompt("introduce valor");
//         this.inicio += res;
//         return this;
//     };
// }

// let ac = new Acumulador(10);

// ac.introduce();
// console.log(ac.inicio);

// class Coche {
//     constructor(modelo, color = "negro", potencia = 100) {
//         this.modelo = modelo;
//         this color = color;
//         this.potencia = potencia;
//     }

//     setModel(modelo) {
//         this.modelo = modelo
//     }

//     static sameColor(coche1, coche2) {
//             return coche1.color === coche2.color;
//         } // al ser estatico solo pertenece a la clase , no se va aplicar 
// }
// let coche1 = new coche("opel", "blanco", 90);
// let coche2 = new Coche("opel", "gris", 90);

// Coche.sameColor(coche1, coche2)
// coche1.setModel("Ferrari")


// crear una clase delfin , el delfin que tenga un nombre, un peso , longitud, color y los metodos saltar que imprime por consola slatando... y un metodo genreal de reproduccion que al pasarle dos delfines con el mismo color nos da un true (mini dolphin)

// class Dolphin {
//     constructor(name, peso, longitud, color) {
//         this.name = name;
//         this.peso = peso;
//         this.longitud = longitud;
//         this.color = color;
//     }
//     jump() {
//         console.log("saltando");
//     }
//     static fuck(dolphin1, dolphin2) {
//         return dolphin1.color === dolphin2.color ? "mini dolphin!" : false;
//         // ternaria para resumir lo que tiene que hacer en caso de que sean iguales o no
//     }

// }

// let dolphin1 = new Dolphin("flipper", 120, 100, "silver");
// let dolphin2 = new Dolphin("manolo", 130, 100, "silver");
// let dolphin3 = new Dolphin("marcos", 150, 120, "red");

// dolphin1.jump()
// Dolphin.fuck(dolphin1, dolphin2)

// hacer una clase furgoneta que extienda de vehiculo 
// hacer una clase coche que extienda de vehiculo 

// class Vehiculo {
//     constructor(puerta = 5, peso = 3000) {
//         this.puerta = puerta;
//         this.peso = peso;
//     }
// }
// class Furgoneta extends Vehiculo {
//     constructor(color, peso, tipo) {
//         super();
//         this.peso = peso;
//         this.color = color;
//         this.tipo = tipo;
//     }
// }
// class Coche extends Vehiculo {
//     constructor(peso, radio) {
//         super();
//         this.peso = 3500;
//         this.radio = radio;
//     }
// }

// class Ford extends Coche {
//     constructor(puerta, tipo) {
//         super();
//         this.tipo = tipo;
//         this.puerta = puerta;
//     }
// }

// const ford1 = new Ford(3, "Ford fiesta");
// const furgoneta1 = new Furgoneta("red", 4600, false)
// console.log(furgoneta1);


// errores , fechas , tipos mas a fondo, asincronia

// try {
//     // codigo que queremos probar

// } catch (e) {
//     // si hay un error va a entrar automaticamente dentor del catch
//     console.error(e);
// }

// error = {
//     name: "ReferenceError",
//     message: "hgufuy is not defined",
//     stack: "error at ...",
//     // esto seria como se leeria el error en consola
// }

// una funcion que nos ponga hola cuando pasen tres segundos

// setTimeout(function(sayHello) {
//     console.log("hola");
// }, timeout = 3000);

// setInterval(() => {
//     console.log("adios");
// }, 2000);

// let obj = {
//     name: "pepe",
//     hola: function() {
//         setTimeout(() => {
//             console.log("Hello " + this.name);
//         }, 3000);
//     }
// }
// obj.hola();

// con el arrow function el this. hace dos saltos hacia atras , porque si lo configuramos como una function normal el this no saltaria al objeto si no que solo haria un salto de linea y no podria llegar al valor de pepe y solo nos saldria "hello "  porque el this llamaria al paso anterior quedandose en la function. por eso en los ejemplos anterios modifica la su¡intaxis de el settimeout y setintervale quitando la function ... para hacernis dar cuenta de la diferencia. para hardcodear el .this habria que chequear en mdn .vine

// numeros


// Math.floor()
//     // math.floor llama al numero menor mas cercano, redondea por debajo
// console.log();
// Math.round()
//     // redondea al numero mas cercano
// Math.ceil()
//     // redondea por arriba
// Math.trunc
//     // quita los decimales

// let num = 4.32324;
// num = num.toFixed(2);
// console.log(num);
// distintas funciones matematicas predeterminadas

// strings 

// string.length; nunca llamarlo con () por que son propiedades ,no funciones

// let cadena = "kjhefowehoifh";
// for (let i = 0; i < cadena.length; i++) {
//     console.log(cadena[i]);
// }

// for (let letra of cadena) {
//     console.log(letra);
// }
// for of funciona  par array y strings y for in para objetos

// array

// let names = ["marcos", "rafa", "maria"];

// names[1] // para conseguir el segundo

// names.lenght // para ver la cantidad de aobjetos en el array

// name.push("jacobo") // suma un nuevo objeto al array al final

// names.pop() // elimina el ultimo elemento del array y te devuelve 

// names.unshift() // inserta nuevos elementos al principio del array

// names.shift() // borra el primer el elemento de un array y lo retorna

// // names.splice() // elimina los elementos no indicados en el primer termino la posicion y en el segundo cuantas unidades

// let names = ["marcos", "rafa", "tito", "maria"];

// // function deleteNames(names) {
// //     for (let i = 0; i < names.length; i++) {
// //         names.splice(i + 1, 1);
// //     }
// // }


// // deleteNames(names);
// // console.log(names);

// let names2 = names.map(name => {
//     return name + "2";
// });

// console.log(names2);

// para crear un nuevo array a partir de otro y en este caso modificando los elementos del array original
// para eliminar alguno de los elementos del array original en el nuevo creado utilizamos el .filter


// una funcion que al pasarle un array de users los haga de type -> admin

// let people = [{
//         name: "pepe",
//         location: "coruña",
//         type: "user"
//     },
//     {
//         name: "andrea",
//         location: "madrid",
//         type: "user"
//     },
//     {
//         name: "maria",
//         location: "coruña",
//         type: "user"
//     },
//     {
//         name: "alex",
//         location: "barcelona",
//         type: "user"
//     }
// ]

// let typeUser = people.map(function(person) {
//     person.type = "admin";
//     return person
// })

// console.log(typeUser)

// el map (es un a function) hace como si fuese un for , recorriendo todo el array y creando uno nuevo, declaramos una funcion (nombre de la funcion) {valor a cambiar } y retornamos en 

// function makeAdmin(users) {
//     return users.map((user, person) => {
//         if (person % 2 !== 0) user.type = "admin";
//         return user;
//     });
// }

// let res = makeAdmin(people);
// console.log(res);

// en este paso buscamos cambiar a admin los pares del array

// .filter filtar por localizacion

// function filterByLocation(people, location) {
//     return people.filter(user => location == user.location);
// }

// let 


// reduce sirve para acumular (acumulador)

// let res = [1, 2, 3].reduce((ac, current) => {
//     return ac + current;

// }, 200);

// console.log(res);


// hacer prueba con el .split

// // destructuring

// let arrayNormal = ["abel", "pepe"]

// let [name1, name2] = arrayNormal

// //  si solo queremos coger uno de los elementos tendriamos que poner comas dentro de los corchetes respetando la posicion de cada uno y mencionando solo el deseado

// console.log(name2);

// json

// JSON JavaScript Object Notation, es un formato basado en texto plano para el intercambio de información, por lo que se usa en muchos sistemas que requieren mostrar o enviar información para ser interpretada por otros sistemas, puede ser leído por cualquier lenguaje de programación.Por lo tanto, puede ser usado para el intercambio de información entre distintas tecnologías.

// Es sólo un formato de datos— contiene sólo propiedades, no métodos.requiere usar comillas dobles para las cadenas y los nombres de propiedades.Las comillas simples no son válidas.A diferencia del código JavaScript en que las propiedades del objeto pueden no estar entre comillas, en JSON, sólo las cadenas entre comillas pueden ser utilizadas como propiedades.

// dates now mas rapido que la otra que va en milisegundos

// const d = Date.now();
// // d.toDateString();
// console.log(d);

//  hay 3 formatos de fecha ISO (international standar - YYYY-MM-DD) , short , long Javascipt by default  => full text string
/**methods
 * getFullYear()
 * getMonth
 * getDate()
 * getHours()
 * getMinutes()
 * getSeconds()
 * getMiliseconds()
 * getTime()
 * getDay()
 * Date.now() devuelve el numero de milisegundos desde 1/1/1970
 * momentjs, dayjs, npmjs librerias para fechas y general la ultima 
 */

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     // Your code below this line
//     let result = "";
//     result = "My " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";
//     result2 = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb + ".";

//     console.log(result2); // Your code above this line
//     return result;
//     return result2;
// }


// // Change the words here to test your function
// wordBlanks("dog", "big", "ran", "quickly");

// let result = "";

// result = "my big " + "dog" + " ran" + " very quickly."
// console.log(result);


// 1. Pasar a arrow function
// Reemplazar en este código las expresiones de función con funciones de flecha:
// function preguntar(pregunta, si, no) {
//   if (confirm(pregunta)) si();
//   else no();
// }

// preguntar(
//   "Estás de acuerdo con las condiciones de uso?",
//   function() {
//     alert("Aceptaste las condiciones de uso.");
//   },
//   function() {
//     alert("No aceptaste las condiciones de uso.");
//   }
// );


// 2. Comprobar si un objeto está vacío
// Escribir una función isEmpty(objeto) que devuelve true si el objeto no tiene propiedades y false de lo contrario.
// Algo tal que así:
// let calendar = {};

// alert(isEmpty(calendar)); // true

// calendar["June"] = "Es mi cumple!";

// alert(isEmpty(calendar)); // false


// Objetos constantes
// ¿Es posible cambiar un objeto declarado con const?
// const city = {
//   name: "Madrid"
// };

// // Esto funciona?
// city.name = "Coruna";


// Errores de Sintaxis
// ¿Cuál es el resultado de este código?
// // check que hace esto
// let user = {
//   name: "Pepe",
//   sayName: function() {
//     alert(this.name);
//   }
// }(user.sayName)();

// // check que hace este otro
// let user = {
//   name: "John",
//   sayName: function() {
//     alert(this.name);
//   }
// };
// user.sayName();
// user.sayName();


// Analiza estos dos trozos, por qué uno funciona y otro no?
// function createPost() {
//   return {
//     name: "New Website",
//     description: this
//   };
// }

// let post = createPost();

// alert(post.description.name); // resultado? por que?
// y ahora?
// function createPost() {
//   return {
//     name: "New Website",

//     description() {
//       return this;
//     }
//   };
// }

// let post = createPost();

// alert(user.description().name); // ??? por que??

// Crear una mini calendario semanal
// Crea un objeto calendar con tres métodos:


// create() solicita por prompt siete tareas correspondientes a una tarea por día de la semana. Se crearía siete propiedades del objeto calendar(lunes, martes, miercoles...) que a su vez son objetos que contienen la tarea a realizar ese día y un campo done booleano


// toggleDone(day) cambia la propiedad done del día seleccionado.


// getTask(day) muestra la tarea que tienes que hacer el día que le pases por parámetro


// Empezamos con un obj tal que así
// let calendar = {
//   toggleDone(day) {
//     // codigo
//   },

//   getTask(day) {
//     // codigo
//   },
//   create() {
//     // aqui pedimos 7 tareas y creamos las propiedades de los días.
//   }
// };
// //llamamos a create
// calendar.create();
// ahora nuestro objeto debe parecerse a esto:
// let calendar = {
//   toggleDone(day) {
//     // codigo
//   },
// And Data Structures Certification(300 hours)
// Basic JavaScript
//   getTask(day) {
//     // codigo
//   },
//   create() {
//     // aqui pedimos 7 tareas y creamos las propiedades de los días.
//   },
//   monday: {
//     task: "Lo que hayas introducido en el primer prompt",
//     done: false
//   },
//   tuesday: {
//     task: "Lo que hayas introducido en el segundo prompt",
//     done: false
//   }
//   // etc
// };

// // una vez creado el calendario semanal podemos leer las tareas y marcarlas como hechas
// alert(calendar.toggleDone("monday")); // invierte el done
// alert(calendar.getTask("tuesday")); // muestra por consola la tarea


// Formateo a camelCase de palabras divididas por guiones background-color -> backgroundColor
// Escriba la función camelize(str) que cambie las palabras separadas por guiones como "esto-es-un-ejemplo" en "estoEsUnEjemplo".
// Es decir: elimina todos los guiones, cada palabra después del guión se convierte en mayúsculas.
// Ejemplos:
// camelize("estados-del-sur") == "estadosDelSur";
// camelize("-california-state") == "CaliforniaState";
// P.D. Sugerencia: usa split para dividir el string en un array, transformarlo con .map() y join para unirlo.


// Filtro por rango
// Escribe la función filterByRange(array, initialValue, lastValue) que obtiene un array array,busca elementos entre initialValue y lastValue y los devuelve..
// La función no debe modificar el array. Debería devolver un nuevo array.
// Por ejemplo:
// let arr = [2, 13, 4,5,3,9 1];

// let arrFiltrado = filterByRange(arr, 4, 9);

// console.log( arrFiltrado ); // 4, 5, 9

// console.log( arr ); // 2, 13, 4,5,3,9 1 (no se ha modificado)


// Filtrar rango a la inversa
// Escriba una función filterByRangeReverse(arr, a, b) que obtiene un array arr y elimina de el todos los valores excepto aquellos que están entre a y b.
// La función solo debe modificar el array. No debe devolver nada.
// Por ejemplo:
// let arr = [6, 4, 9, 2];

// filterByRangeReverse(arr, 2, 5); // se borran los numeros que no esten entre 2 y 5

// console.log(arr); // [4, 2]


// Calorias maximas
// Hay un objeto calories:
// let calories = {
//   pizza: 500,
//   agua: 20,
//   cocacola: 140
// };
// Cree la función topCalorie(calories) que devuelve el nombre del elemento con mas calorias.

// Si calories está vacío, debería devolver null.
// Si hay empate, devuelva cualquiera de los empatados.

// PD usa Object.entries y la desestructuración para iterar sobre pares clave/valor.


Ejercicio muy guay de una entrevista que hice:
Given the string values A and B being:
A: The price of an item.
B: The money paid for the item.
You will need to create a function 'cashRegister' to calculate the change to give back after the purchase.
The change will need to be in the format of an array with the correct string values inside, this values can be:
HOUNDRED = 100
FIFTY = 50
TWENTY = 20
TEN = 10
FIVE = 5
TWO = 2
ONE = 1
HALFDOLLAR = 0.5
QUARTER = 0.25
DIME = 0.1
NICKLE = 0.05
PENNY = 0.01
so for example if the given values are:
A: 23.2
B: 25.88
The change would be 2.68 so theAnd Data Structures Certification (300 hours)
Basic JavaScriptAnd Data Structures Certification(300 hours)
Basic JavaScript output should be:
[ 'TWO', 'HALFDOLLAR', 'DIME', 'NICKLE', 'PENNY', 'PENNY', 'PENNY' ]
IF YOU FINISH TRY TO MAKE IT WORK IF THE NUMBERS INPUTS ARE
A: dfvdsf,23.2fsdcds
B: fvfdv-vs,25.88fdsdf


PROMESAS se utilizan para trabjajar la asincronia en javascript , estas se resuelven y rechazan  ( resolve y reject)
en una promesa si algop falla se recoge con el then 

let promise = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve("los datos me han llegado correctamente");
    }, 1000);
});

promise.then(resultado => console.log(resultado));

si hay fallo pondrias promise.catch para filtrar el fallo, el .then se puede utilizar para localizar el error pero no es recomendable, la forma seria la siguiente =>
promise.then(resultado => console.log(resultado)).catch(err => console.log(err));

let promise = new Promise(function(resolve, reject) {
    let array = ["Manu", "Maria", "Luisa"];
    if (array.includes("Pepe")) {
        resolve("Tiene a Pepe");
    }
    reject(new Error("No se ha encontrado a Pepe"));
});
promise
    .then(resultado => console.log(resultado))
    .catch(err => console.log(err));


fetch("https://radomuser.me/api/")
.then(res => {
    return res.json();
})
.then(data => console.log(data))
.catch(e => console.log("error", e));

.then es una funcion que devuelve un valor que podemos utilizar


una funcion que tenga un stetimeout de 2 segundos que devuelva una respuesta al pasarle una url y llamar a un api publico (que es esa url)




console.log(x());

async function githubExample(url = "https://api.github.com/users/carlosurra") {
    try {
        let res = await fetch(url);
        let user = await res.json();
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}

githubExample();

arriba tenemos la forma actual de realizar una funcion asincrona y abajo la antigua. EN la nueva el await siempre tiene que estar dentro de una funcion asincrona y en la antigua el .then retorna una promesa y complica la sintaxis


function githubExample(url = "https://api.github.com/users/carlosurra") {
    fetch(url).then(res => {
            res.json().then(data => {
                    console.log(data);
                })
                .catch(e => {
                    console.log(e);
                })
        })
        .catch(e => {
            console.error(e);
        })
}

githubExample();

Promise.all

como pasar de un objeto a json
let obj = {
    name: "Pepe",
    age: 40
};

// let json = JSON.stringify(obj);

// console.log(typeof json);

// para pasar un json a un objeto

let newObj = JSON.parse(json);
var loc = "foo";

function myTest() {
    console.log(loc);
}
myTest(); // logs "foo"

var sum = 0;

function addSum(num) {
    sum = sum + num;
}
var returnedValue = addSum(3);
console.log(sum);
// sum will be modified but returned value is undefined


function nextInLine(arr, item) {
    // arr.push(item);
    return arr.push(item)
}

var arr = [9, 2, 3, 4, 5];

console.log(arr);
console.log(nextInLine(arr, 50));
console.log(arr);
function nextInLine(arr, item) {
    let newArr = arr.push(item);
    let removed = arr.shift();
    return newArr;
    return removed;
}

let arr = [1, 2, 3, 4, 5];
let item = 6;

console.log(arr);
console.log(newArr);
console.log(removed);

function nextInLine(arr, item) {
    return arr.push(item);
}

var arr = ["ana", "luis", "antonio", "jacobo", "marcos"];

console.log(arr);
console.log(nextInLine(arr, 50));
console.log(arr);

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    } else {
        return "Change Me";
        // Only change code above this line
    }
}

// Change these values to test
golfScore(5, 4);
console.log(golfScore(1, 1));

function chainToSwitch(val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;
}
console.log(chainToSwitch(7));

chainToSwitch(7);

function chainToSwitch(val) {
    switch (val) {
        case "bob":
            return "Marley";
            break;
        case 42:
            return "The Answer";
            break;
        case 1:
            return "There is no #1";
            break;
        case 99:
            return "Missed me by this much!";
            break;
        case 7:
            return "Ate Nine";
            break;
    }
}
console.log(chainToSwitch(42));

function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

function isEqual(a, b) {
    return a === b;
}
console.log(isEqual(1, 1));

function myFun() {
    // console.log("Hello");
    return "World";
    // console.log("byebye")
}
// myFun();
console.log(myFun());
console.log(myFun());
console.log(myFun(1));
let count = 0;

function cc(card) {
    switch (card) {
        case 2:

        case 3:

        case 4:

        case 5:

        case 6:

            count = 5 + count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

}

cc(2);
cc(5);
cc(4);
cc(3);
cc(6);

console.log(cc(7));


var count = 0;

function cc(card) {
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) { count++; } else if (card === 10 || String(card).match(regex)) { count--; }

    if (count > 0) return count + " Bet";
    return count + " Hold";

}

console.log(cc(2));

let resulCount = 0;

resultCount += 

let a = 1
console.log(a);
console.log(a++);
console.log(a);

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];

            // Only change code above this line
        }
    }
    return product;

}

// Modify values below to test your code
console.log(multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]));

// al tener arrays dentro de un array i seria igual a cada array interno

// array [i]length = 3, pero empezamos a nombrar cada array desde 0 en este caso hasta 2 = i[0] > [1,2]
//                             i[1] > [3,4]
//                             i[2] > [5,6,7]
// [[1,2],[3,4],[5,6,7]]
// y j serian cada uno de los elementos internos de cada array, en este caso            = j[0] y j[1] >       1 y 2
//                        j[0] y j[1] >       3 y 4
//                        j[0], j[1] y j[2] > 5,6 y 7

una vez que entras en el for de j  segundo no vuelves al primero o de i hasta que los valores chequeados den false o no cumplan la condicion


console.log(multiplyAll([
    [1],
    [2],
    [3]
]));
console.log(multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
]));

var ourArray = [];
var i = 5;
while (i < 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);

var ourArray = [];
var i = 5;
do {
    ourArray.push(i);
    i++;
} while (i < 5);


// console.log(ourArray);

var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
console.log(lookUpProfile("Kristian", "likes"));
console.log(contacts.length);

function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}



function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

console.log(findGreater(5, 9));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr;
    realNumberArray.filter((x) => x % 1 != 0 && x > 0)
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squaredIntegers = realNumberArray.filter((x) => x > 0 && x % 1 == 0).map((x) => x ** 2);



console.log(squaredIntegers);
const increment = (function() {
    "use strict";
    return function increment(number, value) {
        return number + value;
    };
})();
console.log(increment(5, 1)); // returns 7
console.log(increment(5, 1)); // returns 6

const increment = ((number = 5, value) => number + value);

console.log(increment(7, 2));

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

var flyToTheMoon = function() {
    return "Zoom! Zoom! Zoom!";
}
console.log(flyToTheMoon());

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.



const sum = (function(...args) {
    "use strict";
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));
let args = [1, 2, 3];
const sum = (function() {
    return function sum(...args) {
        return args.reduce(function(a, b) {
            return a + b;
        }, 10);
    }
})();
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));
// console.log(sum(5));
// console.log(sum(0));

console.log(sum(2, 5));

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
console.log(maximus);

var voxel = { x: 3.6, y: 7.4, z: 6.54 };
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54


const { x: a, y: b, z: c } = voxel; // x = 3.6, y = 7.4, z = 6.54

console.log(a);
console.log(b);
console.log(c);

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
const a = {
    start: { x: 5, y: 6 },
    end: { x: 6, y: -9 }
};
const { start: { x: startX, y: startY } } = a;
console.log(startX, startY); // 5, 6
console.log(a.start);


const [a, b, , , c, m] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, m); // 1, 2ç

const [a, b, ...args] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = source;
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => ((max + min) / 2.0);
// change code above this line

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {

    const resultDisplayArray = arr.map((arr) => (`<li class="text-warning">${arr}</li>`))
    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('a');
console.log(carrot.name); // => should be 'carrot'

class Book {
    constructor(author) {
            this._author = author;
        }
        // getter
    get writer() {
            return this._author;
        }
        // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const lol = new Book('anonymous');
console.log(lol.writer); // anonymous
lol.writer = 'wut';
console.log(lol.writer); // wut

function makeClass() {
    class Thermostat {
        constructor(farenheit) {
            this.farenheit = farenheit;
        }
        get temperature() {
            return (this.farenheit - 32) * (5 / 9);
        }
        set temperature(celsius) {
            this.farenheit = (celsius * 9) / 5 + 32;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
// console.log(thermos);
let temp = thermos.temperature; // 24.44 in C
// console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log();

function mixedNumbers(arr) {
    // change code below this line
    arr.unshift("I", 2, "three");
    console.log(arr);
    arr.push(7, "VIII", 9);
    console.log(arr);
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']
console.log(greetings);
greetings.shift();
// now equals ['hello']
console.log(greetings);

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
console.log(popped);
console.log(greetings);

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

function sumOfTen(arr) {
    // change code below this line
    arr.splice(1, 2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

function colorChange(arr, index, newColor) {
    arr.splice(index, 1, newColor);
    console.log(arr);

    return arr;

}
let colorScheme = ["#878787", "#a08794", "#bb7e8c", "#c9b6be", "#d1bec"];

colorScheme = colorChange(colorScheme, 2, "#332327");


// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);
console.log(weatherConditions);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

function forecast(arr) {
    // change code below this line
    arr.slice(2, 4);
    return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 1));

function quickCheck(arr, elem) {
    // change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    } else {
        return false;
    }
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        };
    };

    // change code above this line
    return newArr;
}

// change code here to test different cases:
// console.log(filteredArray([
//     [3, 2, 3],
//     [1, 6, 3],
//     [3, 13, 26],
//     [19, 3, 9]
// ], 3));
console.log(filteredArray([
    [10, 8, 3],
    [14, 6, 23],
    [3, 18, 6]
], 18))




let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        ['deep', 'shift', 6, 7, 1000, 'method']
    ],
    [
        [
            ['concat', false, true, 'spread', 'array'],
            ['mutate', 1327.98, 'splice', 'slice', 'deeper']
        ],
        [
            [
                ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'deepest']
            ]
        ]
    ]
];
console.log(myNestedArray[1][0][0][0][0]);


bucle que genere un programa que saque por consola del 1 al 10 =>
1
12
123
1234
let rep = 0;
let num = 1;





let number = "";

function display(num) {
    for (i = 1; i <= num; i++) {
        console.log(number += i);
    }
}
display(10);




piramide invertida

let arr = ["a", "b", "c", "d"];

function convert(arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        let code = arr[i].charCodeAt(0);
        if (code >= 97 && code <= 122) {
            code -= 32;
        }
        result += String.fromCharCode(code);
    }
    return result;
};
console.log(convert(arr));


console.log(convert(["a", "b", "c", "d"]));

let arr = ["a", "b", "c", "d"];
arr = arr.map(function(x) { return x.toUpperCase() });
console.log(arr);