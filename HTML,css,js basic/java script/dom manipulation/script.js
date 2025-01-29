//example 1
//there are diffrent metthods to select the element in the dom (document object model) or bom (browser object model) and javascript all three are a part of the window object
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });