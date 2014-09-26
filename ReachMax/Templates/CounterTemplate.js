/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var CounterViewModel = (function () {
    function CounterViewModel() {
        // add min/max and can inc/dec
        this.current = ko.observable(0);
    }
    CounterViewModel.prototype.increase = function (increment) {
        if (typeof increment === "undefined") { increment = 1; }
        this.current(this.current() + increment);
    };

    CounterViewModel.prototype.decrease = function (decrement) {
        if (typeof decrement === "undefined") { decrement = 1; }
        this.current(this.current() + decrement);
    };
    return CounterViewModel;
})();
//# sourceMappingURL=CounterTemplate.js.map
