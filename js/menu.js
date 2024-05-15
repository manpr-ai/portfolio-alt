document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.querySelector('.menu__overlay');
    var closeButton = document.querySelector('.close__button');

    var menuButtons = document.querySelectorAll('.menu__button');

    menuButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
            closeButton.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'none' : 'block';
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            closeButton.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        closeButton.style.display = 'none';
    });
});
