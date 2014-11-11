import ko = require("knockout");

export interface PlayerParams {
    name: string;
    active: KnockoutObservable<boolean>;
}

export class PlayerVM {
    name: string;
    active: KnockoutObservable<boolean>;

    constructor(params: PlayerParams) {
        if (params) {
            this.name = params.name;

            this.active = params.active
            ? params.active
            : ko.observable(false);
        }
    }
    toggleActive() {
        this.active(!this.active());
    }
}

return PlayerVM;