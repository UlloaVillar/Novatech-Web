// Manejo del navbar dinámico
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const navButton = document.querySelector('.nav-button');
    let lastScroll = 0;
    let scrollTimeout;

    function makeNavbarTransparent() {
        header.style.backgroundColor = 'transparent';
        navLinks.forEach(link => {
            link.classList.remove('text-gray-700');
            link.classList.add('text-white');
        });
        navButton.classList.remove('bg-primary-blue', 'text-white');
        navButton.classList.add('bg-white', 'text-[rgb(76,46,213)]');
    }

    function makeNavbarSolid() {
        header.style.backgroundColor = 'white';
        header.classList.add('shadow-md');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });
        navButton.classList.remove('bg-white', 'text-[rgb(76,46,213)]');
        navButton.classList.add('bg-primary-blue', 'text-white');
    }

    // Inicialmente transparente
    makeNavbarTransparent();

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Limpiar el timeout anterior
        clearTimeout(scrollTimeout);

        if (currentScroll > 50) {
            makeNavbarSolid();
            
            // Configurar un nuevo timeout
            scrollTimeout = setTimeout(() => {
                if (currentScroll <= 50) {
                    makeNavbarTransparent();
                }
            }, 1000); // Esperar 1 segundo sin scroll para volver a transparente
        } else {
            makeNavbarTransparent();
        }

        lastScroll = currentScroll;
    });

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 