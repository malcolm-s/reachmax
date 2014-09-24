/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm;
$(function () {
    //var loop: Loop;
    //var game: Game;
    //$("#start-game").click(e => {
    //    if (loop !== undefined) {
    //        loop.stop();
    //    }
    //    loop = new Loop(1000);
    //    game = loop.createGame(15);
    //    gamevm = new GameViewModel(game);
    //    ko.applyBindings(gamevm);
    //});
    //$("#increase").click(e => {
    //    game.getActivePlayer().addToGame();
    //});
    gamevm = new GameView(15, 3);

    ko.applyBindings(gamevm, document.querySelector(".game"));
});
//# sourceMappingURL=Main.js.map
