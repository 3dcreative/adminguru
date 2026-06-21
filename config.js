// GANTI DENGAN URL WEB APP MILIK ANDA!
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzEsG1bjcrk_2YmVnKQltOYP0oXtHKwmmKH40x7l--0Rry9NCJRa2j0mydN0SoCqkVx/exec';

// Fungsi Notifikasi Global
function showAlert(tipe, message, elementId) {
    const alertBox = document.getElementById(elementId);
    alertBox.style.display = 'block';
    alertBox.style.backgroundColor = tipe === 'error' ? '#e74c3c' : '#2ecc71';
    alertBox.innerText = message;
    setTimeout(() => { alertBox.style.display = 'none'; }, 4000);
}

// Fungsi Logout Global
function logoutGlobal() {
    localStorage.removeItem('userAdminGuru');
    window.location.href = 'login.html';
}

// Register PWA Service Worker
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');