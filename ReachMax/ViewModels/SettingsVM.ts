class SettingsVM {
    gameMax: KnockoutObservable<number> = ko.observable(15);
    secondsPerTurn: KnockoutObservable<number> = ko.observable(5);
    maxPlayers: number = 5;
}