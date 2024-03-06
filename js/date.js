function calculateAge(birthDate) {
  let currentDate = Date.now();
  console.log(currentDate);
  let diffInMilliseconds = currentDate - birthDate;
  console.log(diffInMilliseconds);

  // Конвертируем разницу в миллисекундах в годы
  let ageDate = new Date(diffInMilliseconds);
  console.log(ageDate);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(ageDate.getUTCFullYear());

  return age;
}

let birthDate = new Date("1990-05-15");
let age = calculateAge(birthDate);
console.log("Возраст: " + age + " лет");
