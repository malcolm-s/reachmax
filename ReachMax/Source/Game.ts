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
        this.applySettings();
    }

    start(): void {
        this.loopId = setInterval(
            () => this.activateNextPlayer(),
            settings.secondsPerTurn().current() * 1000);
        //this.activateNextPlayer();
    }

    stop(): void {
        clearInterval(this.loopId);
    }

    applySettings(): void {
        this.maximum(settings.gameMax().current());
        this.inProgress = ko.computed(() => this.current() != this.maximum());

        // add existing players?
        //this.players().add(1, () => new Player(this, "Malcolm"));
        this.start();
    }

    addPlayer(): void {
        var name = this.playerNameInput();
        if (name !== "") {
            var activatePlayer = this.players().length <= 0;
            this.players.push(new Player(this, name, activatePlayer));
            this.playerNameInput("");
        }
    }

    getActivePlayer(): Player {
        return this.players().filter(p => p.isActive())[0];
    }

    activateNextPlayer(): void {
        if (this.players().length > 0) {
            var currentPlayer = this.getActivePlayer();
            var nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;

            currentPlayer.deactivate();

            if (nextPlayerIndex >= this.players().length) {
                nextPlayerIndex = 0;
            }

            this.players()[nextPlayerIndex].activate();
        }
    }
}

