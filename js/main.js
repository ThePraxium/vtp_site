/* The Von Terra Project — nav + accordion behavior */
(function () {
  "use strict";

  // Mobile hamburger
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Dropdowns (click for touch/mobile; hover handled by CSS on desktop)
  document.querySelectorAll(".dropdown > a.nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var isMobile = window.matchMedia("(max-width: 768px)").matches;
      var parent = link.parentElement;
      if (isMobile || !parent.classList.contains("open")) {
        // First tap/click opens the dropdown instead of navigating
        if (isMobile) {
          e.preventDefault();
          parent.classList.toggle("open");
          return;
        }
      }
      // Desktop: allow navigation to the hub page
    });
  });

  // Close desktop dropdowns when clicking elsewhere
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(function (d) {
        if (!window.matchMedia("(max-width: 768px)").matches) d.classList.remove("open");
      });
    }
  });

  // FAQ accordion
  document.querySelectorAll(".accordion-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".accordion-item");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
