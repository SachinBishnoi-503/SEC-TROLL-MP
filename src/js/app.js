function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const isMenuOpen = menu.classList.contains('translate-x-0');
    menu.classList.toggle('translate-x-0', !isMenuOpen);
    menu.classList.toggle('translate-x-full', isMenuOpen);
}

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});