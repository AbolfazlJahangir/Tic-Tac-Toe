let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let player1 = "X";
let player2 = "O";

let turn = Math.floor((Math.random() * 2) + 1);

if (turn == 1) {
    document.getElementById("terminal").innerHTML = `${player1} turn...`;
} else if (turn == 2) {
    document.getElementById("terminal").innerHTML = `${player2} turn...`;
}

function clearDisplay() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = " ";
        }
    }

    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = '#00ffaa';
        document.getElementById(i).innerHTML = "";
    }
    
    turn = Math.floor((Math.random() * 2) + 1);

    showState(turn);
    enableButton();
}

function disableButton() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = true;
    }
}

function enableButton() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = false;
    }
}

function showState(turn) {
    if (turn == 1) {
        document.getElementById("terminal").innerHTML = `${player1} turn...`;
    } else {
        document.getElementById("terminal").innerHTML = `${player2} turn...`;
    }
}

function emptySpace() {
    let spaces = 9;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] != " ") spaces--;
        }
    }

    if (spaces > 0) return true;
    else return false;
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] != " ") {
            if (i == 0) {
                document.getElementById("1").style.backgroundColor = 'green';
                document.getElementById("2").style.backgroundColor = 'green';
                document.getElementById("3").style.backgroundColor = 'green';
            }
            else if (i == 1) {
                document.getElementById("4").style.backgroundColor = 'green';
                document.getElementById("5").style.backgroundColor = 'green';
                document.getElementById("6").style.backgroundColor = 'green';
            }
            else if (i == 2) {
                document.getElementById("7").style.backgroundColor = 'green';
                document.getElementById("8").style.backgroundColor = 'green';
                document.getElementById("9").style.backgroundColor = 'green';
            }
            disableButton();
            return true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[2][j] != " ") {
            if (j == 0) {
                document.getElementById("1").style.backgroundColor = 'green';
                document.getElementById("4").style.backgroundColor = 'green';
                document.getElementById("7").style.backgroundColor = 'green';
            }
            else if (j == 1) {
                document.getElementById("2").style.backgroundColor = 'green';
                document.getElementById("5").style.backgroundColor = 'green';
                document.getElementById("8").style.backgroundColor = 'green';
            }
            else if (j == 2) {
                document.getElementById("3").style.backgroundColor = 'green';
                document.getElementById("6").style.backgroundColor = 'green';
                document.getElementById("9").style.backgroundColor = 'green';
            }
            disableButton();
            return true;
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != " ") {
        document.getElementById("1").style.backgroundColor = 'green';
        document.getElementById("5").style.backgroundColor = 'green';
        document.getElementById("9").style.backgroundColor = 'green';
        disableButton();
        return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != " ") {
        document.getElementById("3").style.backgroundColor = 'green';
        document.getElementById("5").style.backgroundColor = 'green';
        document.getElementById("7").style.backgroundColor = 'green';
        disableButton();
        return true;
    }

    if (emptySpace()) {
        return false;
    }
    else {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).style.backgroundColor = '#ffff00';
        }
        return "Tie";
    }
}

function buttonBoard(x, y) {
    let state = true;
    if (turn == 1) {
        if (x == 1 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("1").innerHTML = player1;
            } else state = false;
        } else if (x == 1 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("2").innerHTML = player1;
            } else state = false;
        } else if (x == 1 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("3").innerHTML = player1;
            } else state = false;
        } else if (x == 2 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("4").innerHTML = player1;
            } else state = false;
        } else if (x == 2 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("5").innerHTML = player1;
            } else state = false;
        } else if (x == 2 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("6").innerHTML = player1;
            } else state = false;
        } else if (x == 3 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("7").innerHTML = player1;
            } else state = false;
        } else if (x == 3 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("8").innerHTML = player1;
            } else state = false;
        } else if (x == 3 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player1;
                document.getElementById("9").innerHTML = player1;
            } else state = false;
        }

        if (checkWinner() == true) {
            document.getElementById("terminal").innerHTML = `${player1} won!`;
            return;
        } else if (checkWinner() == "Tie") {
            document.getElementById("terminal").innerHTML = `It's Tie!`;
            return;
        }

        if (state == true) turn = 2;
        showState(turn);

    } else {
        if (x == 1 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("1").innerHTML = player2;
            } else state = false;
        } else if (x == 1 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("2").innerHTML = player2;
            } else state = false;
        } else if (x == 1 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("3").innerHTML = player2;
            } else state = false;
        } else if (x == 2 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("4").innerHTML = player2;
            } else state = false;
        } else if (x == 2 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("5").innerHTML = player2;
            } else state = false;
        } else if (x == 2 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("6").innerHTML = player2;
            } else state = false;
        } else if (x == 3 && y == 1) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("7").innerHTML = player2;
            } else state = false;
        } else if (x == 3 && y == 2) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("8").innerHTML = player2;
            } else state = false;
        } else if (x == 3 && y == 3) {
            if (board[x-1][y-1] == " ") {
                board[x-1][y-1] = player2;
                document.getElementById("9").innerHTML = player2;
            } else state = false;
        }

        if (checkWinner() == true) {
            document.getElementById("terminal").innerHTML = `${player2} won!`;
            return;
        } else if (checkWinner() == "Tie") {
            document.getElementById("terminal").innerHTML = `It's Tie!`;
            return;
        }

        if (state == true) turn = 1;
        showState(turn);
    }
}
