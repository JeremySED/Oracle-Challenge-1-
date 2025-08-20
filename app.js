let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Debes escribir un nombre.");
        return;
    }
 let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombre)) {
        alert("Solo se permiten letras y espacios.");
        return;
    }
if (amigos.includes(nombre)) {
        alert("El nombre '" + nombre + "' ya está en la lista y no se puede repetir.");
        return;
    }
}