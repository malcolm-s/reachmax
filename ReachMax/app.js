/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var Loop = (function () {
    function Loop() {
    }
    Loop.prototype.start = function () {
        setTimeout(this.update(), this.interval);
    };

    Loop.prototype.update = function () {
    };
    return Loop;
})();

var Game = (function () {
    function Game() {
    }
    Game.prototype.initialise = function () {
        this.rotate();
    };

    Game.prototype.showGameState = function () {
        $("body").text(this.current);
    };

    Game.prototype.rotate = function () {
    };
    return Game;
})();

var Player = (function () {
    function Player() {
        this.increment = 0;
    }
    Player.prototype.addToGame = function () {
        if (this.isActive) {
            this.game.current += this.increment;
        }
    };
    return Player;
})();
//# sourceMappingURL=app.js.map
