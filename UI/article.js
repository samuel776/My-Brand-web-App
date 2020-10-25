const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');

const url = "http://localhost:3000";
// const savedToken = localStorage.getItem("loginToken")
const savedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxMGRjMGJlMmViNjBlZWZhMTAzYTAiLCJpYXQiOjE2MDMzNDIwMDN9.Yvrm7BMHbwHmILPFzvFBWTYPK-Q49Dcz_vKtRopeQVI";

  if(id){
    fetch(`${url}/posts/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": savedToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        myform["myTitle"].value = data.title;
         myform["message"].value = data.description;
        
      })
      .catch((error) => console.log(error));
      const updateButton =  document.getElementById("update");
      updateButton.onclick = (e) => {
        e.preventDefault();
        const title = myform["myTitle"].value;
        const description = myform["message"].value;
      
        const article = {
          title,
          description,
        };
        updatePost(id);
      };
  }
fetch(`${url}/posts`, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "auth-token": savedToken,
  },
})
  .then((res) => res.json())
  .then((data) => {data.forEach()})
  .catch((error) => console.log(error));

function createArticle(data) {
  fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "auth-token": savedToken,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const submitForm = document.getElementById("myform");
const saveButton =  document.getElementById("save");
saveButton.onclick = (e) => {
  e.preventDefault();
  const title = myform["myTitle"].value;
  const description = myform["message"].value;

  const article = {
    title,
    description,
  };
  createArticle(article);
};
function updatePost(id) {
  const title = myform["myTitle"].value;
  const description = myform["message"].value;
  fetch(`${url}/posts/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "auth-token": savedToken,
    },
    body: JSON.stringify({
      title,
      description,
    }),
  })
    .then((data) => data.json)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
