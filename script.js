body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.mode-selector {
  margin-bottom: 15px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  margin: 0 auto 15px;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  user-select: none;
  transition: background-color 0.2s;
}

.cell:hover {
  background-color: #ccc;
}

.cell:empty {
  color: #222;
}

.cell:contains("X") {
  color: #0077ff;
}

.cell:contains("O") {
  color: #ff4444;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005ec4;
}
