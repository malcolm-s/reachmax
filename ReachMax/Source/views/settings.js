define(["require", "exports", "knockout", "components/counter/register"], function(require, exports, ko, counter) {
    var tempCounter = counter;

    var SettingsVM = (function () {
        function SettingsVM() {
            this.gameMax = ko.observable(15);
            this.secondsPerTurn = ko.observable(4);
            this.maxIncreasePerTurn = ko.observable(4);
        }
        return SettingsVM;
    })();
    var vm = new SettingsVM();

    ko.applyBindings(vm, document.querySelector(".settings"));
});
//# sourceMappingURL=settings.js.map
