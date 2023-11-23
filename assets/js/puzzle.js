$(document).ready(function() {
    var puzzlePieces = [1, 2, 3, 4, 5, 6, 7, 8, ""];
 
    puzzlePieces = shuffle(puzzlePieces);
    renderPuzzlePieces();
 
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
 
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
 
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
 
        return array;
    }
 
    function renderPuzzlePieces() {
        for (var i = 0; i < puzzlePieces.length; i++) {
            var pieceId = "piece" + (i + 1);
            $("#" + pieceId).text(puzzlePieces[i]);
        }
    }
 
    function checkPuzzleSolved() {
        for (var i = 0; i < puzzlePieces.length; i++) {
            var pieceId = "piece" + (i + 1);
            if ($("#" + pieceId).text() != (i + 1)) {
                return false;
            }
        }
        return true;
    }
 
    $(".puzzle-piece").click(function() {
        var pieceId = $(this).attr("id");
        var pieceIndex = parseInt(pieceId.replace("piece", "")) - 1;
 
        if (pieceIndex - 1 >= 0 && puzzlePieces[pieceIndex - 1] === "") {
            puzzlePieces[pieceIndex - 1] = puzzlePieces[pieceIndex];
            puzzlePieces[pieceIndex] = "";
        } else if (pieceIndex + 1 < puzzlePieces.length && puzzlePieces[pieceIndex + 1] === "") {

            puzzlePieces[pieceIndex + 1] = puzzlePieces[pieceIndex];
            puzzlePieces[pieceIndex] = "";
        } else if (pieceIndex - 3 >= 0 && puzzlePieces[pieceIndex - 3] === "") {

            puzzlePieces[pieceIndex - 3] = puzzlePieces[pieceIndex];
            puzzlePieces[pieceIndex] = "";
        } else if (pieceIndex + 3 < puzzlePieces.length && puzzlePieces[pieceIndex + 3] === "") {

            puzzlePieces[pieceIndex + 3] = puzzlePieces[pieceIndex];
            puzzlePieces[pieceIndex] = "";
        }
 
        renderPuzzlePieces();
 
        if (checkPuzzleSolved()) {
            alert("Congratulations! You solved the puzzle.");
        }
    });
});