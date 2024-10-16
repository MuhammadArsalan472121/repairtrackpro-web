import { db } from './firebase.js'; // Import Firebase configuration
import { collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'; // Import Firestore functions
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');

    // Ensure all elements exist
    if (!searchForm || !searchInput || !resultsContainer) {
        console.error("Form, input, or results container not found!");
        return;
    }

    // Event listener for form submission
    searchForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const searchTerm = searchInput.value.trim(); // Get the search input
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }

        try {
            // Query Firestore for matching records
            const q = query(
                collection(db, 'repairs'),
                where('customerName', '==', searchTerm) // Search by customerName
            );
            const q2 = query(
                collection(db, 'repairs'),
                where('customerId', '==', searchTerm) // Search by customerId
            );

            const customerNameSnapshot = await getDocs(q);
            const customerIdSnapshot = await getDocs(q2);
            // Clear any previous results
            resultsContainer.innerHTML = '';

            if (customerNameSnapshot.empty && customerIdSnapshot.empty) {
                resultsContainer.innerHTML = `<p>No records found for '${searchTerm}'</p>`;
                return;
            }

            // Display the search results
            customerNameSnapshot.forEach((doc) => {
                const data = doc.data();
                const resultItem = `
                    <div class="result-item">
                        <h3>Customer: ${data.customerName}</h3>
                        <p>Contact: ${data.contact}</p>
                        <p>Customer ID: ${data.customerId}</p>
                        <p>Product: ${data.productName}</p>
                        <p>Repairing Shop Details: ${data.repairingShopDetails}</p>
                        <p>Submission Date: ${data.submissionDate}</p>
                        <p>Expected Return Date: ${data.expectedReturnDate}</p>
                        <p>Status: ${data.status}</p>
                    </div>
                `;
                resultsContainer.innerHTML += resultItem;
            });
             // Display the search results for customerId
             customerIdSnapshot.forEach((doc) => {
                const data = doc.data();
                const resultItem = `
                    <div class="result-item">
                        <h3>Customer: ${data.customerName}</h3>
                        <p>Contact: ${data.contact}</p>
                        <p>Customer ID: ${data.customerId}</p>
                        <p>Product: ${data.productName}</p>
                        <p>Repairing Shop Details: ${data.repairingShopDetails}</p>
                        <p>Submission Date: ${data.submissionDate}</p>
                        <p>Expected Return Date: ${data.expectedReturnDate}</p>
                        <p>Status: ${data.status}</p>
                    </div>
                `;
                resultsContainer.innerHTML += resultItem;
            });
        } catch (error) {
            console.error('Error searching records: ', error);
            alert('Error retrieving records. Please try again.');
        }
    });
});
