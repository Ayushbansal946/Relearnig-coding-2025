function select_level() {
  var level = document.getElementById("level").value;
  console.log("Selected Level: " + level);

  // Remove old script if it exists
  var oldScript = document.getElementById('dynamicScript');
  if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
  }

  // Disable images until script loads
  toggleImagePointerEvents('none');

  // Load new script
  loadScript(level);
}

function toggleImagePointerEvents(state) {
  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
      img.style.pointerEvents = state;
  });
}

function loadScript(level) {
  var script = document.createElement('script');
  script.id = 'dynamicScript';
  script.src = "./scripts/Script" + level + ".js";
  script.onload = assignEventHandlers;
  document.head.appendChild(script);
}

function assignEventHandlers() {
  for (var i = 1; i <= 9; i++) {
      document.getElementById('i' + i).onclick = window['sw' + i];
  }
  toggleImagePointerEvents('auto');
}
