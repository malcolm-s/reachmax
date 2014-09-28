class Counter {
    current: KnockoutObservable<number> = ko.observable(0);

    constructor(startingNumber: number= 0, private increment: number= 1, private decrement: number= 1) {
        this.current(startingNumber);
    }

    increase(): void {
        this.current(this.current() + this.increment);
    }

    decrease(): void {
        this.current(this.current() - this.decrement);
    }
}

class Settings {
    gameMaxCounter: KnockoutObservable<Counter> = ko.observable(new Counter(15));
    gameMax: KnockoutObservable<number> = ko.observable(15);
    secondsPerTurn: KnockoutObservable<number> = ko.observable(5);
    maxPlayers: number = 5;
}