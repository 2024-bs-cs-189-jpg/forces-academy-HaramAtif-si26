document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('searchInput');
  var courseFilter = document.getElementById('courseFilter');
  var yearFilter = document.getElementById('yearFilter');
  var statusFilter = document.getElementById('statusFilter');
  var resetBtn = document.getElementById('resetFilters');
  var tableBody = document.getElementById('resultsTableBody');

  if (!tableBody) return;

  var rows = Array.prototype.slice.call(
    tableBody.querySelectorAll('tr:not(.no-results-row)')
  );
  var noResultsRow = tableBody.querySelector('.no-results-row');

  function applyFilters() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    var course = courseFilter.value;
    var year = yearFilter.value;
    var status = statusFilter.value;
    var visibleCount = 0;

    rows.forEach(function (row) {
      var text = row.textContent.toLowerCase();
      var matchesSearch = searchTerm === '' || text.indexOf(searchTerm) !== -1;
      var matchesCourse = course === 'all' || row.dataset.course === course;
      var matchesYear = year === 'all' || row.dataset.year === year;
      var matchesStatus = status === 'all' || row.dataset.status === status;

      var visible = matchesSearch && matchesCourse && matchesYear && matchesStatus;
      row.classList.toggle('d-none', !visible);
      if (visible) visibleCount++;
    });

    if (noResultsRow) {
      noResultsRow.classList.toggle('d-none', visibleCount !== 0);
    }
  }

  [searchInput, courseFilter, yearFilter, statusFilter].forEach(function (el) {
    if (!el) return;
    var eventName = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(eventName, applyFilters);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      searchInput.value = '';
      courseFilter.value = 'all';
      yearFilter.value = 'all';
      statusFilter.value = 'all';
      applyFilters();
    });
  }
});