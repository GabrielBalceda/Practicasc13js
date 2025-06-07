/*
Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

let suma = numero1 + numero2;

// Mostrar el resultado
alert("La suma es: " + suma);