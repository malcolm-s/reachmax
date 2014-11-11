define(["require", "exports", "model/Player"], function(require, exports, P) {
    var Player = P.Player;

    var Game = (function () {
        function Game() {
            this.currentSecond = 1;
            this.secondsPerTurn = 5;
            this.players = [];
        }
        Game.prototype.start = function () {
            var _this = this;
            console.log("Start");
            setInterval(function () {
                return _this.tick();
            }, 1000);
        };

        Game.prototype.addPlayer = function (name) {
            this.players.push(new Player(name, true));
        };

        Game.prototype.log = function () {
            console.log(this);
        };

        Game.prototype.tick = function () {
            console.log("Tick: " + this.currentSecond);
            if (this.currentSecond + 1 > this.secondsPerTurn) {
                this.reset();
            } else {
                this.currentSecond += 1;
            }
        };

        Game.prototype.reset = function () {
            this.currentSecond = 1;
        };
        return Game;
    })();
    exports.Game = Game;
});
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
//# sourceMappingURL=Game.js.map
