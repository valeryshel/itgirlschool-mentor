let arrNumbers: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < arrNumbers.length; i++) {
  const url = `https://jsonplaceholder.typicode.com/users/${arrNumbers[i]}`;

  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// пример 2

const numbers1: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i];
}

console.log(`Сумма чисел массива: ${sum}`);


let someArray1: number[] = [1, 2, 3];
let someArray2: string[] = ['asd', 'sad'];
let someArray3: string[] = [];
let someArray4: number[][] = [[1, 2, 3], []];