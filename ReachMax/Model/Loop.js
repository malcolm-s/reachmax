var Loop = (function () {
    function Loop(interval) {
        this.interval = interval;
        this.timedElements = [];
        this.start();
    }
    // Starts the update loop with this loop's interval.
    Loop.prototype.start = function () {
        var _this = this;
        this.timerId = setInterval(function () {
            return _this.update();
        }, this.interval);
    };

    // Stops the update loop.
    Loop.prototype.stop = function () {
        clearInterval(this.timerId);
    };

    // Updates all the timed elements linked to this loop.
    Loop.prototype.update = function () {
        this.timedElements.forEach(function (e) {
            return e.update();
        });
    };

    Loop.prototype.createGame = function (max) {
        var game = new Game(max, this);
        this.timedElements.push(game);
        return game;
    };
    return Loop;
})();
//# sourceMappingURL=Loop.js.map
