class Settings {
    static gameMax: KnockoutObservable<number> = ko.observable(15);
    static secondsPerTurn: KnockoutObservable<number> = ko.observable(5);
    static maxPlayers: number = 5;
}