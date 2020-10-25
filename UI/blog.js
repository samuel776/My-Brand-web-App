const container = document.querySelector(".container")
console.log(container)
const url = "http://localhost:3000";
// const savedToken = localStorage.getItem("loginToken")
const savedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxMGRjMGJlMmViNjBlZWZhMTAzYTAiLCJpYXQiOjE2MDMzNDIwMDN9.Yvrm7BMHbwHmILPFzvFBWTYPK-Q49Dcz_vKtRopeQVI";

  function getPosts(){
    fetch(`${url}/posts`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": savedToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let outPut = "Posts";
        data.forEach((post)=>{
          outPut += `<div>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
        </div>`
          
         })
        container.innerHTML= outPut;
       })
       .catch((error) => console.log(error)) 
  }
  getPosts();
