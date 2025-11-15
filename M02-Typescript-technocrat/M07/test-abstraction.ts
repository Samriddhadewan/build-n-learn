
abstract class BankAccount{
    balance : number;
    constructor(initialBalance : number){
        this.balance = initialBalance
    };

    deposit(amount : number): void {
        this.balance += amount;
    }

    abstract withdrawl(amount : number) : void;
}

class CurrentAccount extends BankAccount{
    withdrawl(amount : number) :void {
        const fee = 2;
        const totalAmount = fee + amount;
        if(totalAmount <= this.balance){
            this.balance -= totalAmount
            console.log(`deposited ${totalAmount}, Current balance ${this.balance}`)
        }else{
            console.log(`Insufficient balance`)
        }
    }
}

const myAccount = new CurrentAccount(1000);
myAccount.withdrawl(400);