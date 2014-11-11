/// <reference path="../lib/typings/knockout/knockout.d.ts" />
/// <reference path="settings.ts" />
//declare var settings: Settings;
var Game = (function () {
    function Game() {
        var _this = this;
        this.maximum = ko.observable();
        this.current = ko.observable(0);
        this.playerNameInput = ko.observable("");
        this.players = ko.observableArray([]);
        this.loser = ko.observable();
        this.applySettings();
        this.inProgress = ko.computed(function () {
            return _this.current() != _this.maximum();
        });
    }
    Game.prototype.start = function () {
        var _this = this;
        this.loopId = setInterval(function () {
            return _this.activateNextPlayer();
        }, 2); //settings.secondsPerTurn().current() * 1000);
    };

    Game.prototype.stop = function () {
        clearInterval(this.loopId);
    };

    Game.prototype.applySettings = function () {
        this.current(0);
        this.maximum(2); //settings.gameMax().current());
        this.resetPlayers();

        this.start();
    };

    Game.prototype.addPlayer = function () {
        var name = this.playerNameInput();
        if (name !== "") {
            var activatePlayer = this.players().length <= 0;
            this.players.push(new Player(this, name, activatePlayer));
            this.playerNameInput("");
        }
    };

    Game.prototype.getActivePlayer = function () {
        return this.players().filter(function (p) {
            return p.isActive();
        })[0];
    };

    Game.prototype.activateNextPlayer = function () {
        var currentPlayer = this.getActivePlayer();

        if (currentPlayer === undefined) {
            currentPlayer = this.players()[0].activate();
        }

        var nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;

        currentPlayer.deactivate();

        if (nextPlayerIndex >= this.players().length) {
            nextPlayerIndex = 0;
        }

        this.players()[nextPlayerIndex].activate();
    };

    Game.prototype.resetPlayers = function () {
        this.players().forEach(function (p) {
            return p.reset();
        });
    };
    return Game;
})();
//# sourceMappingURL=Game.js.map
