/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
$(function () {
    var loop;
    var game;
    $("#start-game").click(function (e) {
        if (loop !== undefined) {
            loop.stop();
        }
        loop = new Loop(25);
        game = loop.createGame(15);
    });

    $("#increase").click(function (e) {
        game.getActivePlayer().addToGame();
    });
});
//# sourceMappingURL=main.js.map
