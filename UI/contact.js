function validation() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var phone = document.getElementById("phone").value.trim();
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
  if (phone.length < 10 && typeof phone !== "number") {
    text = "Please Enter a valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 5) {
    text = "Message shoul be greater than 5 characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Successfully submitted");
  return true;
}
document.querySelector("#myform").onsubmit = (e) => {
  e.preventDefault();
  validation();
};
const myform = document.querySelector("#myform");
console.log(myform);
myform.addEventListener("submit", (e) => {
  e.preventDefault();

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
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
});
