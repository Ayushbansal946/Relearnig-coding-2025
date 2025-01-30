
	// takes the input from the user from a drop down list of levels from level 1 to level 12 and changes the value of the script tag withe the id of scripts to the value of the selected secipt and the level no like Script1.js if the user selects level 1.
	function select_level() {
  var level = document.getElementById("level").value;
  console.log("Selected Level: " + level);

  // Remove old script if it exists
  var oldScript = document.getElementById('dynamicScript');
  if (oldScript) {
    oldScript.parentNode.removeChild(oldScript);
  }

  // Disable images until script loads
  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
    img.style.pointerEvents = 'none';
  });

  // Load new script
  var script = document.createElement('script');
  script.id = 'dynamicScript';
  script.src = "./scripts/Script" + level + ".js";
  script.onload = function() {
    // Assign event handlers after the script has loaded
    document.getElementById('i1').onclick = sw1;
    document.getElementById('i2').onclick = sw2;
    document.getElementById('i3').onclick = sw3;
    document.getElementById('i4').onclick = sw4;
    document.getElementById('i5').onclick = sw5;
    document.getElementById('i6').onclick = sw6;
    document.getElementById('i7').onclick = sw7;
    document.getElementById('i8').onclick = sw8;
    document.getElementById('i9').onclick = sw9;

    // Enable images now that the script has loaded
    images.forEach(function(img) {
      img.style.pointerEvents = 'auto';
    });
  };
  document.head.appendChild(script);
}
