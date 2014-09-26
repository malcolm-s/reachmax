/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var GameVM = (function () {
    function GameVM() {
        var _this = this;
        this.maximum = ko.observable();
        this.current = ko.observable(0);
        this.players = ko.observableArray([]);
        this.loser = ko.observable();
        this.maximum(settings.gameMax());
        this.inProgress = ko.computed(function () {
            return _this.current() != _this.maximum();
        });

        this.players().add(5, function () {
            return new PlayerVM(_this);
        });
        this.start();
    }
    GameVM.prototype.start = function () {
        var _this = this;
        this.players()[0].activate();
        this.loopId = setInterval(function () {
            return _this.activateNextPlayer();
        }, settings.secondsPerTurn() * 1000);
    };

    GameVM.prototype.stop = function () {
        clearInterval(this.loopId);
    };

    GameVM.prototype.getActivePlayer = function () {
        return this.players().filter(function (p) {
            return p.isActive();
        })[0];
    };

    GameVM.prototype.activateNextPlayer = function () {
        var currentPlayer = this.getActivePlayer(), nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;
        currentPlayer.isActive(false);

        if (nextPlayerIndex >= this.players().length) {
            nextPlayerIndex = 0;
        }

        this.players()[nextPlayerIndex].isActive(true);
    };

    GameVM.prototype.add = function () {
        if (this.inProgress()) {
            var currentScore = this.current();
            this.current(currentScore + 1);
        } else {
            this.loser = ko.observable(this.getActivePlayer());
        }
    };
    return GameVM;
})();
//# sourceMappingURL=GameVM.js.map
