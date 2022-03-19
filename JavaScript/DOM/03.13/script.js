class BudgetApp {
    openModalBtn = document.querySelector(".openModal");
    backdrop = document.querySelector('.backdrop');
    closeModalBtn = document.querySelector(".close");
    registerBtn = document.querySelector(".register");

    // inputs
    description = document.querySelector("#description");
    type = document.querySelector("#type");
    amount = document.querySelector("#amount");
    date = document.querySelector("#date");

    // balance
    balanceEl = document.querySelector('.balance');
    tIncome = document.querySelector('.t-income');
    tExpence = document.querySelector('.t-expence');

    budgetList = [];
    constructor(){
        this.listenEvents();
        this.updateUI(this.budgetList);
    }

    openModal(){
        this.backdrop.classList.add('open');
    }

    closeModal(){
        this.backdrop.classList.remove('open');
    }

    addBudget(){
        const budget = {
            description: this.description.value,
            type: this.type.value,
            amount: +this.amount.value,
            date: this.date.value,
            id: Math.random().toString().split('.')[1]
        }
        this.budgetList.push(budget);
        this.updateUI();
        this.closeModal();
    }

    calculateIncomeAndExpence(){
        var income , expence;
        income = this.budgetList.filter(el => el.type == "+").map(el => el.amount);
        expence = this.budgetList.filter(el => el.type !== "+").map(el => el.amount);
        if (!income.length){
            income = 0
        } else {
            income = income.reduce((a , b) => a + b);
        }

        if (!expence.length){
            expence = 0
        } else {
            expence = expence.reduce((a , b) => a + b);
        }
        return {
            totalIncome: income,
            totalExpence: expence,
            balance: income - expence
        }
    }

    updateUI(){
        const balances = this.calculateIncomeAndExpence();
        this.balanceEl.innerHTML = balances.balance;
        this.tIncome.innerHTML = balances.totalIncome;
        this.tExpence.innerHTML = balances.totalExpence;
    }

    listenEvents(){
        this.openModalBtn.addEventListener('click' , this.openModal.bind(this));
        this.closeModalBtn.addEventListener('click' , this.closeModal.bind(this));
        this.registerBtn.addEventListener('click' , this.addBudget.bind(this));
    }
}

const app = new BudgetApp();

// 1. Хүснэгт хэсэгт орлого зарлагыг харуулах
// 2. filter ajilluulah
// 3. sort ajilluulah