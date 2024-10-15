**Project: RepairTrackPro**
RepairTrackPro is a web application designed for electronic retailers to efficiently track and manage product repair records. It streamlines the repair tracking process by allowing admins to log customer and product details, monitor the status of repairs, and manage timelines, all from a centralized interface. The project uses Firebase Firestore for real-time data storage and retrieval, ensuring that records are securely stored and easily accessible.

**Key Features:**
**Role-Based Access Control:**

Admin Role: Admins can add, update, and manage customer and product repair records.
Employee Role: Employees have view-only access to the repair records, ensuring proper division of responsibilities.
Repair Record Management:

Capture important details such as customer name, contact information, product name, submission date, expected return date, and the current repair status.
Status options include: Pending, In Progress, Repaired, and Returned to Customer.
Firebase Integration:

The application leverages Firebase for authentication (optional for future development) and Firestore for database management, allowing real-time updates and secure storage of repair records.
Firestore is used to store and retrieve repair data, offering scalability and reliability.
Responsive Design:

The UI is optimized for both desktop and mobile views, ensuring users can interact with the system across different devices.
User-Friendly Interface:

The form submission process is simple and intuitive, allowing admins to easily enter and manage data.
Users are alerted upon successful submission of records, enhancing user experience.
Technology Stack:

Frontend: HTML, CSS, and JavaScript (ES6+).
Backend & Database: Firebase Firestore.
Hosting: Can be hosted using Firebase Hosting or any static site hosting platform.

**Installation Instructions:**
Clone the repository:
git clone https://github.com/MuhammadArsalan472121/RecordTrack_Web.git

Navigate to the project directory:
cd RecordTrack_Web

Ensure you have Firebase CLI installed or include the Firebase SDK in your HTML files using the provided CDN.
Open index.html to launch the application in your browser.
