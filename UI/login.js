const url = "https://my-brand-web-app.herokuapp.com";
function validation() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var error_message = document.getElementById("error_message");
  var text;

  setTimeout(() => (error_message.style.display = "none "), 4000);

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


  fetch(`${url}/api/user/login`
    ,
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
    .then((data) => {
      console.log(data.msg)
      localStorage.setItem("loginToken",data.token);
      if(data.msg){
        error_message.style.display = "block";
        error_message.innerHTML = data.msg;
      }else{
        window.location.href="profile.html"
      }
    // document.getElementById('loginform').innerHTML = localStorage.getItem("email","hbnzsml@gmail.com")
    console.log(localStorage)
    })
   
    .catch((error) => console.log(error));
  document.getElementById("loginform").reset();

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
