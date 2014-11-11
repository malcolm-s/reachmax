//interface Array<T> {
//    add(numberToAdd: number, generator: () => T): void;
//}
define(["require", "exports"], function(require, exports) {
    //Array.prototype.add = function (numberToAdd: number, generator: () => any) {
    //    for (var i = 0; i < numberToAdd; i++) {
    //        this.push(generator());
    //    }
    //}
    var AutoNumber = (function () {
        function AutoNumber() {
        }
        AutoNumber.next = function () {
            return AutoNumber.current++;
        };
        AutoNumber.current = 0;
        return AutoNumber;
    })();
    exports.AutoNumber = AutoNumber;
});
//# sourceMappingURL=Utils.js.map
