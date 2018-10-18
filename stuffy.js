"use strict";
exports.__esModule = true;
var Stuffy = /** @class */ (function () {
    function Stuffy(n, t, c) {
        this._name = n;
        this.type = t;
        this.color = c;
    }
    Object.defineProperty(Stuffy.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Stuffy.prototype.about = function () {
        return "name: " + this._name + ", type: " + this.type + ", color: " + this.color;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
