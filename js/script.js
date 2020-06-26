// Login Interaction
const sendBtn = document.querySelector("#login-btn");
const usernameIn = document.querySelector("#userid");
const usernameOut = document.querySelector("#username-display");
const usernameOutNavBar = document.querySelector(".sign-in");
const passwordIn = document.querySelector("#pswrd");
const loginForm = document.querySelector("#login-form");

if (sendBtn) {
  sendBtn.addEventListener("click", createNewUsername);
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

function createNewUsername() {
  let username =
      'Currently logged in as: <br> <i class="fas fa-user"></i> ' +
      usernameIn.value,
    password = passwordIn.value;
  if (usernameIn.value === "") {
    usernameOut.innerHTML = "Please enter a username.";
  } else if (password.length < 8) {
    usernameOut.innerHTML =
      "Please enter a password that is at least 8 character long.";
  } else {
    usernameOut.innerHTML = username;
    usernameOutNavBar.innerHTML =
      '<i class="fas fa-user"></i> ' + usernameIn.value;
    Storage.setUsername(usernameIn.value);
    usernameIn.value = "";
    passwordIn.value = "";
    sendBtn.innerHTML = "Sign Out";
  }
}

class Storage {
  static setUsername(inputUsername) {
    localStorage.setItem("username", inputUsername);
  }
  static getUsername() {
    return localStorage.getItem("username");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let user = Storage.getUsername();
  if (user !== null) {
    usernameOutNavBar.innerHTML = '<i class="fas fa-user"></i> ' + user;
  }
});
