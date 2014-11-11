/// <reference path="../lib/typings/jquery/jquery.d.ts" />

import settings = require("views/settings");
import player = require("views/player");
var tmp = settings;
var tmp2 = player;
$(() => {
    //// initialise settings - needed for building the game and players
    //settings = new Settings();
    //ko.applyBindings(settings, settings.settingsElement);

    //// initialise game
    //gamevm = new Game();
    //ko.applyBindings(gamevm, settings.gameElement);

    //// bind user input handler
    //$(document).keyup(e => {
    //    var spaceKeyCode = 32;
    //    if (e.which == 32) {
    //        gamevm.getActivePlayer().add();
    //    }
    //});
});

