class Counter implements Updatable {
    constructor(public maximum: number,
        private onUpdate: (c: Counter) => void,
        private onEqual: () => void,
        private resetOnEqual: boolean = true,
        public current: number = 0) {
    }

    update() {
        this.onUpdate(this);

        if (this.current == this.maximum) {
            this.onEqual();

            if (this.resetOnEqual) {
                this.current = 0;
            }
        }
    }
} 