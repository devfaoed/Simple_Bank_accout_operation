// write a javscript code to save and withdraw money from an accout

let account = (amount) => {
    this.account_balance = amount;
    deposit();
    withdraw();  
}

let deposit = (amount) => {
    let debit = amount + this.account_balance;
    if(debit){
        console.log(amount + " saved successfully!, account balance = " + debit);
    }
}

let withdraw = (amount) => {
    if(amount <= this.account_balance){
        let balance = this.account_balance - amount;
        if(balance){
            console.log("Transaction Successful, avaliable balance is " + balance);
        }
    }
    if(amount > this.account_balance){
        console.log("Transaction fail!, insufficient balance");
    }
}

account(2000)
console.log(withdraw(1000))
console.log(deposit(8000))
