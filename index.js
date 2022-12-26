class Player{
    static NUM = 0;
    constructor(symbol){
        this.symbol = symbol;
        this.num = Player.NUM;
        this.row1 = [];
        this.row2 =[];
        this.row3 = [];
        this.col1 = [];
        this.col2 =[];
        this.col3 = [];
        this.diag1 = [];
        this.diag2 = [];
        Player.NUM++;
    }
    addBox(box) {
        switch (parseInt(box)) {
            case 1:
                this.row1.push(box)
                if (this.row1.length==3) EndGame()
                this.col1.push(box)
                if (this.col1.length==3) EndGame()
                this.diag1.push(box)
                if (this.diag1.length==3) EndGame()
                break;
            case 2:
                this.row1.push(box)
                if (this.row1.length==3) EndGame()
                this.col2.push(box)
                if (this.col2.length==3) EndGame()
                break;
            case 3:
                this.row1.push(box)
                if (this.row1.length==3) EndGame()
                this.diag2.push(box)
                if (this.diag2.length==3) EndGame()
                this.col3.push(box)
                if (this.col3.length==3) EndGame()
                break;
            case 4:
                this.row2.push(box)
                if (this.row2.length==3) EndGame()
                this.col1.push(box)
                if (this.col1.length==3) EndGame()
                break;
            case 5:
                this.row2.push(box)
                if (this.row2.length==3) EndGame()
                this.col2.push(box)
                if (this.col2.length==3) EndGame()
                this.diag1.push(box)
                if (this.diag1.length==3) EndGame()
                this.diag2.push(box)
                if (this.diag2.length==3) EndGame()
                break;
            case 6:
                this.row2.push(box)
                if (this.row2.length==3) EndGame()
                this.col3.push(box)
                if (this.col3.length==3) EndGame()
                break;
                case 7:
                this.row3.push(box)
                if (this.row3.length==3) EndGame()
                this.col1.push(box)
                if (this.col1.length==3) EndGame()
                this.diag2.push(box)
                if (this.diag2.length==3) EndGame()
                break;
            case 8:
                this.row3.push(box)
                if (this.row3.length==3) EndGame()
                this.col2.push(box)
                if (this.col2.length==3) EndGame()
                break;
            case 9:
                this.row3.push(box)
                if (this.row3.length==3) EndGame()
                this.col3.push(box)
                if (this.col3.length==3) EndGame()
                this.diag1.push(box)
                if (this.diag1.length==3) EndGame()
                break;
            default:
                break;
        }
    }
}
var CURRENTPLAYER = 0;
var avaibleBoxes = 9;
const PLAYERS = [ new Player("X"), new Player("O")];
function Game(){
    const box1 = document.getElementById("1"); 
    const box2 = document.getElementById("2");
    const box3 = document.getElementById("3");
    const box4 = document.getElementById("4"); 
    const box5 = document.getElementById("5"); 
    const box6 = document.getElementById("6"); 
    const box7 = document.getElementById("7"); 
    const box8 = document.getElementById("8"); 
    const box9 = document.getElementById("9"); 
    
    const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    boxes.forEach(box => {
        box.addEventListener("click",turn,true)
    });
}
function turn(elem){
    let text = document.createElement("h1")
    let player = PLAYERS[CURRENTPLAYER]
    text.className="container"
    text.innerText= player.symbol
    elem.currentTarget.appendChild(text)
    elem.currentTarget.removeEventListener("click",turn,true)
    CURRENTPLAYER =(CURRENTPLAYER+1)%2
    player.addBox(elem.currentTarget.id)
}
function EndGame(){
    alert("fin del juego")
}
Game();
