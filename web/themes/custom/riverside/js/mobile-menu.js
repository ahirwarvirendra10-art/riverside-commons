(function (Drupal, once) {
    Drupal.behaviors.mobileMenu = {
        attach: function (context) {
            once('mobile-menu', '.menu-toggle', context).forEach(function (button) {
                const menu = document.querySelector('.main-navigation');
                button.addEventListener('click', function () {
                    menu.classList.toggle('active');
                });

            });
        }
    };
})(Drupal, once);