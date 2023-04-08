function showSidebar() {
  document.getElementById("Sidebar").style.display = "inline";
  document.getElementById("iconSidebar").style.display = "none";
}

function showIconSB() {
  document.getElementById("Sidebar").style.display = "none";
  document.getElementById("iconSidebar").style.display = "inline";
}

export { showSidebar, showIconSB };