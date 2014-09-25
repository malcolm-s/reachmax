/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm;
$(function () {
    gamevm = new Game(15, 3);

    $(document).keyup(function (e) {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });

    ko.applyBindings(gamevm, document.querySelector(".game"));
});
//# sourceMappingURL=Main.js.map
