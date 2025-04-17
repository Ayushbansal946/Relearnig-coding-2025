// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements and DOM elements
    const expenseForm = document.getElementById('expense-form');
    const expenseName = document.getElementById('expense-name');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount=calcTotal();
    updateTotal();
    renderExpenses();  
    expenseList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const expenseId = parseInt(e.target.getAttribute("data-id"));
            expenses = expenses.filter((expense) => expense.id !== expenseId);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();
        }
    });

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = expenseName.value.trim();
        let amount = parseFloat(expenseAmount.value);
        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(), 
                name,           
                amount          
            };
            expenses.push(newExpense);
            saveExpensesToLocal();    
            expenseName.value = "";
            expenseAmount.value = "";
            updateTotal();
            renderExpenses();
        }
    });
    function renderExpenses() {
        expenseList.innerHTML = ""; 
        expenses.forEach(expense => {
            let li = document.createElement('li');
            li.innerHTML = `
                ${expense.name} - $${expense.amount}
                <button data-id="${expense.id}">Delete</button>`;
            expenseList.appendChild(li); 
        });     
    }
    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
    function updateTotal() {
        totalAmount = calcTotal(); 
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
    function calcTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0); 
    }
});