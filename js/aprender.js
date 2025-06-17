// ===== aprender.js CORREGIDO =====
console.log("HOLA PROFE");
// alert("hola profe");
// document.body.innerHTML = "<h1>HOLA QUERIDO PROFESOR</h1>";
// document.body.innerText = "<h1>HOLA QUERIDO PROFESOR</h1>";

const edad = 18;
let edad_dos = 18;
const nombre = "Wilder Duarte";

const entero = 20;
const decimal = 20.5;
const string = "MI NOMBRE ES: WILDER";
const boolean = true;
const array_string = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const array_numerico = [1, 2, 3, 4, 5, 6, 7];
const array_mixto = [1, 2, 3, "Lun", "Mar", "Mié", true, false];

const suma = entero + decimal;
const resta = decimal - entero;
const multi = decimal * entero;
const divi = decimal / entero;
const modulo = decimal % 2;

console.log(array_string);
console.log(array_string.length);
let impresion = "";
for (let i = 0; i < array_string.length; i++) {
  console.log(array_string[i]);
  impresion = impresion + array_string[i];
}
Swal.fire(impresion);