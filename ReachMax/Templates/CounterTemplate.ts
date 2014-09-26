/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
class CounterViewModel {
    // add min/max and can inc/dec
    current: KnockoutObservable<number> = ko.observable(0);

    increase(increment: number= 1): void {
        this.current(this.current() + increment);
    }

    decrease(decrement: number = 1): void {
        this.current(this.current() + decrement);
    }
}
