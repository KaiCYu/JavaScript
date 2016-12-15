class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove($square) {}

  setupBoard() {
    const $board = $("<ul>");
    $board.addClass("group");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $cell = $("<li>");
        // $li.data("pos", [rowIdx, colIdx]);
        $.data($cell, 'pos', [rowIdx, colIdx]);
        $board.append($cell);
      }
    }

    this.$el.append($board);
  }
}
module.exports = View;
