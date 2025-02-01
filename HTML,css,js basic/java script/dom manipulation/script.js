//there are diffrent metthods to select the element in the dom (document object model) or bom (browser object model) and javascript all three are a part of the window object
//example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });
//example 2
  document.getElementById("highlightFirstCity").addEventListener("click", function(){
   document.getElementById("citiesList").firstElementChild.classList.add("highlight");
  })
  //example 3
  document.getElementById('changeOrder').addEventListener('click', function(){
    document.getElementById('coffeeType').textContent = 'espresso'; 
  })
//example 4
  document.getElementById('addNewItem').addEventListener('click', function(){
let newItem = document.createElement('li');
newItem.textContent = 'chocolate';
document.getElementById("shoppingList").appendChild(newItem);
})
//example 5
document.getElementById('removeLastTask').addEventListener('click', function(){
document.getElementById('taskList').firstChild.remove();

})