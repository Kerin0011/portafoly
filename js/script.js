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

    // 4. Manejo del formulario de contacto (AJAX para mejor UX)
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Evita la redirección a otra página
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                    formStatus.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
                    formStatus.style.color = "#16a34a";
                    formStatus.style.display = "block";
                    contactForm.reset();
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                    formStatus.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
                    formStatus.style.color = "#dc2626";
                    formStatus.style.display = "block";
                }
            } catch (error) {
                formStatus.textContent = "Error: Could not send message. Please try again later.";
                formStatus.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
                formStatus.style.color = "#dc2626";
                formStatus.style.display = "block";
            } finally {
                btn.innerHTML = originalBtnText;
                btn.disabled = false;
                
                // Ocultar mensaje de estado después de unos segundos
                setTimeout(() => {
                    formStatus.style.display = "none";
                }, 5000);
            }
        });
    }
});