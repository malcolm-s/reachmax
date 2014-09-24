/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm;
$(function () {
    var loop;
    var game;
    $("#start-game").click(function (e) {
        if (loop !== undefined) {
            loop.stop();
        }
        loop = new Loop(1000);
        game = loop.createGame(15);
        gamevm = new GameViewModel(game);
        ko.applyBindings(gamevm);
    });

    $("#increase").click(function (e) {
        game.getActivePlayer().addToGame();
    });
});
//# sourceMappingURL=main.js.map
