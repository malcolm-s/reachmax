declare var settings: Settings;

class Player {
    name: KnockoutObservable<string> = ko.observable("");
    maximum: number;
    current: KnockoutObservable<number> = ko.observable(0);
    isActive: KnockoutObservable<boolean> = ko.observable(false);
    canAdd: KnockoutComputed<boolean>;

    constructor(public game: Game, name: string, isActive: boolean) {
        this.maximum = settings.secondsPerTurn().current();
        this.name(name);
        this.canAdd = ko.computed(() => this.current() < this.maximum);

        if (this.isActive) {
            this.activate();
        }
    }

    activate(): Player {
        this.isActive(true);
        this.current(0);
        return this;
    }

    deactivate() {
        this.isActive(false);
    }

    add(): void {
        if (this.canAdd()) {
            // Increase game score
            var currentScore = this.game.current();
            this.game.current(currentScore + 1);
            // Increase current total
            this.current(this.current() + 1);
        }
    }
}