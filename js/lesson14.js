console.log("hello again JavaScript!");

//! Типы данных
let string = "hello string";
let number = 1;
let boolean = true;
let bigInt = 123n;
let nullType = null;
let undefinedType = undefined;
let symbol = Symbol();
let object = {
  name: "Lera",
  age: 30,
};

var a = "var"; //устаревшее
let b = "let";
const C = "const";

//! hoisting - поднятие
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

//! область видимости
// console.log(aaa); // ошибка
{
  //console.log(aaa); // 123
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

//! Конкатенация
console.log("Hello" + " " + "World!");
console.log(5 + "55");
console.log(5 + 55);
console.log(5 + "hello world!");
console.log(`hello world ${bbb + ccc}`); // шаблонные литералы - интерполяция
