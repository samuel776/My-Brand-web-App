function validation() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var error_message = document.getElementById("error_message");
  var text;

  setTimeout(() => (error_message.style.display = "none "), 4000);

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
  if (phone.length < 10 && typeof phone !== "number") {
    error_message.style.display = "block";
    text = "Please Enter a valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 2) {
    error_message.style.display = "block";
    text = "Message shoul be greater than 2 characters";
    error_message.innerHTML = text;
    return false;
  } else {
    submitMessage();
  }
}
document.querySelector("#myform").onsubmit = (e) => {
  e.preventDefault();
  validation();
};

const myform = document.querySelector("#myform");
const submitMessage = () => {
  const name = myform["name"].value;
  const email = myform["email"].value;
  const phone = myform["phone"].value;
  const message = myform["message"].value;

  db.collection("My-Brand-web-App")
    .doc("messages")
    .set({
      name,
      email,
      phone,
      message,
    })
    .then(function () {
      myform.reset();
      document.querySelector(".alert").innerHTML =
        "Your message has been sent!";
      document.querySelector(".alert").style.display = "block";
      setTimeout(function () {
        document.querySelector(".alert").style.display = "none";
      }, 4000);
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};
