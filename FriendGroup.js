"use strict";
exports.__esModule = true;
var Friend_1 = require("./Friend");
var anna = new Friend_1.Friend("Anna", 25, "anna@googlecom", true);
var betsy = new Friend_1.Friend("Betsy", 28, "betsy@googlecom", false);
var penny = new Friend_1.Friend("Penny", 42, "penny@googlecom", true);
var tom = new Friend_1.Friend("Tom", 31, "tom@googlecom", true);
var lisa = new Friend_1.Friend("Lisa", 29, "lisa@googlecom", true);
var friendArr = [anna, betsy, penny, tom, lisa];
for (var _i = 0, friendArr_1 = friendArr; _i < friendArr_1.length; _i++) {
    var person = friendArr_1[_i];
    console.log(person.about());
}
