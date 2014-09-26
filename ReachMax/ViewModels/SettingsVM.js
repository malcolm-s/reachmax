var SettingsVM = (function () {
    function SettingsVM() {
        this.gameMax = ko.observable(15);
        this.secondsPerTurn = ko.observable(5);
        this.maxPlayers = 5;
    }
    SettingsVM.prototype.increase = function () {
        this.gameMax(this.gameMax() + 1);
    };
    SettingsVM.prototype.decrease = function () {
        this.gameMax(this.gameMax() - 1);
    };
    return SettingsVM;
})();

function increaseObs(observable, increment) {
    if (typeof increment === "undefined") { increment = 1; }
    observable(observable() + increment);
}

function decreaseObs(observable, decrement) {
    if (typeof decrement === "undefined") { decrement = 1; }
    increaseObs(observable, -decrement);
}
//# sourceMappingURL=SettingsVM.js.map
