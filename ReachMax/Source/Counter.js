var Counter = (function () {
    function Counter(name, startingNumber, increment, decrement) {
        if (typeof startingNumber === "undefined") { startingNumber = 0; }
        if (typeof increment === "undefined") { increment = 1; }
        if (typeof decrement === "undefined") { decrement = 1; }
        this.name = name;
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
//# sourceMappingURL=Counter.js.map
