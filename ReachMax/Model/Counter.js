var Counter = (function () {
    function Counter(maximum, onUpdate, onEqual, resetOnEqual, current) {
        if (typeof resetOnEqual === "undefined") { resetOnEqual = true; }
        if (typeof current === "undefined") { current = 0; }
        this.maximum = maximum;
        this.onUpdate = onUpdate;
        this.onEqual = onEqual;
        this.resetOnEqual = resetOnEqual;
        this.current = current;
    }
    Counter.prototype.update = function () {
        this.onUpdate(this);

        if (this.current == this.maximum) {
            this.onEqual();

            if (this.resetOnEqual) {
                this.current = 0;
            }
        }
    };
    return Counter;
})();
//# sourceMappingURL=Counter.js.map
