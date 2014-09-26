class SettingsVM {
    gameMax: KnockoutObservable<number> = ko.observable(15);
    secondsPerTurn: KnockoutObservable<number> = ko.observable(5);
    maxPlayers: number = 5;

    increase(): void {
        this.gameMax(this.gameMax() + 1);
    }
    decrease(): void {
        this.gameMax(this.gameMax() - 1);
    }
}

function increaseObs(observable: KnockoutObservable<number>, increment: number = 1) {
    observable(observable() + increment);
}

function decreaseObs(observable: KnockoutObservable<number>, decrement: number = 1) {
    increaseObs(observable, -decrement);
}