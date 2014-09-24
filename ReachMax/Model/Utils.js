var AutoNumber = (function () {
    function AutoNumber() {
    }
    AutoNumber.next = function () {
        return AutoNumber.current++;
    };
    AutoNumber.current = 0;
    return AutoNumber;
})();

Array.prototype.add = function (numberToAdd, selector) {
    for (var i = 0; i < numberToAdd; i++) {
        this.push(selector());
    }
};
//# sourceMappingURL=Utils.js.map
