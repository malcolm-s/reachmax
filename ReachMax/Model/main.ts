/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

$(() => {
    var loop: Loop;
    var game: Game;
    $("#start-game").click(e => {
        if (loop !== undefined) {
            loop.stop();
        }
        loop = new Loop(25);
        game = loop.createGame(15);
    });

    $("#increase").click(e => {
        game.getActivePlayer().addToGame();
        var x = 10;
    });
}); 