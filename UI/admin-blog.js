const container = document.querySelector(".bigContainer");
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
        let outPut = "";
        console.log(data);
        data.forEach((post)=>{
          outPut += `<div class="container">
          <div class="title"> 
            <p><b>${post.title}</b></p>
          </div>
          <div class="image1">
            <div class="blog">
              <img
                src="images/Boosting_Pharmaceutical_Production_FR_2_web.jpg"
                alt="Boosting Pharmaceutical Production"
              />
  
              <div class="article1">
                <article>
                  <p>
                    ${post.description}
                  </p>
                </article>
                <div class="icons1">
                  <i class="far fa-edit"></i>
                  <i class="far fa-trash-alt" onclick = "deletePost('${post._id}')"></i>
                   <a href="admViewArticle.html">View more..</a> 
                </div>
              </div>
            </div> 
        </div>`
          
         })
          container.innerHTML = outPut;
       })
       .catch((error) => console.log(error)) 
  }
  getPosts();
  function deletePost(id){
    fetch(`${url}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": savedToken,
      },
    })
    .then(data =>{location.reload()})
  }