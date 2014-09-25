﻿var Player = (function () {
    function Player(game) {
        var _this = this;
        this.game = game;
        this.current = ko.observable(0);
        this.isActive = ko.observable(false);
        this.maximum = Settings.secondsPerTurn();
        this.canAdd = ko.computed(function () {
            return _this.current() < _this.maximum;
        });
    }
    Player.prototype.activate = function () {
        this.isActive(true);
        this.current(0);
    };
    Player.prototype.deactivate = function () {
        this.isActive(false);
    };

    Player.prototype.add = function () {
        if (this.canAdd()) {
            // Increase game score
            var currentScore = this.game.current();
            this.game.current(currentScore + 1);

            // Increase current total
            this.current(this.current() + 1);
        }
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map
