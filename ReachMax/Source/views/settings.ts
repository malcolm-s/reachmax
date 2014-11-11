import ko = require("knockout");

// components
import counter = require("components/counter/register");
var tempCounter = counter;

class SettingsVM {
    gameMax: KnockoutObservable<number> = ko.observable(15);
    secondsPerTurn: KnockoutObservable<number> = ko.observable(4);
    maxIncreasePerTurn: KnockoutObservable<number> = ko.observable(4);

    constructor() { }
}
var vm = new SettingsVM();

ko.applyBindings(vm, document.querySelector(".settings"));