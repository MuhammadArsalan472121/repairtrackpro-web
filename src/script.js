// Event listener for Combined Form Submission
document.getElementById('combinedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get customer details
    const customerName = document.getElementById('name').value;  // Updated ID
    const customerContact = document.getElementById('contact').value;  // Updated ID
    const customerID = document.getElementById('customerId').value;  // Updated ID
    
    // Get product details
    const productName = document.getElementById('productName').value;
    const submissionDate = document.getElementById('submissionDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const status = document.getElementById('status').value;

    // Log customer details
    console.log(`Customer Submitted: 
        Name: ${customerName}, 
        Contact: ${customerContact}, 
        Customer ID: ${customerID}`);
    
    // Log product details
    console.log(`Product Submitted: 
        Name: ${productName}, 
        Submission Date: ${submissionDate}, 
        Expected Return Date: ${returnDate}, 
        Status: ${status}`);
    
    // Alert submission confirmation
    alert('Form submitted successfully!');
    
    // Reset the combined form after submission
    document.getElementById('combinedForm').reset();
});

const adminButton = document.getElementById('adminButton');

adminButton.addEventListener('click', function() {
    console.log('Admin button clicked!'); // This will show in the console when the button is clicked
    window.location.href = '../public/admin.html'; // Redirect to admin.html
});


document.getElementById('recordsButton').addEventListener('click', function() {
    // Redirect to the Records page (update URL accordingly)
    window.location.href = 'records.html'; // Replace with your actual records page
});
