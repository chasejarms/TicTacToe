var whoStarts = "x"; //x will start the very first game

function keepTrackOfStarter() {
    if (whoStarts === "x") { //if x is the starter, put return that
        turn = whoStarts;
        whoStarts = "o";//change who starts the next game
        return;
    }
    else if (whoStarts === "o") {
        turn = whoStarts;
        whoStarts = "x";
        return;
    }
}

var turn = "x";

function changeTurns(clickedButton) {
    //if x just went, change the current button's inner HTML to o on click and vice-versa
    var box = clickedButton.childNodes[1];
    if (box.innerHTML === "") {
        if (turn === "x") {
            box.innerHTML = "x";
            box.style.visibility = "visible";
            turn = "o";
        }
        else if (turn === "o") {
            box.innerHTML = "o";
            box.style.visibility = "visible";
            turn = "x";
        }
    }
    checkForWinner();
}

var allBoxes = document.getElementsByClassName('x-or-o');

function resetBoard() {
    for (var x = 0; x < allBoxes.length; x++) {
        allBoxes[x].innerHTML = "";
        allBoxes[x].style.visibility = "hidden";
    }
    keepTrackOfStarter();
}

function horizontalWinner() {
    if (allBoxes[0].innerHTML === allBoxes[1].innerHTML && allBoxes[1].innerHTML === allBoxes[2].innerHTML && allBoxes[0].innerHTML !== "") {// if the first row of horizontal boxes all have the same innerHTML, declare the winner.
        alert('Congratulations, it looks like ' + allBoxes[0].innerHTML + '\'s won!');
        resetBoard();
        return;
    }
    if (allBoxes[3].innerHTML === allBoxes[4].innerHTML && allBoxes[4].innerHTML === allBoxes[5].innerHTML && allBoxes[3].innerHTML !== "") {// if the first row of horizontal boxes all have the same innerHTML, declare the winner.
        alert('Congratulations, it looks like ' + allBoxes[3].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    if (allBoxes[6].innerHTML === allBoxes[7].innerHTML && allBoxes[7].innerHTML === allBoxes[8].innerHTML && allBoxes[6].innerHTML !== "") {// if the first row of horizontal boxes all have the same innerHTML, declare the winner.
        alert('Congratulations, it looks like ' + allBoxes[6].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    return;
}

function verticalWinner() {
    if (allBoxes[0].innerHTML === allBoxes[3].innerHTML && allBoxes[3].innerHTML === allBoxes[6].innerHTML && allBoxes[0].innerHTML !== "") {
        alert('Congratulations, it looks like ' + allBoxes[0].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    if (allBoxes[1].innerHTML === allBoxes[4].innerHTML && allBoxes[4].innerHTML === allBoxes[7].innerHTML && allBoxes[1].innerHTML !== "") {
        alert('Congratulations, it looks like ' + allBoxes[1].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    if (allBoxes[2].innerHTML === allBoxes[5].innerHTML && allBoxes[5].innerHTML === allBoxes[8].innerHTML && allBoxes[2].innerHTML !== "") {
        alert('Congratulations, it looks like ' + allBoxes[2].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    return;
}

function diagonalWinner() {
    if (allBoxes[0].innerHTML === allBoxes[4].innerHTML && allBoxes[4].innerHTML === allBoxes[8].innerHTML && allBoxes[0].innerHTML !== "") {
        alert('Congratulation, it looks like ' + allBoxes[0].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
    if (allBoxes[2].innerHTML === allBoxes[4].innerHTML && allBoxes[4].innerHTML === allBoxes[6].innerHTML && allBoxes[2].innerHTML !== "") {
        alert('Congratulation, it looks like ' + allBoxes[2].innerHTML + '\'s won!');
        resetBoard();
        return true;
    }
}

function checkForWinner() {
    horizontalWinner();
    verticalWinner();
    diagonalWinner();
    checkForStaleMate();
}

function checkForStaleMate() {
    var emptyBoxes = 0;
    for (var x = 0; x < allBoxes.length; x++) {
        if (allBoxes[x].innerHTML === "") { //if there are any unused boxes don't do anything except escape this function
            emptyBoxes++;
        }
    }
    if (emptyBoxes === 0) {
        alert("Looks like the game was a scratch! Feel free to play again"); //otherwise, if all the boxes are full (it got past the first part) and there was no winner, tell the user it was a cat's game and reset the board;
        resetBoard();
    }
}
