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
        let outPut = "";
        console.log(data);
        data.forEach((post)=>{
          outPut += `<div class="title"> 
          <p><b>Lorem ipsum dolor</b></p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Contrary to
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source. Lorem
                  Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                  Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                  in section 1.10.32.
                </p>
              </article>
              <div class="icons1">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt"></i>
              </div>
            </div>
          </div> `
          
         })
         container.innerHTML = outPut;
       })
       .catch((error) => console.log(error)) 
  }
  getPosts();