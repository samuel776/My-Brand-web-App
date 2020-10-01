function validation() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confpassword = document.getElementById("confpassword").value.trim();
  var error_message = document.getElementById("error_message");
  var text;

  setTimeout(() => (error_message.style.display = "none "), 3000);

  if (name.length < 3 && name === "") {
    error_message.style.display = "block";
    text = " Name should have greater than 3 characters";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    error_message.style.display = "block";
    text = " Please Enter a valid email";
    error_message.innerHTML = text;
    return false;
  }

  if (password.length < 5) {
    error_message.style.display = "block";
    text = "Weak password";
    error_message.innerHTML = text;
    return false;
  }
  if (password !== confpassword) {
    error_message.style.display = "block";
    text = "Password are not matching";
    error_message.innerHTML = text;
    return false;
  }
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

  auth.createUserWithEmailAndPassword(email, password).then(function () {
    document.getElementById("signupform").reset();
    document.querySelector(".alert").innerHTML =
      "Your account has been validated!";
    document.querySelector(".alert").style.display = "block";
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 4000);
  });
});
