define(["require", "exports", "knockout"], function(require, exports, ko) {
    ko.components.register("player", {
        template: { require: "text!components/player/template.html" },
        viewModel: { require: "components/player/viewModel" }
    });
});
//# sourceMappingURL=register.js.map
