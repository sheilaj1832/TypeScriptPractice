export class Friend {
    fName: string;
    age: number;
    email: string;
    bestFriend: boolean;

constructor (n: string, a: number, e: string, b: boolean) {
    this.fName = n;
    this.age = a;
    this.email = e;
    this.bestFriend = b;
} 
get name(): string {
    return this.fName;
}
about(): string {
        return `Name: ${this.fName}, Age: ${this.age}, Email: ${this.email}, Best: ${this.bestFriend}`;

}
}