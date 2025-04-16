document.addEventListener('DOMContentLoaded',()=>{
const expenseForm=document.getElementById('expense-form');
const expenseName=document.getElementById('expense-name');
const expenseAmount=document.getElementById('expense-amount');
const expenseList=document.getElementById('expense-list');
const totalAmountDisplay=document.getElementById('total-amount');
let expenses = JSON.parse(localStorage.getItem('expenses'))||[];
function calcTotal(){
    renderExpenses();
    return expenses.reduce((sum,expense) => sum+expense.amount,0);
}
let totalAmount=calcTotal();

expenseForm.addEventListener('submit',(e)=>{
e.preventDefault();
let name=expenseName.value.trim();
let amount=parseFloat(expenseAmount.value);
if(name!== "" && !isNaN(amount) && amount > 0 )
    {
        const newExpense={
            id: Date.now(),
            name,
            amount
        };
        expenses.push(newExpense);
        saveExpensesToLocal();
        //clear input
        expenseName.value="";
        expenseAmount.value="";
        updateTotal();
        renderExpenses();
    }
})
function renderExpenses()
{
    expenseList.innerHTML="";
    expenses.forEach(expense => {
        let li=document.createElement('li');
        li.innerHTML=`
         ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
        `
        expenseList.appendChild(li);
    });
}

function saveExpensesToLocal()
{
    localStorage.setItem('expenses',JSON.stringify(expenses))
}
function updateTotal(){
    totalAmount=calcTotal();
    totalAmountDisplay.textContent=totalAmount.toFixed(2);
}












})