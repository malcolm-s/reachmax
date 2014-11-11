import ko = require("knockout");

declare var gamevm: Game;

class Settings {
    settingsElement: Element;
    gameElement: Element;

    gameMax: KnockoutObservable<number> = ko.observable(15);
    secondsPerTurn: KnockoutObservable<number> = ko.observable(4);
    maxIncreasePerTurn: KnockoutObservable<number> = ko.observable(4);
    
    //gameMax: KnockoutObservable<Counter> = ko.observable(new Counter("Game max", 15));
    //secondsPerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Seconds per turn", 4));
    //maxIncreasePerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Max increase per turn", 5));

    //counters: KnockoutObservableArray<KnockoutObservable<Counter>>
    //= ko.observableArray([this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn]);

    maxPlayers: number = 5;

    constructor() {
        this.settingsElement = document.querySelector(".settings");
        this.gameElement = document.querySelector(".game");
    }
}