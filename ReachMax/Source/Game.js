/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var Game = (function () {
    function Game() {
        var _this = this;
        this.maximum = ko.observable();
        this.current = ko.observable(0);
        this.playerNameInput = ko.observable("");
        this.players = ko.observableArray([]);
        this.loser = ko.observable();
        this.maximum(settings.gameMax().current());
        this.inProgress = ko.computed(function () {
            return _this.current() != _this.maximum();
        });

        this.players().add(1, function () {
            return new Player(_this, "Malcolm");
        });
        this.start();
    }
    Game.prototype.start = function () {
        var _this = this;
        this.players()[0].activate();
        this.loopId = setInterval(function () {
            return _this.activateNextPlayer();
        }, settings.secondsPerTurn().current() * 1000);
    };

    Game.prototype.stop = function () {
        clearInterval(this.loopId);
    };

    Game.prototype.addPlayer = function () {
        var name = this.playerNameInput();
        if (name !== "") {
            this.players.push(new Player(this, name));
            this.playerNameInput("");
        }
    };

    Game.prototype.getActivePlayer = function () {
        return this.players().filter(function (p) {
            return p.isActive();
        })[0];
    };

    Game.prototype.activateNextPlayer = function () {
        var currentPlayer = this.getActivePlayer(), nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;
        currentPlayer.isActive(false);

        if (nextPlayerIndex >= this.players().length) {
            nextPlayerIndex = 0;
        }

        this.players()[nextPlayerIndex].isActive(true);
    };
    return Game;
})();
//# sourceMappingURL=Game.js.map
