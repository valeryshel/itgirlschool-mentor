// console.warn("IIFE");
// именованная функция
(function module1() {
  const a = 42;
  console.log(a);
})();

// function module1() {
//   const a = 42;
//   console.log(a);
// }
// module1();

(function module2() {
  const a = "43!";
  console.log(a);
})();

// анонимная функция
console.warn("anonymous");

(function () {
  let name = "Lera";
  console.log(name);
})();

(function () {
  let name = "Natasha";
  console.log(name);
})();

// Никаких конфликтов

// переменная доступна, хотя объявлена в другом файле
console.log(globalVariable);
