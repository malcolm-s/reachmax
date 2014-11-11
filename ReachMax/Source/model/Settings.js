define(["require", "exports", "knockout"], function(require, exports, ko) {
    var Settings = (function () {
        function Settings() {
            this.gameMax = ko.observable(15);
            this.secondsPerTurn = ko.observable(4);
            this.maxIncreasePerTurn = ko.observable(4);
            //gameMax: KnockoutObservable<Counter> = ko.observable(new Counter("Game max", 15));
            //secondsPerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Seconds per turn", 4));
            //maxIncreasePerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Max increase per turn", 5));
            //counters: KnockoutObservableArray<KnockoutObservable<Counter>>
            //= ko.observableArray([this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn]);
            this.maxPlayers = 5;
            this.settingsElement = document.querySelector(".settings");
            this.gameElement = document.querySelector(".game");
        }
        return Settings;
    })();
});
//# sourceMappingURL=Settings.js.map
