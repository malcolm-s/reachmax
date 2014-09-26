/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
declare var settings: SettingsVM;
class GameVM {
    loopId: number;

    maximum: KnockoutObservable<number> = ko.observable<number>();
    current: KnockoutObservable<number> = ko.observable(0);
    inProgress: KnockoutComputed<boolean>;

    players: KnockoutObservableArray<PlayerVM> = ko.observableArray([]);
    loser: KnockoutObservable<PlayerVM> = ko.observable<PlayerVM>();

    constructor() {
        this.maximum(settings.gameMax());
        this.inProgress = ko.computed(() => this.current() != this.maximum());

        this.players().add(5, () => new PlayerVM(this));
        this.start();
    }

    start(): void {
        this.players()[0].activate();
        this.loopId = setInterval(
            () => this.activateNextPlayer(),
            settings.secondsPerTurn() * 1000);
    }

    stop(): void {
        clearInterval(this.loopId);
    }

    getActivePlayer(): PlayerVM {
        return this.players().filter(p => p.isActive())[0];
    }

    activateNextPlayer(): void {
        var currentPlayer = this.getActivePlayer(),
            nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;
        currentPlayer.isActive(false);

        if (nextPlayerIndex >= this.players().length) {
            nextPlayerIndex = 0;
        }

        this.players()[nextPlayerIndex].isActive(true);
    }

    add(): void {
        if (this.inProgress()) {
            var currentScore = this.current();
            this.current(currentScore + 1);
        } else {
            this.loser = ko.observable(this.getActivePlayer());
        }
    }
}

