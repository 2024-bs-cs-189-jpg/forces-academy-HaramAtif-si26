// Forces Academy Faisalabad — main.js

document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // Active Navigation Link
  // ==========================
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

  // ==========================
  // Animated Stats Counter
  // ==========================
  const statsSection = document.querySelector("#stats");
  const counters = document.querySelectorAll(".stat-number");

  function startCounters() {

    counters.forEach(counter => {

      const text = counter.textContent.trim();

      // Extract only number
const target = parseInt(counter.dataset.target);
      // Detect symbol (+ or %)
      const symbol = text.includes("%") ? "%" : text.includes("+") ? "+" : "";

      let current = 0;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {

        current += increment;

        if (current >= target) {
          counter.textContent = target + symbol;
        } else {
          counter.textContent = current + symbol;
          requestAnimationFrame(updateCounter);
        }

      };

      counter.textContent = "0";
      updateCounter();

    });

  }

  // Run animation only when section appears
  if ("IntersectionObserver" in window && statsSection) {

    const observer = new IntersectionObserver(function(entries){

      entries.forEach(function(entry){

        if(entry.isIntersecting){

          startCounters();
          observer.unobserve(statsSection);

        }

      });

    }, {
      threshold: 0.4
    });

    observer.observe(statsSection);

  } else {

    startCounters();

  }

});