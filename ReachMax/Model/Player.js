var Player = (function () {
    function Player(game, id) {
        var _this = this;
        this.game = game;
        this.id = id;
        this.name = "Player " + this.id;

        this.increaseCounter = new Counter(4, (function (c) {
            c.current++;
            _this.game.scoreCounter.current++;
            $("#player-action").text(_this.name + " increased by " + c.current);
        }).bind(this), (function () {
            return _this.canAdd = false;
        }).bind(this));
    }
    Player.prototype.activate = function () {
        this.isActive = true;
        this.canAdd = true;
        this.increaseCounter.current = 0;
        $("#active-player").text(this.name + " is active.");
    };

    Player.prototype.deactivate = function () {
        this.isActive = false;
        this.canAdd = false;
    };

    Player.prototype.addToGame = function () {
        var currentScore = this.game.scoreCounter;
        if (this.isActive && this.canAdd && currentScore.current < currentScore.maximum) {
            this.increaseCounter.update();
            this.game.scoreCounter.update();
        }
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map
