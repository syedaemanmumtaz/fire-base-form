import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

const signUpBtn = document.getElementById("signupBtn");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupError = document.getElementById("signupError");

const loginBtn = document.getElementById("loginBtn");
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const signinError = document.getElementById("signinError");

if (signUpBtn) {
    signUpBtn.addEventListener("click", async () => {
        signupError.classList.add("d-none");
        try {
            await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value);
            location.href = "signin.html";
        } catch (error) {
            signupError.textContent = error.message;
            signupError.classList.remove("d-none");
        }
    });
}

if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
        signinError.classList.add("d-none");
        try {
            await signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value);
            location.href = "profile.html";
        } catch (error) {
            signinError.textContent = error.message;
            signinError.classList.remove("d-none");
        }
    });
}

