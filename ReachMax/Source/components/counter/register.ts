import ko = require("knockout");

ko.components.register("counter", {
    template: { require: "text!components/counter/template.html" },
    viewModel: { require: "components/counter/viewModel" }
});