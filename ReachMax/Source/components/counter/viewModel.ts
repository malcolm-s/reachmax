import ko = require("knockout");

export interface CounterParams {
    current: KnockoutObservable<number>;
    maximum: number;
    increment: number;
    name: string;
}

export class CounterViewModel {
    current: KnockoutObservable<number>;
    maximum: number;
    increment: number;
    name: string;

    constructor(params: CounterParams) {
        if (params) {
            this.current = params.current
            ? params.current
            : ko.observable(1);

            this.maximum = params.maximum
            ? params.maximum
            : 15;

            this.increment = params.increment
            ? params.increment
            : 1;

            this.name = params.name;
        } else {
            this.current = ko.observable(1);
            this.maximum = 15;
            this.increment = 1;
        }
    }

    public increase(): void {
        this.current(this.current() + this.increment);
    }

    public decrease(): void {
        this.current(this.current() - this.increment);
    }

    public canIncrease(): boolean {
        return this.current() < this.maximum;
    }

    public canDecrease(): boolean {
        return this.current() > 0;
    }
}

return CounterViewModel;