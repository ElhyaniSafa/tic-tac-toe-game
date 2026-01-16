let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function play(cell, index) {
    if (board[index] !== "" || gameOver) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("message").innerText =
            "Player " + currentPlayer + " wins!";
        gameOver = true;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("message").innerText = "Draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    return winningCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";
    document.getElementById("message").innerText = "";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
