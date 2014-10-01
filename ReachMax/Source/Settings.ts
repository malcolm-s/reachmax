declare var gamevm: Game;

class Settings {
    settingsElement: Element;
    gameElement: Element;

    gameMax: KnockoutObservable<Counter> = ko.observable(new Counter("Game max", 15));
    secondsPerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Seconds per turn", 4));
    maxIncreasePerTurn: KnockoutObservable<Counter> = ko.observable(new Counter("Max increase per turn", 5));

    counters: KnockoutObservableArray<KnockoutObservable<Counter>>
    = ko.observableArray([this.gameMax, this.secondsPerTurn, this.maxIncreasePerTurn]);

    maxPlayers: number = 5;

    constructor() {
        this.settingsElement = document.querySelector(".settings");
        this.gameElement = document.querySelector(".game");
    }

    applySettings(): void {
        // clean existing game element
        ko.cleanNode(this.gameElement);

        // create new game and apply bindings
        gamevm = new Game();        
        ko.applyBindings(gamevm, this.gameElement);

        // bind user input handler
        $(document).keyup(e => {
            var spaceKeyCode = 32;
            if (e.which == 32) {
                gamevm.getActivePlayer().add();
            }
        });
    }
}