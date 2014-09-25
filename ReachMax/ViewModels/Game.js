/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var Game = (function () {
    function Game(maximum, secondsPerTurn) {
        var _this = this;
        this.secondsPerTurn = secondsPerTurn;
        this.maximum = ko.observable();
        this.current = ko.observable(0);
        this.players = ko.observableArray([]);
        this.loser = ko.observable(new Player(this));
        this.maximum(maximum);
        this.inProgress = ko.computed(function () {
            return _this.current() != _this.maximum();
        });

        this.players().add(5, function () {
            return new Player(_this);
        });
        this.start();
    }
    Game.prototype.start = function () {
        var _this = this;
        this.players()[0].activate();
        this.loopId = setInterval(function () {
            return _this.activateNextPlayer();
        }, this.secondsPerTurn * 1000);
    };

    Game.prototype.stop = function () {
        clearInterval(this.loopId);
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

    Game.prototype.add = function () {
        if (this.inProgress()) {
            var currentScore = this.current();
            this.current(currentScore + 1);
        } else {
            this.loser = ko.observable(this.getActivePlayer());
        }
    };
    return Game;
})();
//# sourceMappingURL=Game.js.map
