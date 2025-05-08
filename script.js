const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaModo = document.getElementById("pantalla-modo");
const pantallaJuego = document.getElementById("pantalla-juego");
const tablero = document.getElementById("tablero");
const estado = document.getElementById("estado");

let modo = 2;
let tableroEstado = Array(9).fill("");
let jugadorActual = "X";
let activo = true;
let celdas = [];

const combinacionesGanadoras = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function mostrarPantalla(nombre) {
  pantallaInicio.classList.add("hidden");
  pantallaModo.classList.add("hidden");
  pantallaJuego.classList.add("hidden");

  if (nombre === "modo") pantallaModo.classList.remove("hidden");
  if (nombre === "juego") pantallaJuego.classList.remove("hidden");
}

function iniciarJuego(modoSeleccionado) {
  modo = modoSeleccionado;
  mostrarPantalla("juego");
  crearTablero();
}

function crearTablero() {
  tablero.innerHTML = "";
  tableroEstado = Array(9).fill("");
  jugadorActual = "X";
  activo = true;
  estado.textContent = `Turno de ${jugadorActual}`;

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.classList.add("cell");
    celda.dataset.index = i;
    celda.addEventListener("click", manejarClick);
    tablero.appendChild(celda);
  }

  celdas = document.querySelectorAll(".cell");
}

function manejarClick(e) {
  const index = e.target.dataset.index;
  if (!activo || tableroEstado[index] !== "") return;

  tableroEstado[index] = jugadorActual;
  e.target.textContent = jugadorActual;

  if (verificarGanador(jugadorActual)) {
    estado.textContent = `¡${jugadorActual} gana!`;
    activo = false;
    return;
  }

  if (tableroEstado.every(cell => cell !== "")) {
    estado.textContent = "Empate";
    activo = false;
    return;
  }

  jugadorActual = jugadorActual === "X" ? "O" : "X";
  estado.textContent = `Turno de ${jugadorActual}`;

  if (modo === 1 && jugadorActual === "O" && activo) {
    setTimeout(movimientoCPU, 300);
  }
}

function verificarGanador(jugador) {
  return combinacionesGanadoras.some(combo =>
    combo.every(index => tableroEstado[index] === jugador)
  );
}

function movimientoCPU() {
  const vacías = tableroEstado
    .map((val, idx) => val === "" ? idx : null)
    .filter(idx => idx !== null);

  const random = vacías[Math.floor(Math.random() * vacías.length)];
  tableroEstado[random] = "O";
  celdas[random].textContent = "O";

  if (verificarGanador("O")) {
    estado.textContent = "¡O gana!";
    activo = false;
    return;
  }

  if (tableroEstado.every(cell => cell !== "")) {
    estado.textContent = "Empate";
    activo = false;
    return;
  }

  jugadorActual = "X";
  estado.textContent = `Turno de ${jugadorActual}`;
}

function reiniciarJuego() {
  crearTablero();
}
