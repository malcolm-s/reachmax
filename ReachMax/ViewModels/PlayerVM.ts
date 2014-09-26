declare var settings: SettingsVM;

class PlayerVM {
    maximum: number;
    current: KnockoutObservable<number> = ko.observable(0);
    isActive: KnockoutObservable<boolean> = ko.observable(false);
    canAdd: KnockoutComputed<boolean>;

    constructor(public game: GameVM) {
        this.maximum = settings.secondsPerTurn();
        this.canAdd = ko.computed(() => this.current() < this.maximum);
    }

    activate() {
        this.isActive(true);
        this.current(0);
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