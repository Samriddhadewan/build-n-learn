// Getting Setter
class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

//   setter use korte chai 
set addBalance (amount: number){
    this.userBalance += amount;
}

get getBalance(){
    return this.userBalance;
}

}

class StudentBankAccount extends BankAccount {}

const myAccount = new BankAccount(23, "Samriddha", 20);
myAccount.addBalance = 1000;
console.log(myAccount.getBalance)