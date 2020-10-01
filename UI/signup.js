function validation() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confpassword = document.getElementById("confpassword").value.trim();
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";
  error_message.style.display = "flex";
  setTimeout(() => (error_message.style.display = "none "), 3000);

  if (name.length < 3 && name === "") {
    text = " Name should have greater than 3 characters";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = " Please Enter a valid email";
    error_message.innerHTML = text;
    return false;
  }

  if (password.length < 5) {
    text = "Weak password";
    error_message.innerHTML = text;
    return false;
  }
  if (password !== confpassword) {
    text = "Password are not matching";
    error_message.innerHTML = text;
    return false;
  }
  alert(" Your account is Successfully validated ");
  return true;
}
document.querySelector("#signupform").onsubmit = (e) => {
  e.preventDefault();
  validation();
};

const signupform = document.querySelector("#signupform");
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signupform["name"].value;
  const email = signupform["email"].value;
  const password = signupform["password"].value;
  const confpassword = signupform["confpassword"].value;

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
  });
});
