document.addEventListener('DOMContentLoaded', function () {
    const userEmail = localStorage.getItem('userEmail');
    const users = JSON.parse(localStorage.getItem('users')) || [];


    const emailDisplay = document.getElementById('emailDisplay');
    if (userEmail) {
        emailDisplay.textContent = userEmail;
    } else {
        emailDisplay.textContent = "Not logged in";
    }

    document.getElementById('showChangePassword').addEventListener('click', () => {
        document.getElementById('passwordChangeSection').style.display = 'block';
    });

    document.getElementById('saveNewPassword').addEventListener('click', () => {
        const newPassword = document.getElementById('newPasswordInput').value.trim();
        if (newPassword.length < 4) {
            alert("Password must be at least 4 characters long.");
            return;
        }

        const updatedUsers = users.map(user => {
            if (user.email === userEmail) {
                return { email: user.email, password: newPassword };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Password updated successfully!');
        document.getElementById('passwordChangeSection').style.display = 'none';
        document.getElementById('newPasswordInput').value = '';
    });

 
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });

 
    document.getElementById('deleteAccountBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
            const remainingUsers = users.filter(user => user.email !== userEmail);
            localStorage.setItem('users', JSON.stringify(remainingUsers));
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            alert('Your account has been deleted.');
            window.location.href = 'signup.html';
        }
    });
});