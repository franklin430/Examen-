document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const modalidad = document.getElementById("modalidad");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreIngresado = nombre.value.trim();
        const modalidadElegida = modalidad.value;

        if (nombreIngresado === "") {
            resultado.textContent = "Por favor, ingrese su nombre.";
            return;
        }

        if (modalidadElegida === "") {
            resultado.textContent = "Seleccione una modalidad.";
            return;
        }

        if (modalidadElegida === "presencial") {
            resultado.textContent =
                "¡Hola " + nombreIngresado +
                "! Su inscripción es presencial. Le esperamos en el aula.";
        } else if (modalidadElegida === "virtual") {
            resultado.textContent =
                "¡Hola " + nombreIngresado +
                "! Su inscripción es virtual. Recibirá el enlace para ingresar.";
        }
    });
});