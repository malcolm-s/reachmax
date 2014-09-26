var SettingsVM = (function () {
    function SettingsVM() {
        this.gameMax = ko.observable(15);
        this.secondsPerTurn = ko.observable(5);
        this.maxPlayers = 5;
    }
    return SettingsVM;
})();
//# sourceMappingURL=SettingsVM.js.map
