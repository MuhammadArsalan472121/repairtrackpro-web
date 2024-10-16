// Redirect buttons to respective pages
document.getElementById('addRecordButton').addEventListener('click', function () {
    window.location.href = './addRecord.html'; // Redirect to the Add Record screen
});

document.getElementById('searchRecordButton').addEventListener('click', function () {
    window.location.href = './searchRecord.html'; // Redirect to the Search Record screen (yet to be created)
});

document.getElementById('updateRecordButton').addEventListener('click', function () {
    window.location.href = './updateRecord.html'; // Redirect to the Update Record screen (yet to be created)
});
