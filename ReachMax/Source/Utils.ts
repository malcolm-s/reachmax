class AutoNumber {
    static current: number = 0;

    static next(): number {
        return AutoNumber.current++;
    }
}

interface Array<T> {
    add(numberToAdd: number, generator: () => T): void;
}

Array.prototype.add = function (numberToAdd: number, generator: () => any) {
    for (var i = 0; i < numberToAdd; i++) {
        this.push(generator());
    }
}
 