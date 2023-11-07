const signup = document.getElementById("signUp");
const signupcontainer = document.getElementById("signUpContainer");
const login = document.getElementById("logIn");
const logincontainer = document.getElementById("logInContainer");


signup.addEventListener("click", () => {
  signupcontainer.classList.remove("d-none");
  signupcontainer.classList.add("d-flex");
  logincontainer.classList.remove("d-flex");
  logincontainer.classList.add("d-none");
});

login.addEventListener("click", () => {
  signupcontainer.classList.remove("d-flex");
  signupcontainer.classList.add("d-none");
  logincontainer.classList.remove("d-none");
  logincontainer.classList.add("d-flex");
});