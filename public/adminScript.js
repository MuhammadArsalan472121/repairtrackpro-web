// adminScript.js
import { db } from './firebase.js'; // Adjust the path based on your structure
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'; // Import Firestore methods

document.getElementById('combinedForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const customerId = document.getElementById('customerId').value;
    const productName = document.getElementById('productName').value;
    const submissionDate = document.getElementById('submissionDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const status = document.getElementById('status').value;

    // Prepare the data object
    const formData = {
        customerName: name,
        contact: contact,
        customerId: customerId,
        productName: productName,
        submissionDate: submissionDate,
        expectedReturnDate: returnDate,
        status: status,
    };

    try {
        // Save formData to Firestore
        const docRef = await addDoc(collection(db, "repairs"), formData);
        console.log("Document written with ID: ", docRef.id);
        alert("Data submitted successfully!");

        // Clear the form
        document.getElementById('combinedForm').reset();
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error submitting the data. Please try again.");
    }
});
