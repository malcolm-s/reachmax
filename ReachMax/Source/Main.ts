/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var gamevm: Game;
var settings: Settings;
$(() => {
    // initialise settings - needed for building the game and players
    settings = new Settings();
    ko.applyBindings(settings, settings.settingsElement);

    // initialise game
    gamevm = new Game();
    ko.applyBindings(gamevm, settings.gameElement);

    // bind user input handler
    $(document).keyup(e => {
        var spaceKeyCode = 32;
        if (e.which == 32) {
            gamevm.getActivePlayer().add();
        }
    });
});
