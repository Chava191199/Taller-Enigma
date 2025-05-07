const board = document.getElementById("board");
const status = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");
const modeSelector = document.getElementById("mode");

let cells;
let currentPlayer = "X";
let gameActive = true;
let mode = 2; // Default: 2 players
let boardState = Array(9).fill("");

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function createBoard() {
  board.innerHTML = "";
  boardState = Array(9).fill("");
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  }
  cells = document.querySelectorAll(".cell");
  currentPlayer = "X";
  gameActive = true;
  status.textContent = `Turno de ${currentPlayer}`;
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || boardState[index] !== "") return;

  boardState[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner(currentPlayer)) {
    status.textContent = `¡${currentPlayer} gana!`;
    gameActive = false;
    return;
  } else if (boardState.every(cell => cell !== "")) {
    status.textContent = "Empate";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.textContent = `Turno de ${currentPlayer}`;

  if (mode === 1 && currentPlayer === "O" && gameActive) {
    setTimeout(cpuMove, 300);
  }
}

function checkWinner(player) {
  return winningCombos.some(combo =>
    combo.every(index => boardState[index] === player)
  );
}

function cpuMove() {
  const emptyIndices = boardState
    .map((val, idx) => val === "" ? idx : null)
    .filter(idx => idx !== null);

  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  boardState[randomIndex] = "O";
  cells[randomIndex].textContent = "O";

  if (checkWinner("O")) {
    status.textContent = "¡O gana!";
    gameActive = false;
    return;
  } else if (boardState.every(cell => cell !== "")) {
    status.textContent = "Empate";
    gameActive = false;
    return;
  }

  currentPlayer = "X";
  status.textContent = `Turno de ${currentPlayer}`;
}

restartBtn.addEventListener("click", createBoard);
modeSelector.addEventListener("change", () => {
  mode = parseInt(modeSelector.value);
  createBoard();
});

createBoard();
