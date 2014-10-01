var Player = (function () {
    function Player(game, name, isActive) {
        var _this = this;
        this.game = game;
        this.name = ko.observable("");
        this.current = ko.observable(0);
        this.isActive = ko.observable(false);
        this.maximum = settings.secondsPerTurn().current();
        this.name(name);
        this.canAdd = ko.computed(function () {
            return _this.current() < _this.maximum;
        });

        if (this.isActive) {
            this.activate();
        }
    }
    Player.prototype.activate = function () {
        this.isActive(true);
        this.current(0);
        return this;
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
