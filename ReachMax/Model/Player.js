//class Player {
//    name: string;
//    isActive: boolean;
//    increaseCounter: Counter;
//    canAdd: boolean;
//    constructor(public game: Game, public id: number) {
//        this.name = "Player " + this.id;
//        this.increaseCounter = new Counter(
//            4,
//            (c => {
//                c.current++;
//                this.game.scoreCounter.current++;
//                $("#player-action").text(this.name + " increased by " + c.current);
//            }).bind(this),
//            (() => this.canAdd = false).bind(this));
//    }
//    activate(): void {
//        this.isActive = true;
//        this.canAdd = true;
//        this.increaseCounter.current = 0;
//        $("#active-player").text(this.name + " is active.");
//    }
//    deactivate(): void {
//        this.isActive = false;
//        this.canAdd = false;
//    }
//    addToGame(): void {
//        var currentScore = this.game.scoreCounter;
//        if (this.isActive
//            && this.canAdd
//            && currentScore.current < currentScore.maximum) {
//            this.increaseCounter.update();
//            this.game.scoreCounter.update();
//        }
//    }
//}
//# sourceMappingURL=Player.js.map
