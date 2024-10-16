import { db } from './firebase.js'; // Import Firebase configuration
import { collection, query, where, getDocs, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'; // Import Firestore functions

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const updateSection = document.getElementById('updateSection');
    const updateForm = document.getElementById('updateForm');

    // Event listener for form submission
    searchForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const searchTerm = searchInput.value.trim(); // Get the search input
        if (!searchTerm) {
            alert('Please enter a Customer ID.');
            return;
        }

        try {
            // Query Firestore for matching records
            const q = query(
                collection(db, 'repairs'),
                where('customerId', '==', searchTerm) // Search by customerId
            );

            const querySnapshot = await getDocs(q);
            resultsContainer.innerHTML = ''; // Clear previous results

            if (querySnapshot.empty) {
                resultsContainer.innerHTML = `<p>No records found for Customer ID '${searchTerm}'</p>`;
                return;
            }

            // Display the search results
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                resultsContainer.innerHTML = `
                    <div class="result-item">
                        <h3>Customer: ${data.customerName}</h3>
                        <p>Contact: ${data.contact}</p>
                        <p>Product: ${data.productName}</p>
                        <p>Submission Date: ${data.submissionDate}</p>
                        <p>Expected Return Date: ${data.expectedReturnDate}</p>
                        <p>Status: ${data.status}</p>
                    </div>
                `;
                // Populate the update form with existing data
                document.getElementById('recordId').value = doc.id;
                document.getElementById('customerName').value = data.customerName;
                document.getElementById('contact').value = data.contact;
                document.getElementById('productName').value = data.productName;
                document.getElementById('repairingShopDetails').value = data.repairingShopDetails;
                document.getElementById('submissionDate').value = data.submissionDate;
                document.getElementById('expectedReturnDate').value = data.expectedReturnDate;
                document.getElementById('status').value = data.status;

                // Show the update section
                updateSection.style.display = 'block';
            });
        } catch (error) {
            console.error('Error searching records: ', error);
            alert('Error retrieving records. Please try again.');
        }
    });

    // Event listener for update form submission
    updateForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const recordId = document.getElementById('recordId').value;

        // Prepare the data object
        const updatedData = {
            customerName: document.getElementById('customerName').value,
            contact: document.getElementById('contact').value,
            productName: document.getElementById('productName').value,
            repairingShopDetails: document.getElementById('repairingShopDetails').value,
            submissionDate: document.getElementById('submissionDate').value,
            expectedReturnDate: document.getElementById('expectedReturnDate').value,
            status: document.getElementById('status').value,
        };

        try {
            // Update the document in Firestore
            const recordRef = doc(db, 'repairs', recordId);
            await updateDoc(recordRef, updatedData);
            alert('Record updated successfully!');
            updateForm.reset(); // Reset the form
            resultsContainer.innerHTML = ''; // Clear results
            updateSection.style.display = 'none'; // Hide update section
        } catch (error) {
            console.error('Error updating document: ', error);
            alert('Error updating the record. Please try again.');
        }
    });
});
