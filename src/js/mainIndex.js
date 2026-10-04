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
    function loadBoard() {
        board.innerHTML = '';
        for (let i = 0; i < totalcell; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const imgSrc = listImange[Math.floor(Math.random() * listImange.length)];
            const cellImg = document.createElement('img');
            cellImg.src = imgSrc;
            cell.appendChild(cellImg);
            board.appendChild(cell);
        }
    }
loadBoard();

