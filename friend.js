"use strict";
exports.__esModule = true;
var Friend = /** @class */ (function () {
    function Friend(n, a, e, b) {
        this.fName = n;
        this.age = a;
        this.email = e;
        this.bestFriend = b;
    }
    Object.defineProperty(Friend.prototype, "name", {
        get: function () {
            return this.fName;
        },
        enumerable: true,
        configurable: true
    });
    Friend.prototype.about = function () {
        return "Name: " + this.fName + ", Age: " + this.age + ", Email: " + this.email + ", Best: " + this.bestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;
