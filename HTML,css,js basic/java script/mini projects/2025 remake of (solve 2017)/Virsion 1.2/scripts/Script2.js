function swapElements(id1, id2) {
  var temp = document.getElementById(id1).src;
  document.getElementById(id1).src = document.getElementById(id2).src;
  document.getElementById(id2).src = temp;
}

function sw1() {
  swapElements("i1", "i4");
}
function sw2() {
  swapElements("i2", "i1");
}
function sw3() {
  swapElements("i3", "i2");
}
function sw4() {
  swapElements("i4", "i5");
}
function sw5() {
  swapElements("i5", "i6");
}
function sw6() {
  swapElements("i6", "i9");
}
function sw7() {
  swapElements("i7", "i3");
}
function sw8() {
  swapElements("i8", "i7");
}
function sw9() {
  swapElements("i9", "i8");
}
