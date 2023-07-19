const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar'); // Selecciona la navegación directamente

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Agrega o quita la clase 'active' en la navegación (navbar)
});

