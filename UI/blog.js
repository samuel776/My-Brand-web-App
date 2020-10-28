const container = document.querySelector("#outPut")

const url = "http://localhost:3000";
// const savedToken = localStorage.getItem("loginToken")
const savedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxMGRjMGJlMmViNjBlZWZhMTAzYTAiLCJpYXQiOjE2MDMzNDIwMDN9.Yvrm7BMHbwHmILPFzvFBWTYPK-Q49Dcz_vKtRopeQVI";

  function getPosts(){
    
    fetch(`${url}/posts`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": savedToken
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let outPut = " ";
        data.forEach((post)=>{
          outPut += `<div class="title">
          <p><b>${post.title}</b></p>
        </div>
        <div class="image1">
          <div class="blog">
            <img
              src="images/employees_of_cosmos_pharmaceutical_company_pack_medicines_in_kenya.jpg"
              alt="employees of cosmos pharmaceutical company pack medicines in kenya"
            />

            <div class="article1">
              <article>
                <p>
                ${post.description}
                </p>
              </article>
              <div class="icons1">
                <i class="far fa-comment"><b>13 comments</b></i>
                <i class="far fa-eye"><b>20 views</b></i>
                <i class="far fa-thumbs-up"><b>12 Likes</b></i>
                <p><b>june 5, 2020</b></p>
                <a href="readArticle.html">Read more..</a>
              </div>
            </div>
          </div>
        </div>`
          
         })
        container.innerHTML= outPut;
       })
       .catch((error) => console.log(error)) 
  }
  getPosts();
  
