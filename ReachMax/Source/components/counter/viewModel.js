define(["require", "exports", "knockout"], function(require, exports, ko) {
    var CounterViewModel = (function () {
        function CounterViewModel(params) {
            if (params) {
                this.current = params.current ? params.current : ko.observable(1);

                this.maximum = params.maximum ? params.maximum : 15;

                this.increment = params.increment ? params.increment : 1;

                this.name = params.name;
            } else {
                this.current = ko.observable(1);
                this.maximum = 15;
                this.increment = 1;
            }
        }
        CounterViewModel.prototype.increase = function () {
            this.current(this.current() + this.increment);
        };

        CounterViewModel.prototype.decrease = function () {
            this.current(this.current() - this.increment);
        };

        CounterViewModel.prototype.canIncrease = function () {
            return this.current() < this.maximum;
        };

        CounterViewModel.prototype.canDecrease = function () {
            return this.current() > 0;
        };
        return CounterViewModel;
    })();
    exports.CounterViewModel = CounterViewModel;

    return CounterViewModel;
});
//# sourceMappingURL=viewModel.js.map
