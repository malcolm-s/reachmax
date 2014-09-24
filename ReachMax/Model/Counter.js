var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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

var ViewableCounter = (function (_super) {
    __extends(ViewableCounter, _super);
    function ViewableCounter(maximum, current, onUpdate, onEqual, resetOnEqual) {
        if (typeof resetOnEqual === "undefined") { resetOnEqual = true; }
        _super.call(this, maximum, onUpdate, onEqual, resetOnEqual, current);

        this.currentView = ko.observable(this.current);
    }
    ViewableCounter.prototype.update = function () {
    };
    return ViewableCounter;
})(Counter);
//# sourceMappingURL=Counter.js.map
