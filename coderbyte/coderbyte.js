"use strict";



//** first reverse . un string por parametro y lo devolvemos con el orden de las letras inverso*/

function firstReverse(str) {
    return str.split("").reverse().join("");
};

console.log(firstReverse("coderbyte"));


/** first factorial . un numero por parametro y calculamos su factorial . ej: fact de 3 = 3*2*1 */



function factorial(num) {
    return (num != 1) ? num * factorial(num - 1) : 1;
};
console.log(factorial(8));


//** longest word . una frase por parametro y calculamos la palabra mas larga */


function longestWord(str) {
    let arr = str.match(/[a-z]+/gi);
    arr.sort(function(a, b) {
        return b.length - a.length;
    });
    return arr[0];
};

console.log(longestWord("no me funciona el puñetero split"));


/** letter changes . una frase por parametro y la funcion pasara cada letra por separado ,manteniendo la estructura de cada palabra, a la letra que le siga por orden alfabetico */

function LetterChanges(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.toLowerCase().split('').map(letter => {
        if (letter.match(/\W/)) return letter;
        const index = alphabet.indexOf(letter);
        let newLetter = (alphabet[index + 1] || alphabet[0]);
        return newLetter.match(/[aeiou]/) ? newLetter.toUpperCase() : newLetter;
    }).join('');
};

console.log(LetterChanges("asi me gusta, que pidan cosas sencillas y utiles"));


/** letter capitalize . una frase por parametro y la funcion devolvera la misma frase pero con la primera letra de cada palabra escrita en mayuscula */

function letterCapitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

console.log(letterCapitalize('the cat is here then'));


//** simple symbols . un string por parametro y la funcion devolvera true o false en funcion de si el string con tiene simbolos que precedan y sigan a cada letra (true) */


function simpleSymbols(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) != -1) {
            if (str[i - 1] == '+' && str[i + 1] == '+')
                return true
        }
    }
    return false;
};

console.log(simpleSymbols('no entiendo nada'));



//** time convert . numero por parametro y la funcion convertira este mismo en hora ( formato 2:15) */

function timeConvert(num) {
    let hours = 0;
    let minutes = 0;
    let newMinutes = 0;
    while (num >= 60) {
        hours += 1;
        num -= 60;
    }
    if (num < 60) {
        minutes = num;
    }
    if (minutes < 10) {
        newMinutes = '0' + minutes;
    } else if (minutes > 10) {
        newMinutes = minutes;
    }
    return (hours + ':' + newMinutes);
};

console.log(timeConvert(126));



/** alphabet soup . string por parametro y la funcion ordenara las letras por orden alfabetico y devolvera un string en este orden*/


function alphabetSoup(str) {
    return str.split('').sort().join('');
};

console.log(alphabetSoup('numismatica'));



/** ab check . string como parametro y la funcion devolvera true si los caracteres a y b se encuentran separados por tres caracteres exactamente. si no devuelve false */


function abCheck(str) {
    let match = str.search(/a...b/);
    console.log(match);
    if (match == 1) {
        return true;
    } else {
        return false;
    }
};

console.log(abCheck('lane border'));


//** vowel count . un string como parametro y la funcion devolvera el numero de vocales que contiene el string */


function vowelCount(str) {

    //**solucion con bucle anidado */
    //     let vowels = ['a', 'e', 'i', 'o', 'u'];
    //     let counter = 0;

    //     for (let i = 0; i < vowels.length; i++) {
    //         for (let j = 0; j < str.length; j++) {
    //             if (str[j] === vowels[i]) {
    //                 counter++;
    //             }
    //         }
    //     }
    //     return counter;

    // };



    let counter = str.match(/[aeiou]/gi);
    return counter === null ? 0 : counter.length;
}


console.log(vowelCount('pues va a ser que es la primera vez que lo veo claro'));


/** word count . string como parametro y la funcion calcula el numero de palabras que contiene el string */

// metodo split de string diferencia entre:
// () => devuelve un array con el string 
// ('') => devuelve un array con cada una de las letras que componen el string
// (' ') => devuelve un array con cada uno de los elementos que componen el string


function wordCount(str) {
    return str.split(' ').length;
};

console.log(wordCount('como me la maravillaria yo'));



/** Ex Oh . un string como parametro la funcion devolvera true si tiene el mismo  numero de caracteres de dos letras distintas */


function exOh(str) {

    if (str.length % 2 === 1) {
        return false;
    } else {
        let counter = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'x') {
                counter++;
            }
        }
        if (counter === (str.length / 2)) {
            return true;
        } else {
            return false;
        }
    }

};

console.log(exOh('xoxoxoxo'));



/** palindrome . string como parametro y la funcion devolvera true si se trata de un palindromo, si no retorna false */

// lo primero eliminar las posibles mayusculas y espacios para evitar errores encontrados


function palindrome(str) {
    str = str.replace(/ /g, '').toLowerCase();
    let backwardStr = str.split('').reverse().join('');
    if (backwardStr === str) {
        return true;
    } else {
        return false;
    }
};

console.log(palindrome('race car'));



/** arith geo . array como parametro y la funcion devolvera aritmetico si la secuencia de los numeor es aritmetica, si no devolvera geometrica en caso de que sea el patron. Si no siguiese ninguno de los patrones devolvera -1 */



function arithGeo(arr) {
    let arith = true;
    let geo = true;
    let dif = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== dif) {
            arith = false;
        }
    }
    if (arith) {
        return 'arithmetic';
    } else {
        let dif2 = arr[1] / arr[0];
        for (let i = 2; i < arr.length; i++) {
            if ((arr[i] / arr[i - 1]) !== dif2) {
                geo = false;
            }
        }
        if (geo) {
            return 'geometric';
        } else {
            return '-1';
        }
    }

};

console.log(arithGeo([2, 4, 6, 8, 10, 12]));


/** array addition . array como parametro y la funcion retornara true si alguna combinacion de numeros del array puede ser sumada para conseguir el valor del nuemro mayor del array, si no retornara false  */


function arrayAddition(arr) {
    arr.sort(function(a, b) {
        return a - b
    });
    let largest = arr.pop();
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        counter += arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                counter += arr[j];
                if (counter == largest) {
                    return true;
                }
            }
        }
        for (let k = 0; k < arr.length; k++) {
            if (i != k) {
                counter -= arr[k];
                if (counter == largest) {
                    return true;
                }
            }
        }
        counter = 0;
    }
    return false;
};


console.log(arrayAddition([4, 6, 10, 3, 23]));