/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm: GameVM;
var settings: SettingsVM;
$(() => {
    settings = new SettingsVM();

    ko.applyBindings(settings, document.querySelector(".settings"));


    gamevm = new GameVM();

    $(document).keyup(e => {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });

    ko.applyBindings(gamevm, document.querySelector(".game"));
});
