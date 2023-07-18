// простая функция
function hello(whom) {
  console.log(`Hello, ${whom}!`);
  console.log(this);
  // console.log(this === window);
}

hello("World"); // Hello, World!
