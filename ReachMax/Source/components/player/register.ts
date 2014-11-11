import ko = require("knockout");

ko.components.register("player", {
    template: { require: "text!components/player/template.html" },
    viewModel: { require: "components/player/viewModel" }
});