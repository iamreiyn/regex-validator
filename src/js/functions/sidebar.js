const element = document.getElementById("iconSidebar");

function showSidebar() {
  element.classList.add("hidden");
}

function showIconSB() {
  document.getElementsByClassName("Sidebar").style.display = "none";
  document.getElementsByClassName("iconSidebar").style.display = "inline";
}

export { showSidebar, showIconSB };