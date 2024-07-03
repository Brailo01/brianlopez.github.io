document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purchase-form');
    const modal = document.getElementById('gracias');
    const closeButton = document.querySelector('.close-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            form.reset();
        }
    });
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})