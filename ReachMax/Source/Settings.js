var Settings = (function () {
    function Settings() {
        this.gameMax = ko.observable(new Counter("Game max", 15));
        this.secondsPerTurn = ko.observable(new Counter("Seconds per turn", 4));
        this.maxIncreasePerTurn = ko.observable(new Counter("Max increase per turn", 5));
        this.counters = ko.observableArray([]);
        this.maxPlayers = 5;
        this.counters().push(this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn);
    }
    Settings.prototype.applySettings = function () {
        gamevm = new Game();
    };
    return Settings;
})();
//# sourceMappingURL=Settings.js.map
