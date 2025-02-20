const nombreInput = document.getElementById('nombre-input');
const agregarButton = document.getElementById('agregar-button');
const nombresLista = document.getElementById('nombres-lista');
const sortearButton = document.getElementById('sortear-amigo');
const resultado = document.getElementById('resultado');

let amigos = [];

function agregarNombre() {
  const nombre = nombreInput.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  nombreInput.value = '';
}

function mostrarLista() {
  nombresLista.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    nombresLista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay suficientes amigos para realizar el sorteo.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  resultado.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
}

agregarButton.addEventListener('click', agregarNombre);
sortearButton.addEventListener('click', sortearAmigo);
