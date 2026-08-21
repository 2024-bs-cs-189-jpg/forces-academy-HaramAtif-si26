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
  // Back to Top Button
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
  // ==========================
  var statsSection = document.querySelector("#stats");
  var counters = document.querySelectorAll(".stat-number");
  var COUNTER_DURATION = 2000; // ms

  function animateCounter(counter, duration) {
    var target = parseInt(counter.dataset.target, 10);
    var startText = counter.textContent.trim();
    var symbol = startText.includes("%") ? "%" : startText.includes("+") ? "+" : "";
    var startTime = null;

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
    startCounters();
  }

  // ==========================
  // Dark Mode Toggle (Week 6 — hardened Week 7)
  // ==========================
  var themeToggleBtn = document.getElementById('themeToggleBtn');

  function setThemeIcon(isDark) {
    if (!themeToggleBtn) return;
    var icon = themeToggleBtn.querySelector('i');
    if (!icon) return;
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }

  if (themeToggleBtn) {
    setThemeIcon(document.body.classList.contains('dark-mode'));

    // Guard: agar kabhi ye script accidentally dobara chal jaye (duplicate
    // main.js include, ya koi aur script isi button pe listener laga de),
    // to ye check dusri baar bind hone se rok deta hai. Iske bina, ek click
    // do listeners chala deta — matlab dark-mode ON->OFF->ON, yani net mein
    // kuch change nahi hota (ye hi "light mode nahi ho raha" wala symptom hai).
    if (!themeToggleBtn.dataset.themeBound) {
      themeToggleBtn.dataset.themeBound = 'true';

      themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');

        try {
          localStorage.setItem('fa-dark-mode', isDark ? 'true' : 'false');
        } catch (e) {
          /* localStorage unavailable, ignore */
        }

        setThemeIcon(isDark);
      });
    }
  }


});