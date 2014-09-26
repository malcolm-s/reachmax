/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm;
var settings;
$(function () {
    settings = new SettingsVM();

    ko.applyBindings(settings, document.querySelector(".settings"));

    gamevm = new GameVM();

    $(document).keyup(function (e) {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });

    ko.applyBindings(gamevm, document.querySelector(".game"));
});
//# sourceMappingURL=Main.js.map
