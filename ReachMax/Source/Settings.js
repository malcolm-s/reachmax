var Settings = (function () {
    function Settings() {
        this.gameMax = ko.observable(new Counter("Game max", 15));
        this.secondsPerTurn = ko.observable(new Counter("Seconds per turn", 4));
        this.maxIncreasePerTurn = ko.observable(new Counter("Max increase per turn", 5));
        this.counters = ko.observableArray([this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn]);
        this.maxPlayers = 5;
        this.settingsElement = document.querySelector(".settings");
        this.gameElement = document.querySelector(".game");
    }
    Settings.prototype.applySettings = function () {
        // clean existing game element
        ko.cleanNode(this.gameElement);

        // create new game and apply bindings
        gamevm = new Game();
        ko.applyBindings(gamevm, this.gameElement);

        // bind user input handler
        $(document).keyup(function (e) {
            var spaceKeyCode = 32;
            if (e.which == 32) {
                gamevm.getActivePlayer().add();
            }
        });
    };
    return Settings;
})();
//# sourceMappingURL=Settings.js.map
