function validation() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";
  error_message.style.display = "flex";
  setTimeout(() => (error_message.style.display = "none "), 3000);

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

  // alert("Your are Welcome!");
  // return true;
}
document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  validation();
};

const loginform = document.querySelector("#loginform");
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginform["email"].value;
  const password = loginform["password"].value;
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtNinm6tDnKTRYjv7QhC3xjHK45aHXavQ",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  // const email = loginform["email"].value;
  // const password = loginform["password"].value;
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then(() => {
  //     console.log("log in successfull");
  //   })
  //   .catch(function (error) {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });
});
