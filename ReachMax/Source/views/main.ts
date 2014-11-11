/// <reference path="../lib/typings/jquery/jquery.d.ts" />

// views
import settings = require("views/settings");
var tmp = settings;

// models
import G = require("model/Game");
var Game = G.Game;

$(() => {
    var game = new Game();

    game.start();
    game.addPlayer("Ted");
    game.addPlayer("Jim");

    game.log();
});

