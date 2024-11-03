import { signInWithEmailAndPassword ,getAuth} from "./firebase.js";


const auth = getAuth();

let signInPassword = document.getElementById("signInPassword")
let  signInEmail = document.getElementById("signInEmail")

let loginBtn = document.getElementById("loginBtn")


loginBtn.addEventListener("click",()=>{
    if(signInEmail.value.trim() && signInPassword.value.trim()){
        signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          
        });
      

    }
    else{
        console.log("insert your data");
        
    }

    location.href = "profile.html"
})