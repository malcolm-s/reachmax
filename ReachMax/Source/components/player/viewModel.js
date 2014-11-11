define(["require", "exports", "knockout"], function(require, exports, ko) {
    var PlayerVM = (function () {
        function PlayerVM(params) {
            if (params) {
                this.name = params.name;

                this.active = params.active ? params.active : ko.observable(false);
            }
        }
        PlayerVM.prototype.toggleActive = function () {
            this.active(!this.active());
        };
        return PlayerVM;
    })();
    exports.PlayerVM = PlayerVM;

    return PlayerVM;
});
//# sourceMappingURL=viewModel.js.map
