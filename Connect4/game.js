class Game {
  constructor() {
    this.board = this.initialize();
    //player turn (1 or 2)
    this.player = 1;
  }

  initialize() {
    const rows = 6;
    const columns = 7;
    let grid = [];

    for (var i = 0; i < rows; i++) {
      grid[i] = [];
      for (var j = 0; j < columns; j++) {
        grid[i][j] = 0;
      }
    }
    return grid;
  }

  placePiece() {
    let columnToPlace = this.getColumn();
    let rowToPlace = this.getMaxRow(columnToPlace);

    // console.log(this.board)
    console.log(columnToPlace, rowToPlace);
    this.board[rowToPlace][columnToPlace] = this.player;

    console.log(this.board)
    //change player turn;
    this.player === 1 ? this.player = 2 : this.player = 1;
  }

  gameEnd() {

  }

  display() {
    let table = document.getElementsByClassName('board');

    // console.log(table);
  }

  getColumn() {
    let table = document.getElementById('board');
    table.addEventListener('click', (e) => {
      var column = e.srcElement;
      var col = column.className[6];
      console.log(col)
      return col;
    })
  }

  getMaxRow(column) {
    for (var i = this.board.length - 1; i <= 0; i--) {
      if (this.board[i][column] === 0) {
        console.log(i)
        return i;
      }
    }
  }

}

let newGame = new Game();
// console.log(newGame.board);
newGame.display();

newGame.getColumn();
newGame.getMaxRow();

let table = document.getElementById('board');
table.addEventListener('click', (e) => {
  newGame.placePiece();
})
