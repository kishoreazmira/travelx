document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';
  let gameOver = false;

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (cell.textContent === '' && !gameOver) {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
          alert(`Player ${currentPlayer} wins!`);
          gameOver = true;
        } else if (checkDraw()) {
          alert('It\'s a draw!');
          gameOver = true;
        } else {
          currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
      }
    });
  });

  function checkWin(player) {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombos.some(combo => {
      return combo.every(index => cells[index].textContent === player);
    });
  }

  function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== '');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';
  let gameOver = false;

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (cell.textContent === '' && !gameOver) {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
          alert(`Player ${currentPlayer} wins!`);
          gameOver = true;
        } else if (checkDraw()) {
          alert('It\'s a draw!');
          gameOver = true;
        } else {
          currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
      }
    });
  });

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart';
  restartButton.addEventListener('click', () => {
    resetGame();
  });

  document.body.appendChild(restartButton);

  function checkWin(player) {
    // Check for winning combinations...

    return false;
  }

  function checkDraw() {
    // Check for a draw...

    return false;
  }

  function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('X', 'O');
    });

    currentPlayer = 'X';
    gameOver = false;
  }
});
