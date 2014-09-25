/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm: Game;
$(() => {
    gamevm = new Game(15, 3);

    $(document).keyup(e => {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });

    ko.applyBindings(gamevm, document.querySelector(".game"));
});
