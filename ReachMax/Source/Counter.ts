﻿class Counter {
    current: KnockoutObservable<number> = ko.observable(0);

    constructor(public name: string, startingNumber: number = 0, private increment: number = 1, private decrement: number = 1) {
        this.current(startingNumber);
    }

    increase(): void {
        this.current(this.current() + this.increment);
    }

    decrease(): void {
        this.current(this.current() - this.decrement);
    }
} 