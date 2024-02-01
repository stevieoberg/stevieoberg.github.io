function openPage(contentClass, pageName) {
  // Hide all content elements by default */
  var content = document.getElementsByClassName(contentClass);

  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

var openProject = (id) => openPage("projectContent", id);
