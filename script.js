document.querySelector(".container").addEventListener("click", function (e) {
  if (e.target.className == "modal") {
    document.querySelector(".container").className = "container blur";
    document.getElementById("modalwindow").style.display = "block";
  } else {
    document.querySelector(".container").className = "container";
    document.getElementById("modalwindow").style.display = "none";
  }
});
document.querySelector("#cross").addEventListener("click", function () {
  document.querySelector(".container").className = "container";
  document.getElementById("modalwindow").style.display = "none";
});
