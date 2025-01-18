document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('logout-link');
    console.log(logoutLink); // Verify if the element is found

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();

            const confirmLogout = confirm('Are you sure you want to log out?');
            if (!confirmLogout) return;

            window.location.href = "/logout";
        });
    }
});