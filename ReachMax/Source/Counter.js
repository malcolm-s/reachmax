//interface ICounter extends Updatable {
//    maximum: number;
//    current: number;
//    onUpdate: (c: ICounter) => void;
//    onEqual: () => void;
//    resetOnEqual: boolean;
//}
//class Counter implements Updatable {
//    constructor(public maximum: number,
//        private onUpdate: (c: Counter) => void,
//        private onEqual: () => void,
//        private resetOnEqual: boolean = true,
//        public current: number = 0) {
//    }
//    update() {
//        this.onUpdate(this);
//        if (this.current == this.maximum) {
//            this.onEqual();
//            if (this.resetOnEqual) {
//                this.current = 0;
//            }
//        }
//    }
//}
//class ViewableCounter extends Counter {
//    currentView: KnockoutObservable<number>;
//    constructor(
//        maximum: number,
//        current: number,
//        onUpdate: (c: Counter) => void,
//        onEqual: () => void,
//        resetOnEqual: boolean = true) {
//        super(maximum, onUpdate, onEqual, resetOnEqual, current);
//        this.currentView = ko.observable(this.current);
//    }
//    update() {
//    }
//}
//# sourceMappingURL=Counter.js.map
