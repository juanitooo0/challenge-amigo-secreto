let amigos = [];

//Añadir un amigo
function agregarAmigo() {
    //Capturar el valor de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    //Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar array de amigos
    amigos.push(nombre);

    //Limpiar el campo de entrada
    input.value = "";

    //Actualizar la lista en el HTML
    actualizarListaAmigos();
}

//Actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    //Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    //Limpiar lista
    lista.innerHTML = "";

    //Iterar sobre el arreglo y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Sortear un amigo aleatorio:
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos agregados para sortear.");
        return;
    }

    //Indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}