const adminButton = document.getElementById('adminLoginButton');

adminButton.addEventListener('click', function () {
    console.log('Admin button clicked!'); // This will show in the console when the button is clicked
    window.location.href = './login.html'; // Redirect to admin.html
});


document.getElementById('recordsButton').addEventListener('click', function () {
    // Redirect to the Records page (update URL accordingly)
    window.location.href = './records.html'; // Replace with your actual records page
});
