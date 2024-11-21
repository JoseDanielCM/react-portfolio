export const initScrollObserver = () => {
    // Detectar el tamaño del viewport
    const smallViewport = window.matchMedia('(max-width: 768px)'); // Viewports menores o iguales a 768px

    // Configurar el threshold según el viewport
    const options = smallViewport.matches
        ? { threshold: 0.1 } // Viewport pequeño: activa cuando el 10% sea visible
        : { threshold: 0.3 }; // Viewport grande: activa cuando el 50% sea visible

    // Seleccionar secciones y enlaces de la navbar
    const sections = document.querySelectorAll('.main-section');
    console.log(sections);

    // Crear el observer con las opciones dinámicas
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            });
        },
        options // Opciones según el tamaño del viewport
    );

    // Observar todas las secciones
    sections.forEach((section) => observer.observe(section));

    // Limpiar el observer cuando ya no sea necesario
    return () => {
        observer.disconnect();
    };
};
