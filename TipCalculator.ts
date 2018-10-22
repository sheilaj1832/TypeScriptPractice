export class TipCalculator {
    amount: number;

constructor (a: number) { 
    this.amount = a;
} 
get totalAmount(): number {
    return this.amount;
}
welcome: string = "Tip Calculator\n";

console.log(welcome);

Cost of meal: 52.31

15%
Tip amount:    $7.85
Total amount:  $60.16

20%
Tip amount:    $10.46
Total amount:  $62.77

25%
Tip amount:    $13.08
Total amount:  $65.39

Continue? (y/n): n
