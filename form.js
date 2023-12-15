document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("skip-link").addEventListener("click", function (e) {
    e.preventDefault();
    var mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
    }
  });
});

console.log