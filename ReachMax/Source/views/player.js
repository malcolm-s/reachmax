define(["require", "exports", "knockout", "components/player/register"], function(require, exports, ko, playerComp) {
    var temp = playerComp;

    var PlayerVM = (function () {
        function PlayerVM(name, active) {
            if (typeof active === "undefined") { active = false; }
            this.name = name;
            this.active = ko.observable(active);
        }
        return PlayerVM;
    })();

    var player = new PlayerVM("Ted", true);
});
//# sourceMappingURL=player.js.map
