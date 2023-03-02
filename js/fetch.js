document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://api.github.com/users/valeryshel", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      // "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    // .then((user) => console.log(user))
    // .then((user) => console.log(user.name))
    .then((user) => {
      console.log(user);
      console.log(user.name);
      console.log(user.avatar_url);
      document.getElementById("avatar").src = user.avatar_url;
      document.getElementById("userName").innerHTML = user.name;
    })
    .catch((error) => console.log(error));
});

function onSearch() {
  let gitUser = document.getElementById("userSearch").value;
  fetch(`https://api.github.com/users/${gitUser}`)
    // fetch("https://api.github.com/users/" + gitUser)
    // fetch("https://api.github.com/users/?user=" + gitUser)
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("avatarSearch").src = user.avatar_url;
      document.getElementById("userNameSearch").innerHTML = user.name;
    })
    .catch((error) => console.log(error));
}

console.log(testVar);
var testVar;
// testVar = "test var";

console.log(testLet);
let testLet;
// testLet = "test let";
