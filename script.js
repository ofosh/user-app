const icon = document.getElementById("icon");
const text = document.getElementById("text")
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "assets/icon-sun.svg";
  } else {
    icon.src = "assets/icon-moon.svg";
  }
}
