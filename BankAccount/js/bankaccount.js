class BankAccount {
    #name;
    #balance;
    #id;
    static AccountInfoList = [];
    constructor(name, balance) {
        this.#name = name;
        this.#balance = balance;
        this.#id=BankAccount.AccountInfoList.length+1;
    }
    getId() {
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    getBalance() {
        return parseFloat(this.#balance).toFixed(2);
    }
    setBalance(value,tranType)
    {
        var _bal=parseFloat(this.#balance);
        if(tranType=="Deposit")
        {
            
            _bal+=parseFloat(value);
        }
        else if(tranType=="Debit")
        {
            _bal-=parseFloat(value);
        }
        this.#balance=_bal;
    }
    static getAccountInfo() {
        var accStr = ""
        for (var i in this.AccountInfoList) {
            var acc = this.AccountInfoList[i];
            accStr += `Account Name : ${acc.getName()} Balance : ${acc.getBalance()}\n`;
        }
        return accStr;
    }
    static getAccount(id) {
        for (var i in this.AccountInfoList) {
            var acc = this.AccountInfoList[i];
            if (acc.getId() == id) {
                return acc;
            }
        }
    }
}