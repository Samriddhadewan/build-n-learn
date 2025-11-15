class BankAccount {
    balance : number;
    constructor(initialBalance : number){
        this.balance = initialBalance;
    };

    deposit(amount : number) : void {
        this.balance += amount;
    }

    withdrawl(amount : number) : void {
        if(amount <= this.balance){
            this.balance -= amount;
        }
    }
    getBalance() : number {
        return this.balance
    }
}


class CurrentAccount extends BankAccount {
    draftLimit : number;

    constructor(initialBalance : number, draftLimit: number){
        super(initialBalance)
        this.draftLimit = draftLimit
    }

    override withdrawl(amount : number ){
        const totalAmount = amount + this.draftLimit;
        if(totalAmount <= this.balance){
            this.balance -= totalAmount;
        }else{
            console.log("Insufficient Balance")
        }
    }
}

const myBalance = new CurrentAccount(200,100);
myBalance.deposit(100)
myBalance.withdrawl(250)
console.log(myBalance.getBalance())