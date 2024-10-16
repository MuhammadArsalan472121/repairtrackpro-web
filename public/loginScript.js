import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { db } from './firebase.js'; // Firebase configuration

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // Initialize Firebase Auth
    const auth = getAuth();

    // Sign-in form submission event
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please fill in both fields.');
            return;
        }

        // Firebase authentication sign-in
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                const user = userCredential.user;
                alert(`Welcome ${user.email}`);
                window.location.href = "./adminOptions.html"; // Redirect to admin options
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    });
});




// const container = document.getElementById('container');
// const loginBtn = document.getElementById('SignIn');

// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault();  // Prevent form submission
//     container.classList.remove("active");
//     window.location.href = "./adminOptions.html";  // Navigate to adminOptions.html
// });
