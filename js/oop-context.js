// простая функция
function hello(whom) {
  console.log(`Hello, ${whom}!`);
  console.log(this); //Window
  console.log(this === window);
}

hello("World"); // Hello, World!
