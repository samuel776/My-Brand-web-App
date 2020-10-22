const url = "https://my-brand-web-app.herokuapp.com";

function validation(options) {
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
// document.querySelector("#signupform").onsubmit = (e) => {
//   e.preventDefault();
//   validation();
// };

const signupform = document.querySelector("#signupform");
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signupform["name"].value;
  const email = signupform["email"].value;
  const password = signupform["password"].value;
  const confpassword = signupform["confpassword"].value;

  const signUpData = {
    name,
    email,
    password,
  };
  validation(signUpData);
  // fetchData(signUpData)
  fetch("http://localhost:3000/api/user/register", {
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(signUpData),
  })
    .then(handleResponse)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  console.log(signUpData);
  // auth.createUserWithEmailAndPassword(email, password).then(function () {
  //   document.getElementById("signupform").reset();
  //   document.querySelector(".alert").innerHTML =
  //     "Your account has been validated!";
  //   document.querySelector(".alert").style.display = "block";
  //   setTimeout(function () {
  //     document.querySelector(".alert").style.display = "none";
  //   }, 4000);
  // });
});
function fetchData(data) {
  console.log(data);
}
function handleResponse(response) {
  let contentType = response.headers.get("content-type");
  if (contentType.includes("application/json")) {
    return response.json();
  } else if (contentType.includes("text/html")) {
    return response.text();
  } else throw new Error("type not supported");
}
