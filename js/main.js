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
  }); // <-- forEach yahin close (Back to Top ab is ke andar nahi hai)

  // ==========================
  // Back to Top Button (ab sirf ek baar bind hoga)
  // ==========================
  var backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================
  // Animated Stats Counter
  // (duration-based — every counter finishes in exactly 2 seconds,
  // regardless of how big its target number is)
  // ==========================
  var statsSection = document.querySelector("#stats");
  var counters = document.querySelectorAll(".stat-number");
  var COUNTER_DURATION = 2000; // ms

  function animateCounter(counter, duration) {
    var target = parseInt(counter.dataset.target, 10);
    var startText = counter.textContent.trim();
    var symbol = startText.includes("%") ? "%" : startText.includes("+") ? "+" : "";
    var startTime = null;

    // Ease-out for a smoother "settle" near the end
    function easeOutQuad(t) {
      return t * (2 - t);
    }

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutQuad(progress);
      var current = Math.floor(eased * target);

      counter.textContent = current.toLocaleString() + symbol;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = target.toLocaleString() + symbol;
      }
    }

    requestAnimationFrame(step);
  }

  function startCounters() {
    counters.forEach(function (counter) {
      counter.textContent = "0";
      animateCounter(counter, COUNTER_DURATION);
    });
  }

  // Run animation only once, when the stats section scrolls into view
  if ("IntersectionObserver" in window && statsSection) {

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(statsSection);
        }
      });
    }, {
      threshold: 0.4
    });

    observer.observe(statsSection);

  } else if (statsSection) {
    // Fallback for browsers without IntersectionObserver support
    startCounters();
  }

});