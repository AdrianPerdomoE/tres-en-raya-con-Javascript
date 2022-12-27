function turn(elem) {
    function endGame(win) {
        if (win) {
            alert(`Felicidades jugador ${player.num} ha ganado`);
            let score = localStorage.getItem(player.num)
            if (score == null) {
                localStorage.setItem(player.num, 1)
            }
            else {
                localStorage.setItem(player.num, parseInt(score) + 1)
            }
        }
        else {
            alert("no hay mas espacios disponibles, juego en empate");
        }
        document.location.reload()
    }
    let text = document.createElement("h1");
    let player = PLAYERS[CURRENTPLAYER];
    text.className = "container";
    text.innerText = player.symbol;
    if (elem.currentTarget.childNodes.length > 1) return;
    elem.currentTarget.appendChild(text);
    let win = player.addBox(elem.currentTarget.id);
    if (win) {
        endGame(win);
        return
    }
    avaibleBoxes--;
    if (avaibleBoxes === 0) endGame(false);
    CURRENTPLAYER = (CURRENTPLAYER + 1) % 2;
}
class Table {
    constructor() {
        this.row1 = [];
        this.row2 = [];
        this.row3 = [];
        this.col1 = [];
        this.col2 = [];
        this.col3 = [];
        this.diag1 = [];
        this.diag2 = [];
    }
    add(box) {
        switch (parseInt(box)) {
            case 1:
                this.row1.push(box)
                if (this.row1.length == 3) return true
                this.col1.push(box)
                if (this.col1.length == 3) return true
                this.diag1.push(box)
                if (this.diag1.length == 3) return true
                break;
            case 2:
                this.row1.push(box)
                if (this.row1.length == 3) return true
                this.col2.push(box)
                if (this.col2.length == 3) return true
                break;
            case 3:
                this.row1.push(box)
                if (this.row1.length == 3) return true
                this.diag2.push(box)
                if (this.diag2.length == 3) return true
                this.col3.push(box)
                if (this.col3.length == 3) return true
                break;
            case 4:
                this.row2.push(box)
                if (this.row2.length == 3) return true
                this.col1.push(box)
                if (this.col1.length == 3) return true
                break;
            case 5:
                this.row2.push(box)
                if (this.row2.length == 3) return true
                this.col2.push(box)
                if (this.col2.length == 3) return true
                this.diag1.push(box)
                if (this.diag1.length == 3) return true
                this.diag2.push(box)
                if (this.diag2.length == 3) return true
                break;
            case 6:
                this.row2.push(box)
                if (this.row2.length == 3) return true
                this.col3.push(box)
                if (this.col3.length == 3) return true
                break;
            case 7:
                this.row3.push(box)
                if (this.row3.length == 3) return true
                this.col1.push(box)
                if (this.col1.length == 3) return true
                this.diag2.push(box)
                if (this.diag2.length == 3) return true
                break;
            case 8:
                this.row3.push(box)
                if (this.row3.length == 3) return true
                this.col2.push(box)
                if (this.col2.length == 3) return true
                break;
            case 9:
                this.row3.push(box)
                if (this.row3.length == 3) return true
                this.col3.push(box)
                if (this.col3.length == 3) return true
                this.diag1.push(box)
                if (this.diag1.length == 3) return true
                break;
            default:
                break;
        }
        return false
    }
}
class Player {
    static NUM = 0;
    constructor(symbol) {
        this.symbol = symbol;
        this.num = Player.NUM;
        Player.NUM++;
        this.table = new Table();
    }
    addBox(box) {
        return this.table.add(box);
    }
}
class Game {
    constructor() {
        let boxes = [];
        for (let i = 1; i < 10; i++) {
            boxes.push(document.getElementById(i.toString()));
        }
        boxes.forEach(box => {
            box.addEventListener("click", turn, true);
        });
    }
}
var CURRENTPLAYER = 0;
var avaibleBoxes = 9;
const PLAYERS = [new Player("X"), new Player("O")];
let scoreWord = "Score"
for (let number = 0; number < 2; number++) {
    let scoreBox = document.getElementById(scoreWord + number);
    let scoreContent = document.createElement("h2");
    scoreContent.className = "container"
    let value = localStorage.getItem(number);
    if (value == null) {
        value = "0";
    }
    scoreContent.innerText = value;
    scoreBox.appendChild(scoreContent);
}
document.getElementById("reset").addEventListener("click", e => {
    localStorage.clear();
    document.location.reload();
})
new Game();
