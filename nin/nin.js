$(document).ready(function () {
    let canvas = document.getElementById("myCanvas");
    let commandButton = document.getElementById("commandButton");
    let ctx = canvas.getContext("2d");

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    const imageHeight = canvasHeight / (matrix.length);
    const imageWidth = canvasWidth / (matrix[0].length);

    const regularMatch = document.getElementById('regularMatch');
    const strikedMatchRed = document.getElementById('strikedMatchRed');
    const strikedMatchBlue = document.getElementById('strikedMatchBlue');

    const draw = (image, leftMargin, topMargin) => {
        ctx.drawImage(image,
            leftMargin,
            topMargin,
            imageWidth,
            imageHeight);
    }

    const drawBoard = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        matrix.forEach((line, lineIndex) => {
            line.forEach((cell, columnIndex) => {
                if (cell == cellStates.UNTOUCHED) {
                    draw(regularMatch,
                        columnIndex * imageWidth,
                        lineIndex * imageHeight);
                } else if (cell == cellStates.STRIKED_BY_PLAYER_ONE) {
                    draw(strikedMatchRed,
                        columnIndex * imageWidth,
                        lineIndex * imageHeight);
                } else if (cell == cellStates.STRIKED_BY_PLAYER_TWO) {
                    draw(strikedMatchBlue,
                        columnIndex * imageWidth,
                        lineIndex * imageHeight);
                }
            });
        });

        ctx.stroke();
    }

    const processClick = (clickedLine) => {
        if (matrix[clickedLineIndex][clickedColumnIndex] == cellStates.UNTOUCHED) {
            if (lineBeingEdited == null) {
                lineBeingEdited = clickedLine;
            }

            if (lineBeingEdited == clickedLine) {
                if (gameState == gameStates.PLAYER_ONE_TURN) {
                    matrix[clickedLineIndex][clickedColumnIndex] = cellStates.STRIKED_BY_PLAYER_ONE;
                } else if (gameState == gameStates.PLAYER_TWO_TURN) {
                    matrix[clickedLineIndex][clickedColumnIndex] = cellStates.STRIKED_BY_PLAYER_TWO;
                }
            }
        }
    }

    const isGameFinalized = () => {
        let gameHasOnlyOneUntouchedCell = true;
        let alreadyFoundUntouchedCell = false;

        matrix.forEach((line) => {
            line.forEach((element) => {
                if (element == cellStates.UNTOUCHED) {
                    if (alreadyFoundUntouchedCell == false) {
                        alreadyFoundUntouchedCell = true;
                    } else {
                        gameHasOnlyOneUntouchedCell = false;
                    }
                }
            });
        });

        return gameHasOnlyOneUntouchedCell;
    }

    // Handles clicks on canvas
    canvas.addEventListener('click', (event) => {
        let x = event.pageX - canvas.offsetLeft + canvas.clientLeft;
        let y = event.pageY - canvas.offsetTop + canvas.clientTop;

        clickedColumnIndex = Math.floor(x / imageWidth);
        clickedLineIndex = Math.floor(y / imageHeight);

        processClick(clickedLineIndex);
        drawBoard();
    }, false);

    // Handles clicks of button
    commandButton.addEventListener('click', (event) => {
        if (isGameFinalized()) {
            gameState = gameStates.FINISHED_GAME;
            if (gameState == gameStates.PLAYER_ONE_TURN) {
                commandButton.innerHTML = 'Player 1 venceu';
            } else {
                commandButton.innerHTML = 'Player 2 venceu';
            }
        } else {
            if (gameState == gameStates.PLAYER_ONE_TURN) {
                gameState = gameStates.PLAYER_TWO_TURN;
                lineBeingEdited = null;
                commandButton.innerHTML = 'Terminar jogada do player 2';
            } else if (gameState == gameStates.PLAYER_TWO_TURN) {
                gameState = gameStates.PLAYER_ONE_TURN;
                lineBeingEdited = null;
                commandButton.innerHTML = 'Terminar jogada do player 1';
            }
        }
    }, false);

    drawBoard();
});
