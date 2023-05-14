console.log("hello again JavaScript!");

//! область видимости

//console.log(aaa); // ошибка
{
  let aaa = 123;
  // console.log(aaa); // 123
}
// console.log(aaa); // ошибка

console.log(bbb); // undefined
{
  var bbb = 234;
  // console.log(bbb); //234
}
// console.log(bbb); // 234

if (bbb == 234) {
  var ccc = 111;
  // console.log(ccc); //111
}
// console.log(ccc); //111

let array = [1, 2, 3];
for (var index = 0; index < array.length; index++) {
  console.log(index);
}
console.log(index);
// console.log(element);

// создаем функцию с var
let varFunction = function () {
  var qqq = 444;
  console.log(qqq);
};
varFunction(); // вызываем функцию
//console.log(qqq); // выдаст ошибку, т.к. var внутри функции

//! hoisting - поднятие переменных
console.log(d); // var поднимается
var d; // var объявлена, но не назначена
// console.log(e); // let не поднимается
let e;
// let e = 20; // повторное объявление let вызовет ошибку, нужно переназначить переменную
// e = 20;
// console.log(F); const не поднимается
const F = 30;
// const F; // const без назначения выдает ошибку
var d = 10; // var можно объявить и назначить повторно

//!Поднятие функций
//fuction declaration
add(3, 4); // 7

function add(a, b) {
  return a + b;
}

// Функции function expression при таких условиях работать не будут:

//multiply(3, 4); // TypeError

var multiply = function (a, b) {
  return a * b;
};

// Значение объявленной через var переменной переменной или function expression до того как интерпретатор дойдёт до её кода, равно undefined.

// Рассмотрим пример:
// var myname = "Anna";
// function fn() {
//   console.log(myname);
//   var myname = "Sveta";
//   console.log(myname);
// }
// console.log(myname);
// fn();
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
