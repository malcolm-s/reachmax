/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

class GameView {
    maximum: KnockoutObservable<number> = ko.observable<number>();
    current: KnockoutObservable<number> = ko.observable(0);
    loopId: number;
    players: KnockoutObservableArray<PlayerView> = ko.observableArray([]);

    constructor(maximum: number,
        public secondsPerTurn: number) {
        this.maximum(maximum);
        this.players().add(5, () => new PlayerView(this, 3));
        this.start();
    }

    start(): void {
        this.players()[0].activate();
        this.loopId = setInterval(() => {
            console.log("Game updated");
            this.activateNextPlayer()
            var y = 10;
        }, this.secondsPerTurn * 1000);
    }

    stop(): void {
        clearInterval(this.loopId);
    }

    getActivePlayer(): PlayerView {
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
}

class PlayerView {
    maximum: number;
    current: KnockoutObservable<number> = ko.observable(0);
    isActive: KnockoutObservable<boolean> = ko.observable(false);
    canAdd: KnockoutComputed<boolean>;

    constructor(public game: GameView, maximum: number) {
        this.maximum = maximum;
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