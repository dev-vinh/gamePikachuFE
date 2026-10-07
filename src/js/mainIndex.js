const board = document.getElementById('board');
const cols = 12
const rows = 9
const totalcell = cols*rows;
const listImange=[
    'src/image/1.png','src/image/2.png',
    'src/image/3.png','src/image/4.png',
    'src/image/5.png','src/image/6.png',
    'src/image/7.png','src/image/8.png',
    'src/image/9.png','src/image/10.png',
    'src/image/11.png','src/image/12.png',
    'src/image/13.png', 'src/image/14.png',
    'src/image/15.png','src/image/16.png',
    'src/image/17.png','src/image/18.png',
    'src/image/19.png','src/image/20.png'];
var boardGame=[];
var selecCells=null;
var currentLevel=1;
const boardCol=cols+2;
const boardRow=rows+2;

function mixArray(arr) {
    for(let i=arr.length-1;i>=1;i--){
        let a = Math.floor(Math.random() * (i+1));
        let temp = arr[i];
        arr[i]=arr[a];
        arr[a]=temp;
    }
}

function createBoard(){
    let fistArray = [];
    let pairs = totalcell / 2;
    for(let i=0;i<pairs;i++){
        let typeID = (i % listImange.length)+1;
        fistArray.push(typeID);
        fistArray.push(typeID);
    }
    mixArray(fistArray);
    boardGame=[];
    for(let i=0;i<boardRow;i++){
        let row=[];
        for(let j=0;j<boardCol;j++){
            row.push(0);
        }
        boardGame.push(row);
    }
    let index=0;
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=cols;j++){
            boardGame[i][j]=fistArray[index];
            index++;
        }
    }
}
function loadBoard(){
    board.innerHTML='';
    for(let i=0; i<boardRow;i++){
        for(let j=0;j<boardCol;j++){
            board.appendChild(createCell(i,j));
        }
    }
}
function createCell(r, c) {
    let cell=document.createElement("div");
    if(boardGame[r][c]>0){
        let cellImage=document.createElement("img");
        cell.className= "cell";
        cellImage.src=listImange[boardGame[r][c]-1];
        cell.appendChild(cellImage);
    }
    return cell;
}
createBoard()
loadBoard()
