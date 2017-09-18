//we want to create a Bank account that has a balance and methods to deposit, withdraw, and check the balance of the account.
//in addition, we want to keep the balance private from outside access, so we can only use the private methods to access the balance.
function Bank(amount) {
  return {
    'deposit': function(val) {
      amount += val;
    },
    'withdraw': function(val) {
      amount -= val;
    },
    'getBalance': function () {
      return amount;
    }
  }
}

let newAcc = new Bank(1000);
newAcc.deposit(50);
newAcc.withdraw(100);
console.log(newAcc.getBalance());
console.log(newAcc.balance);