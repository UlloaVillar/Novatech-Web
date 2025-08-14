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
    activateTab('excels');

    // Configurar videos para que se vean más caseros
    function setupVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            // Aumentar velocidad de reproducción (1.5x más rápido)
            video.playbackRate = 1.5;
            
            // Añadir un poco de "ruido" visual para que se vea más casero
            video.style.filter = 'contrast(1.1) brightness(1.05) saturate(1.1)';
            
            // Asegurar que estén centrados
            video.style.objectPosition = 'center';
        });
    }

    // Configurar videos cuando se cambie de tab
    function setupTabVideos() {
        setTimeout(() => {
            setupVideos();
        }, 100);
    }

    // Configurar videos inicialmente
    setupVideos();

    // Configurar videos cada vez que se active una tab
    const originalActivateTab = activateTab;
    activateTab = function(tabId) {
        originalActivateTab.call(this, tabId);
        setupTabVideos();
    };
});

// Preload inteligente de imágenes críticas
function preloadCriticalImages() {
    const criticalImages = [
        'images/hero-1.png',
        'images/hero-2.png', 
        'images/hero-3.png',
        'images/Group-9.png',
        'images/Group-8.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Sistema de rotación de imágenes del hero optimizado
function setupHeroImageRotation() {
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length === 0) return;
    
    let currentIndex = 0;
    const totalImages = heroImages.length;
    
    // Asegurar que la primera imagen esté visible
    heroImages.forEach((img, index) => {
        if (index === 0) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
        }
    });
    
    function rotateImages() {
        // Ocultar imagen actual
        heroImages[currentIndex].style.opacity = '0';
        
        // Siguiente imagen
        currentIndex = (currentIndex + 1) % totalImages;
        
        // Mostrar nueva imagen
        heroImages[currentIndex].style.opacity = '1';
    }
    
    // Rotar cada 5 segundos
    setInterval(rotateImages, 5000);
}

// Iniciar la rotación cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Preload de imágenes críticas para mejorar performance
    preloadCriticalImages();
    
    // Configurar rotación de imágenes del hero
    setupHeroImageRotation();
    
    // Configurar videos
    setupVideos();
    
    // Configurar tabs
    activateTab('excels');
}); 