// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // captura el valor del campo de entrada
    let nombre = document.getElementById('amigo').value;
    // valida que no este vacio
    if (nombre == "") {
        alert("Por favor, inserte un nombre");
    // agrega los nombres a la lista
    } else {
        amigos.push(nombre);
        limpiar();
        mostrarAmigos();
        console.log("lista de agregados: " + amigos);
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarAmigos(){
    // limpiar la lista
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";
    // iterar sobre la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        console.log("muestra amigo: " + amigos[i])
        // agregar elementos a la lista
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    let maxAmigos = amigos.length;
    asignarTextoElemento('#listaAmigos', "");
    // validar que la lista no este vacia
    if (amigos.length == 0) {
        asignarTextoElemento('#resultado', "Ya no hay mas amigos para sortear");
    } else {
        // generar indice aleatorio
        let elegido = parseInt(Math.floor(Math.random()*maxAmigos));
        console.log("numero que salio: " + elegido);
        // obtener el nombre sorteado
        let nombreAmigo = amigos[elegido];
        // mostrar resultado
        asignarTextoElemento('#resultado', "Tu amigo secreto es: " + nombreAmigo)
        console.log("nombre que salio: " + nombreAmigo);
        amigos.splice(elegido, 1);        
    }
}


function limpiar(){
    document.getElementById('amigo').value = "";
}
