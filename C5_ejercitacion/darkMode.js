const darkMode = document.querySelector("#dark");
const body = document.querySelector("body");

darkMode.addEventListener("click", function () {
  body.classList.toggle("dark");
  Buttontoggle();
});

function Buttontoggle() {
  if (darkMode.value == "Dark Mode") {
    darkMode.value = "Light Mode";
  } else if (darkMode.value == "Light Mode") {
    darkMode.value = "Dark Mode";
  }
}
