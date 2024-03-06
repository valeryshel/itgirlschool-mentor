//Задание 11
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
//У вас есть массив numbers, содержащий числа от 1 до 10.
// Напишите функцию filterEvenNumbers, которая принимает этот массив в качестве аргумента и выводт в консоль новый массив, содержащий только чётные числа из исходного массива, с использованием метода filter().

const evenNumbers = [];

numbers.filter(function filterEvenNumbers(elem) {
  if (elem % 2 === 0) {
    evenNumbers.push(elem);
  }
});

console.log(evenNumbers);
