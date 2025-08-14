// Manejo del navbar dinámico
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const navButton = document.querySelector('.nav-button');
    const logoTransparent = document.querySelector('.logo-transparent');
    const logoScrolled = document.querySelector('.logo-scrolled');
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
        
        // Cambiar logo
        if (logoTransparent && logoScrolled) {
            logoTransparent.style.display = 'block';
            logoScrolled.style.display = 'none';
        }
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
        
        // Cambiar logo
        if (logoTransparent && logoScrolled) {
            logoTransparent.style.display = 'none';
            logoScrolled.style.display = 'block';
        }
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

    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(tabId) {
        // Desactivar todas las tabs
        tabButtons.forEach(button => {
            button.classList.remove('active', 'text-primary-blue');
            button.classList.add('text-gray-500');
            const indicator = button.querySelector('.active-indicator');
            if (indicator) {
                indicator.style.transform = 'scaleX(0)';
            }
        });
        
        // Ocultar todos los contenidos
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
        });
        
        // Activar la tab seleccionada
        const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const selectedContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);

        if (selectedButton) {
            selectedButton.classList.add('active', 'text-primary-blue');
            selectedButton.classList.remove('text-gray-500');
            const indicator = selectedButton.querySelector('.active-indicator');
            if (indicator) {
                indicator.style.transform = 'scaleX(1)';
            }
        }
        
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
            selectedContent.classList.add('active');
        }
    }

    // Añadir event listeners a todos los botones de tab
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Activar la primera tab por defecto
    activateTab('asistentes');
});

// Rotación de imágenes del hero
function rotateHeroImages() {
    const images = document.querySelectorAll('.fade-image');
    let currentIndex = 1;
    const totalImages = images.length;

    setInterval(() => {
        images.forEach(img => {
            img.style.opacity = '0';
        });
        
        const nextImage = document.querySelector(`.fade-image[data-index="${currentIndex}"]`);
        if (nextImage) {
            nextImage.style.opacity = '0.85';
        }
        
        currentIndex = currentIndex >= totalImages ? 1 : currentIndex + 1;
    }, 3500); // Cambia cada 3.5 segundos
}

// Iniciar la rotación cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    rotateHeroImages();
}); 