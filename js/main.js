// Forces Academy Faisalabad — main.js

document.addEventListener("DOMContentLoaded", function () {
  // Highlight the current page's nav link automatically
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll("#mainNav .nav-link");

  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});