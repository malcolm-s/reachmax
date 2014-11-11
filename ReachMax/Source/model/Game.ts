import P = require("model/Player");
var Player = P.Player;

export class Game {
    currentSecond: number = 1;
    secondsPerTurn: number = 5;

    players: P.Player[] = [];

    public start(): void {
        console.log("Start");
        setInterval(() => this.tick(), 1000);
    }

    public addPlayer(name: string): void {
        this.players.push(new Player(name, true));
    }

    public log(): void {
        console.log(this);
    }

    private tick(): void {
        console.log("Tick: " + this.currentSecond);
        if (this.currentSecond + 1 > this.secondsPerTurn) {
            this.reset();
        } else {
            this.currentSecond += 1;
        }
    }

    private reset(): void {
        this.currentSecond = 1;
    }
}

//class Game {
//    loopId: number;

//    maximum: KnockoutObservable<number> = ko.observable<number>();
//    current: KnockoutObservable<number> = ko.observable(0);
//    inProgress: KnockoutComputed<boolean>;

//    playerNameInput: KnockoutObservable<string> = ko.observable("");
//    players: KnockoutObservableArray<Player> = ko.observableArray([]);
//    loser: KnockoutObservable<Player> = ko.observable<Player>();

//    constructor() {
//        this.applySettings();
//        this.inProgress = ko.computed(() => this.current() != this.maximum());
//    }

//    start(): void {
//        this.loopId = setInterval(
//            () => this.activateNextPlayer(),
//            2);//settings.secondsPerTurn().current() * 1000);
//    }

//    stop(): void {
//        clearInterval(this.loopId);
//    }

//    applySettings(): void {
//        this.current(0);
//        this.maximum(2);//settings.gameMax().current());
//        this.resetPlayers();

//        this.start();
//    }

//    addPlayer(): void {
//        var name = this.playerNameInput();
//        if (name !== "") {
//            var activatePlayer = this.players().length <= 0;
//            this.players.push(new Player(this, name, activatePlayer));
//            this.playerNameInput("");
//        }
//    }

//    getActivePlayer(): Player {
//        return this.players().filter(p => p.isActive())[0];
//    }

//    activateNextPlayer(): void {
//        var currentPlayer = this.getActivePlayer();

//        if (currentPlayer === undefined) {
//            currentPlayer = this.players()[0].activate();
//        }

//        var nextPlayerIndex = this.players().indexOf(currentPlayer) + 1;

//        currentPlayer.deactivate();

//        if (nextPlayerIndex >= this.players().length) {
//            nextPlayerIndex = 0;
//        }

//        this.players()[nextPlayerIndex].activate();
//    }

//    resetPlayers(): void {
//        this.players().forEach(p => p.reset());
//    }
//}