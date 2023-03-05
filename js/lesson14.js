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

//! переменные
var a = "var"; //устаревшее
let b = "let";
const RED = "red";

var d; // var объявлена, но не назначена
console.log(d);
let e;
console.log(e);
// let e = 20; // повторное объявление let вызовет ошибку, нужно переназначить переменную
// e = 20;

// console.log(INTEGER);
// const INTEGER; // const без назначения выдает ошибку
//const INTEGER = 30;
var d = 10; // var можно объявить и назначить повторно

//! Конкатенация и интерполяция
console.log("Hello" + " " + "World!");
console.log(5 + "55");
console.log(5 + 55);
console.log(5 + "hello world!");
console.log(`hello world ${bbb + ccc}`); // шаблонные литералы - интерполяция

//! логические операторы
//* ИЛИ "||" находит первое истинное значение
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(1 || 0); // 1
console.log(true || "no matter what"); // true
console.log(null || 1); // 1 (первое истинное значение)
console.log(null || 0 || 1); // 1 (первое истинное значение)
console.log(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

//* И «&&» находит первое ложное значение
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
// Если первый операнд истинный,
// И возвращает второй:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0
// Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.

console.log(1 && 2 && null && 3); // null
// Когда все значения верны, возвращается последнее
console.log(1 && 2 && 3); // 3

//?Приоритет оператора && больше, чем у || так что он выполняется раньше.

//* a && b || c && d = (a && b) || (c && d);

//! !(НЕ) Оператор принимает один аргумент и выполняет следующие действия
//Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.
console.log(!true); // false
console.log(!0); // true
//? двойное НЕ !! используют для преобразования значений к логическому типу
console.log(!!"non-empty string"); // true
console.log(!!null); // false

//? Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.

//* PRACTICE
console.log(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || (2 && 3) || 4);
