import{Friend} from "./Friend"

let anna: Friend = new Friend("Anna", 25, "anna@googlecom", true);
let betsy: Friend = new Friend("Betsy", 28, "betsy@googlecom", false);
let penny: Friend = new Friend("Penny", 42, "penny@googlecom", true);
let tom: Friend = new Friend("Tom", 31, "tom@googlecom", true);
let lisa: Friend = new Friend("Lisa", 29, "lisa@googlecom", true);

let friendArr: Friend[] = [anna, betsy, penny, tom, lisa];

for (let person of friendArr) {
    console.log(person.about());
}