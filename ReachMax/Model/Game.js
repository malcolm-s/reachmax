/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var GameViewModel = (function () {
    function GameViewModel(game) {
        this.game = game;
        var current = game.timeCounter.current;
        this.time = ko.observable(current);
    }
    return GameViewModel;
})();

var Game = (function () {
    function Game(max, loop) {
        var _this = this;
        this.loop = loop;
        this.players = [];
        this.loop = loop;

        this.timeCounter = new Counter(5, function (c) {
            return c.current++;
        }, (function () {
            return _this.activateNextPlayer();
        }).bind(this));

        this.scoreCounter = new Counter(max, function (c) {
            $(".total").text(c.current);
            $(".total-progress").val(((c.current / c.maximum) * 100).toString());
        }, (function () {
            _this.loop.stop();
            $("#winner").text(_this.getActivePlayer().name + " won!");
        }).bind(this), false);

        this.addPlayers(2);
        this.players[0].activate();
    }
    Game.prototype.update = function () {
        this.timeCounter.update();
    };

    Game.prototype.getActivePlayer = function () {
        return this.players.filter(function (p) {
            return p.isActive;
        })[0];
    };

    Game.prototype.activateNextPlayer = function () {
        var currentPlayer = this.players.filter(function (p) {
            return p.isActive;
        })[0], nextPlayerIndex = this.players.indexOf(currentPlayer) + 1;
        currentPlayer.deactivate();

        if (nextPlayerIndex >= this.players.length) {
            nextPlayerIndex = 0;
            // var minimumId = this.players.reduce((prev: Player, curr: Player) => prev.id > curr.id ? curr : prev).id;
        }

        this.players[nextPlayerIndex].activate();
    };

    Game.prototype.addPlayers = function (numberOfPlayers) {
        var _this = this;
        this.players.add(numberOfPlayers, function () {
            return new Player(_this, AutoNumber.next());
        });
    };
    return Game;
})();
//# sourceMappingURL=Game.js.map
