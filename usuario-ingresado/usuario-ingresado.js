document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('user-icon');
    const fileInput = document.getElementById('file-input');

    userIcon.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                userIcon.src = e.target.result;
            };
            reader.readAsDataURL(file);
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