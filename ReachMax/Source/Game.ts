/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
declare var settings: Settings;
class Game {
    loopId: number;

    maximum: KnockoutObservable<number> = ko.observable<number>();
    current: KnockoutObservable<number> = ko.observable(0);
    inProgress: KnockoutComputed<boolean>;

    playerNameInput: KnockoutObservable<string> = ko.observable("");
    players: KnockoutObservableArray<Player> = ko.observableArray([]);
    loser: KnockoutObservable<Player> = ko.observable<Player>();

    constructor() {
        this.maximum(settings.gameMax().current());
        this.inProgress = ko.computed(() => this.current() != this.maximum());

        this.players().add(1, () => new Player(this, "Malcolm"));
        this.start();
    }

    start(): void {
        this.players()[0].activate();
        this.loopId = setInterval(
            () => this.activateNextPlayer(),
            settings.secondsPerTurn().current() * 1000);
    }

    stop(): void {
        clearInterval(this.loopId);
    }

    addPlayer(): void {
        var name = this.playerNameInput();
        if (name !== "") {
            this.players.push(new Player(this, name));
            this.playerNameInput("");
        }
    }

    getActivePlayer(): Player {
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

