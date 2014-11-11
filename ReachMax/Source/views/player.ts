import ko = require("knockout");

//components
import playerComp = require("components/player/register");
var temp = playerComp;

class PlayerVM {
    active: KnockoutObservable<boolean>;

    constructor(public name, active: boolean = false) {
        this.active = ko.observable(active);
    }
}

var player = new PlayerVM("Ted", true);

ko.applyBindings(player, document.querySelector(".player"));