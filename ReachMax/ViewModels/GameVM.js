/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var GameView = (function () {
    function GameView(maximum, secondsPerTurn) {
        var _this = this;
        this.secondsPerTurn = secondsPerTurn;
        this.maximum = ko.observable();
        this.current = ko.observable(0);
        this.players = ko.observableArray([]);
        this.maximum(maximum);
        this.players().add(5, function () {
            return new PlayerView(_this, 3);
        });
        this.start();
    }
    GameView.prototype.start = function () {
        var _this = this;
        this.players()[0].activate();
        this.loopId = setInterval(function () {
            console.log("Game updated");
            _this.activateNextPlayer();
            var y = 10;
        }, this.secondsPerTurn * 1000);
    };

    GameView.prototype.stop = function () {
        clearInterval(this.loopId);
    };

    GameView.prototype.getActivePlayer = function () {
        return this.players().filter(function (p) {
            return p.isActive();
        })[0];
    };

    GameView.prototype.activateNextPlayer = function () {
        var currentPlayer = this.getActivePlayer(), nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;
        currentPlayer.isActive(false);

        if (nextPlayerIndex >= this.players().length) {
            nextPlayerIndex = 0;
        }

        this.players()[nextPlayerIndex].isActive(true);
    };
    return GameView;
})();

var PlayerView = (function () {
    function PlayerView(game, maximum) {
        var _this = this;
        this.game = game;
        this.current = ko.observable(0);
        this.isActive = ko.observable(false);
        this.maximum = maximum;
        this.canAdd = ko.computed(function () {
            return _this.current() < _this.maximum;
        });
    }
    PlayerView.prototype.activate = function () {
        this.isActive(true);
        this.current(0);
    };
    PlayerView.prototype.deactivate = function () {
        this.isActive(false);
    };

    PlayerView.prototype.add = function () {
        if (this.canAdd()) {
            // Increase game score
            var currentScore = this.game.current();
            this.game.current(currentScore + 1);

            // Increase current total
            this.current(this.current() + 1);
        }
    };
    return PlayerView;
})();
//# sourceMappingURL=GameVM.js.map
