//! область видимости
//* глобальная область видимости
var globalVariable = "global variable";
// console.log(window.globalVariable);
window.globalVariable;
//* блочная область видимости - разница между VAR и LET
//console.log(aaa); // ошибка Uncaught ReferenceError: aaa is not defined
{
  let aaa = 123;
  //console.log(aaa); // 123
}
//console.log(aaa); // ошибка ReferenceError: aaa is not defined

//console.log(bbb); // undefined
{
  var bbb = 234;
  // console.log(bbb); //234
}
// console.log(bbb); // 234
// window.bbb;

// conditions
if (bbb == 234) {
  var ccc = 111;
  //console.log(ccc); //111
}
//console.log(ccc); //111

if (bbb == 234) {
  let dddd = 111;
  //console.log(dddd); //111
}
//console.log(dddd); //dddd is not defined

//ЦИКЛЫ
var array = [1, 2, 3];
for (var index = 0; index < array.length; index++) {
  //console.log(index);
  var varInsideCycle = "insideCycle";
}
// console.log(varInsideCycle);

let array2 = [0, 1, 2];
for (let index = 0; index < array.length; index++) {
  //console.log(index);
  let letInsideCycle = "insideCycle";
}
//console.log(letInsideCycle);

//* функциональная область видимости
console.warn("FUNCTION + VAR");
// создаем функцию с var
let varFunction = function () {
  var qqq = 444;
  //console.log(qqq);
};
varFunction(); // вызываем функцию
//console.log(qqq); // выдаст ошибку, т.к. var внутри функции

//! hoisting - поднятие переменных
console.warn("hoisting");
console.log(d); // var поднимается
var d; // var объявлена, но не назначена
//console.log(e); // let не поднимается Uncaught ReferenceError: Cannot access 'e' before initialization
let e;
//let e = 20; // повторное объявление let вызовет ошибку, нужно переназначить переменную Uncaught ReferenceError: Cannot access 'e' before initialization
//e = 20;
//console.log(e);
// console.log(F); //const не поднимается
// const F = 30;
//const F; // const без назначения выдает ошибку SyntaxError: Missing initializer in const declaration
//var d = 10; // var можно объявить и назначить повторно

//!Поднятие функций
//fuction declaration
add(3, 4); // 7
console.log(add(56, 755));

function add(a, b) {
  return a + b;
}

// Функции function expression при таких условиях работать не будут:

//multiply(3, 4); // TypeError multiply is not a function

var multiply = function (a, b) {
  return a * b;
};

// Значение объявленной через var переменной переменной или function expression до того как интерпретатор дойдёт до её кода, равно undefined.

// Рассмотрим пример:
var myname = "Anna";
function fn() {
  console.log(myname); //undefined ->
  var myname = "Sveta";
  console.log(myname); //sveta
}
fn();
console.log(myname); //Anna
//? что выведет консоль и в каком порядке?
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.

// undefined
// Sveta
// Anna

const YEAR = 366;
if (YEAR % 2 == 1) {
  console.log("не високосный год");
} else {
  console.log("високосный год");
}
