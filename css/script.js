document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensaje de bienvenida (Tarea 5.2)
    console.log("¡Bienvenido a mi portafolio interactivo!");

    const btnToggleInfo = document.getElementById('btn-toggle-info');
    const btnChangeText = document.getElementById('btn-change-text');
    const extraInfo = document.getElementById('extra-info');
    const mainDescription = document.getElementById('main-description');

    // 2. Cambiar el texto de un párrafo (Tarea 5.1)
    if (btnChangeText && mainDescription) {
        btnChangeText.addEventListener('click', () => {
            mainDescription.textContent = "I am a passionate developer focused on creating innovative and efficient digital solutions.";
            mainDescription.style.color = "var(--secondary-color)";
            btnChangeText.innerHTML = '<i class="fas fa-check"></i> Description Changed';
            // Opcional: deshabilitar tras el primer clic
            btnChangeText.style.opacity = "0.7";
        });
    }

    // 3. Efecto dinámico: Mostrar/Ocultar contenido (Tarea 5.3)
    if (btnToggleInfo && extraInfo) {
        btnToggleInfo.addEventListener('click', function () {
            const isNowHidden = extraInfo.classList.toggle('hidden');
            
            // Actualizamos el texto e icono según el estado
            this.innerHTML = isNowHidden 
                ? '<i class="fas fa-plus"></i> Show more info' 
                : '<i class="fas fa-minus"></i> Show less';
            
            this.setAttribute('aria-expanded', !isNowHidden);
        });
    }

    // Lógica del Menú Hamburguesa
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');

    if (mobileMenuBtn && navUl) {
        mobileMenuBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
            // Cambiar icono entre barras y X
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Cerrar menú al hacer clic en cualquier enlace
        navUl.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navUl.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    }
});
