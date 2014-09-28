declare var gamevm: Game;

class Settings {
    gameMax: KnockoutObservable<Counter> = ko.observable(new Counter("Game max", 15));
    secondsPerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Seconds per turn", 4));
    maxIncreasePerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Max increase per turn", 5));

    counters: KnockoutObservableArray<KnockoutObservable<Counter>> = ko.observableArray([]);

    maxPlayers: number = 5;

    constructor() {
        this.counters().push(this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn);
    }

    applySettings(): void {
        gamevm = new Game();
    }
}