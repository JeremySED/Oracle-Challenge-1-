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
     amigos.push(nombre);

    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = "";
}
    function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSecreto;

    lista.innerHTML = "";

    amigos = [];
}

