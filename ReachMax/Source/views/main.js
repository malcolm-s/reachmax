/// <reference path="../lib/typings/jquery/jquery.d.ts" />
define(["require", "exports", "views/settings", "model/Game"], function(require, exports, settings, G) {
    var tmp = settings;

    var Game = G.Game;

    $(function () {
        var game = new Game();

        game.start();
        game.addPlayer("Ted");
        game.addPlayer("Jim");

        game.log();
    });
});
//# sourceMappingURL=main.js.map
