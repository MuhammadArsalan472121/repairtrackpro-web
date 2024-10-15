const container = document.getElementById('container');
const loginBtn = document.getElementById('SignIn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent form submission
    container.classList.remove("active");
    window.location.href = "./admin.html";  // Navigate to admin.html
});
