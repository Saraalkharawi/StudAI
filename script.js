document.addEventListener("DOMContentLoaded", function () {

    // Om användaren inte är inloggad och försöker gå till studai.html, skicka till login.html
    if (!localStorage.getItem('loggedIn') && window.location.pathname.includes("studai.html")) {
        window.location.href = 'login.html';
    }

    // Visa användarens e-post på sidan om det finns
    const userEmail = document.getElementById('userEmail');
    if (userEmail) {
        userEmail.textContent = localStorage.getItem('userEmail');
    }

    // Logga ut-knapp
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        });
    }

    // Ta bort all hantering av login- och signup-formulär här för att skicka data till PHP istället
    // Ingen blockering av formulär med e.preventDefault()

});
