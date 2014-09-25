///// <reference path="../scripts/typings/knockout/knockout.d.ts" />
//class GameViewModel {
//    timer: KnockoutObservable<Counter>;
//    constructor(public game: Game) {
//        this.timer = ko.observable(game.timeCounter);
//    }
//}
//class Game implements Updatable {
//    timeCounter: Counter;
//    scoreCounter: Counter;
//    players: Player[] = [];
//    constructor(max: number, public loop: Loop) {
//        this.loop = loop;
//        this.timeCounter = new Counter(
//            5,
//            c => c.current++,
//            (() => this.activateNextPlayer()).bind(this));
//        this.scoreCounter = new Counter(
//            max,
//            c => {
//                $(".total").text(c.current);
//                $(".total-progress").val(((c.current / c.maximum) * 100).toString());
//            },
//            (() => {
//                this.loop.stop();
//                $("#winner").text(this.getActivePlayer().name + " won!");
//            }).bind(this),
//            false);
//        this.addPlayers(2);
//        this.players[0].activate();
//    }
//    update() {
//        this.timeCounter.update();
//    }
//    getActivePlayer(): Player {
//        return this.players.filter(p => p.isActive)[0];
//    }
//    activateNextPlayer(): void {
//        var currentPlayer = this.players.filter(p => p.isActive)[0],
//            nextPlayerIndex = this.players.indexOf(currentPlayer) + 1;
//        currentPlayer.deactivate();
//        if (nextPlayerIndex >= this.players.length) {
//            nextPlayerIndex = 0;
//            // var minimumId = this.players.reduce((prev: Player, curr: Player) => prev.id > curr.id ? curr : prev).id;
//        }
//        this.players[nextPlayerIndex].activate();
//    }
//    addPlayers(numberOfPlayers: number) {
//        this.players.add(numberOfPlayers, () => new Player(this, AutoNumber.next()));
//    }
//}
//# sourceMappingURL=Game.js.map
