const  url = "http://localhost:3000";
// const savedToken = localStorage.getItem("loginToken")
const savedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxMGRjMGJlMmViNjBlZWZhMTAzYTAiLCJpYXQiOjE2MDMzNDIwMDN9.Yvrm7BMHbwHmILPFzvFBWTYPK-Q49Dcz_vKtRopeQVI"
fetch(`${url}/posts`, {
  method:'GET',
  headers:{
    "content-type":"application/json",
    "auth-token": savedToken,
  },
  
}).then(res =>res.json()).then(data =>console.log(data)) 