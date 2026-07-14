(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav a");

  function setActiveNav() {
    var scrollY = window.scrollY + 120;
    var current = "";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var id = href.replace("#", "");
      link.classList.toggle("is-active", id === current);
    });
  }

  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();
})();
