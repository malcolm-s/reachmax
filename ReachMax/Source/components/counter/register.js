define(["require", "exports", "knockout"], function(require, exports, ko) {
    ko.components.register("counter", {
        template: { require: "text!components/counter/template.html" },
        viewModel: { require: "components/counter/viewModel" }
    });
});
//# sourceMappingURL=register.js.map
