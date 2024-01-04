// module1.js

// При добавлении ключевого слова export
// выражение становится экспортированным.
export function sum(a, b) {
  return a + b;
}

// Экспортировать можно не только функции,
// но и константы:
export const SOME_SETTINGS_FLAG = false;
export const user = {};

export const user2 = {
  name: "Unona",
};
export const books = ["Война и мир", "Мастер и Маргарита"];

// multiple

// Функция может не иметь имени,
// потому что используется экспорт по умолчанию.
export default function (a, b) {
  return a * b;
}
