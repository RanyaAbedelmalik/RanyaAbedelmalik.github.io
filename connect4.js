const td = document.querySelectorAll("td")

var currentPlayer = 'red';
var nextPlayer = 'black';
var temp = ""
var playerREDSelections = new Array();
var playerBLACKSelections = new Array();

// let board = new Array(6);
// for (let i = 0; i < 7; i++) board[i] = new Array();
// console.log(board);

for (let i = 1; i <= 7; i++) {
    document.getElementById('col' + i).addEventListener("click", function (event) {
        let cell = event.target.id;

        if (document.getElementById(cell).childElementCount < 6) {
            let checker = document.createElement("div")
            checker.classList.add("checker");
            checker.classList.add(currentPlayer);
            event.target.appendChild(checker)

            let cellElement = document.getElementById(cell);
            if (currentPlayer === "red") {
                playerSelections = playerREDSelections;
                temp = nextPlayer;
                nextPlayer = currentPlayer;
                currentPlayer = temp;
            } else {
                playerSelections = playerBLACKSelections;
                temp = nextPlayer;
                nextPlayer = currentPlayer;
                currentPlayer = temp;
            }
        }
    
    });
}
