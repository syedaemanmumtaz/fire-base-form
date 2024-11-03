import { auth, onAuthStateChanged, sendEmailVerification, updateProfile, signOut } from "./firebase.js";

const profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
    if (user) {
        profilePage.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h2>Welcome, ${user.displayName || "User"}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Email Verified: ${user.emailVerified ? "Yes" : "No"}</p>
                    <img src="${user.photoURL || 'img/download.jpg'}" width="55px" alt="Profile Picture" />
                    <button id="verifyEmail" class="btn btn-warning mt-3">Verify Email</button>
                    <button id="updateProfile" class="btn btn-secondary mt-3">Update Profile</button>
                    <button id="signOut" class="btn btn-danger mt-3">Sign Out</button>
                </div>
            </div>`;

        document.getElementById("verifyEmail").addEventListener("click", () => {
            sendEmailVerification(auth.currentUser).then(() => alert("Verification email sent."));
        });

        document.getElementById("updateProfile").addEventListener("click", () => {
            updateProfile(auth.currentUser, { displayName: "Updated User" });
        });

        document.getElementById("signOut").addEventListener("click", () => {
            signOut(auth).then(() => location.href = "signin.html");
        });
    } else {
        location.href = "signin.html";
    }
});
