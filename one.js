class BankAccount{
    constructor(accountholder, balance){
        this.accountholder = accountholder
        this.balance = balance
    }
    deposit(amount){
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log(`Deposited Rs.${amount}. New balance: Rs.${this.balance}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive amount.');
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
            } else {
                console.log('Insufficient of withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }
    checkBalance() {
        console.log(`Account balance for ${this.accountholder}: Rs.${this.balance}`);
    }

}
const myAccount = new BankAccount('subha G', 2000);

myAccount.checkBalance(); // Account balance for subha G: Rs.2000

myAccount.deposit(600); // Deposited Rs.500. New balance: Rs.1500
myAccount.deposit(-50); // Invalid deposit amount. Please enter a positive amount.

myAccount.withdraw(100); // Withdrawn Rs.200. New balance: Rs.1300
myAccount.withdraw(1500); // Insufficient funds for withdrawal.   
myAccount.withdraw(-500); // Invalid withdrawal amount. Please enter a positive amount.   

myAccount.checkBalance(); // Account balance for Mithun S: Rs.1300 

