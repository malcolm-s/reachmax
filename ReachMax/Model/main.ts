/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm: GameVM;
var settings: SettingsVM;
$(() => {
    // initialise settings - needed for building the game and players
    settings = new SettingsVM();
    ko.applyBindings(settings, document.querySelector(".settings"));

    // initialise game
    gamevm = new GameVM();
    ko.applyBindings(gamevm, document.querySelector(".game"));

    // bind user input handler
    $(document).keyup(e => {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });
});
