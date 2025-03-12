document.addEventListener('DOMContentLoaded',()=>{
const expenseForm=document.getElementById('expense-form');
const expenseName=document.getElementById('expense-name');
const expenseAmount=document.getElementById('expense-amount');
const expenseList=document.getElementById('expense-list');
const totalAmountDisplay=document.getElementById('total-amount');
let expenses=[];
let totalAmount=Caltotal();
expenseForm.addEventListener('submit',(e)=>{
e.preventDefault();
const name=expenseName.Value.trim();
const amount=parseFloat(expenseAmount.Value.trim());
if(name!==""&& !isNaN(amount) && amount>0 )
    {
      
    }
})














})