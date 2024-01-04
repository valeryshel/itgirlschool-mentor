let num1 = document.getElementById("num1add").value;
let num2 = document.getElementById("num2add").value;
let result = document.getElementById("result");

let multiplyNumbers = () => (result.innerHTML = num1 * num2);

let divideNumbers = () => {
  if (num2 == 0) {
    alert("На ноль делить нельзя!");
    result.innerHTML = "Цыц!";
    return;
  }
  result.innerHTML = num1 / num2;
};
