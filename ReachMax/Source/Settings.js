var Counter = (function () {
    function Counter(startingNumber, increment, decrement) {
        if (typeof startingNumber === "undefined") { startingNumber = 0; }
        if (typeof increment === "undefined") { increment = 1; }
        if (typeof decrement === "undefined") { decrement = 1; }
        this.increment = increment;
        this.decrement = decrement;
        this.current = ko.observable(0);
        this.current(startingNumber);
    }
    Counter.prototype.increase = function () {
        this.current(this.current() + this.increment);
    };

    Counter.prototype.decrease = function () {
        this.current(this.current() - this.decrement);
    };
    return Counter;
})();

var Settings = (function () {
    function Settings() {
        this.gameMaxCounter = ko.observable(new Counter(15));
        this.gameMax = ko.observable(15);
        this.secondsPerTurn = ko.observable(5);
        this.maxPlayers = 5;
    }
    return Settings;
})();
//# sourceMappingURL=Settings.js.map
