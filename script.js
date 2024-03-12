function goToLink() {
    var selectBox = document.getElementById("links");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    window.location = selectedValue;
  }
  function toggleCategory() {
    var category = document.getElementById("category");
    if (category.style.display === "none") {
        category.style.display = "block";
    } else {
        category.style.display = "none";
    }
}