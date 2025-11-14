// Access >> modifier
class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  addBalance(amount: number) {
    this.userBalance += amount;
  }
}

class StudentBankAccount extends BankAccount{
}


const myAccount = new BankAccount(23, "Samriddha", 20);
myAccount.addBalance(200);
