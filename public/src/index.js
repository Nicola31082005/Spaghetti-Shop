document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('logout-link');
   
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();

            const confirmLogout = confirm('Are you sure you want to log out?');
            if (!confirmLogout) return;

            window.location.href = "/logout";
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {

    const toggleIngredientsButton = document.getElementById('toggle-ingredients');

    console.log(toggleIngredientsButton);

    toggleIngredientsButton.addEventListener('click', function () {
        const ingredientsSection = document.getElementById('ingredients-section');
        if (ingredientsSection.classList.contains('hidden')) {
          ingredientsSection.classList.remove('hidden');
        } else {
          ingredientsSection.classList.add('hidden');
        }
      });


})
