//class Loop implements Updatable {
//    private timerId: number;
//    private timedElements: Updatable[] = [];

//    constructor(private interval: number) {
//        this.start();
//    }

//    // Starts the update loop with this loop's interval.
//    start() {
//        this.timerId = setInterval(() => this.update(), this.interval);
//    }

//    // Stops the update loop.
//    stop() {
//        clearInterval(this.timerId);
//    }

//    // Updates all the timed elements linked to this loop.
//    update() {
//        this.timedElements.forEach(e => e.update());
//    }

//    createGame(max: number): Game {
//        var game = new Game(max, this);
//        this.timedElements.push(game);
//        return game;
//    }
//} 