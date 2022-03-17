const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
  event.preventDefault();
  const usernameWrite = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameWrite);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(usernameWrite);
}

function paintGreetings(name) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${name}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", LoginSubmit);
} else {
  paintGreetings(savedUsername);
}
