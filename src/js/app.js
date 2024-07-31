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

    document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor links with hashes
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth" // Smooth scrolling
                });
            }
        });
    });
  });