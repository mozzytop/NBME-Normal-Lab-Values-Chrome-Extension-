(() => {
  const TAB_KEYS = ['serum', 'csf', 'blood', 'urine'];
  const TAB_LABELS = {
    serum: 'Serum',
    csf: 'Cerebrospinal Fluid',
    blood: 'Blood (Hematologic)',
    urine: 'Urine & BMI'
  };

  let activeTab = 'serum';
  let searchQuery = '';

  const contentArea = document.getElementById('contentArea');
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  const tabBtns = document.querySelectorAll('.tab-btn');

  // ── TAB SWITCHING ──
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (searchQuery) return; // in search mode tabs are disabled
      activeTab = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });

  // ── SEARCH ──
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    clearBtn.classList.toggle('hidden', !searchQuery);
    render();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.classList.add('hidden');
    render();
    searchInput.focus();
  });

  // ── RENDER ──
  function render() {
    if (searchQuery) {
      renderSearch();
    } else {
      renderTab(activeTab);
    }
  }

  function highlight(text, query) {
    if (!query || !text) return escHtml(text || '');
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return escHtml(text).replace(
      new RegExp(`(${escaped.replace(/&/g, '&amp;')})`, 'gi'),
      '<mark>$1</mark>'
    );
    // safer approach:
  }

  function hlText(text, query) {
    if (!query || !text) return escHtml(text || '');
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map(p =>
      p.toLowerCase() === query ? `<mark>${escHtml(p)}</mark>` : escHtml(p)
    ).join('');
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function buildTable(rows, query) {
    let html = `
      <table class="lab-table">
        <colgroup>
          <col /><col /><col />
        </colgroup>
        <thead>
          <tr>
            <th>Lab Value</th>
            <th>Reference Range</th>
            <th>SI Reference</th>
          </tr>
        </thead>
        <tbody>
    `;

    rows.forEach(row => {
      if (row.type === 'header') {
        html += `
          <tr class="header-row">
            <td colspan="3">${escHtml(row.name)}</td>
          </tr>
        `;
      } else {
        const nameCell = row.indent
          ? `<td class="indented">${hlText(row.name.trim(), query)}</td>`
          : `<td>${hlText(row.name, query)}</td>`;
        html += `
          <tr class="data-row">
            ${nameCell}
            <td>${hlText(row.ref, query)}</td>
            <td>${hlText(row.si, query)}</td>
          </tr>
        `;
      }
    });

    html += `</tbody></table>`;
    return html;
  }

  function renderTab(tabKey) {
    const rows = LAB_DATA[tabKey];
    const label = TAB_LABELS[tabKey];

    contentArea.innerHTML = `
      <div class="section-title">${escHtml(label)}</div>
      ${buildTable(rows, '')}
    `;
  }

  function renderSearch() {
    const allResults = [];

    TAB_KEYS.forEach(tabKey => {
      const rows = LAB_DATA[tabKey];
      rows.forEach(row => {
        if (row.type === 'header') return;
        const haystack = [row.name, row.ref, row.si].join(' ').toLowerCase();
        if (haystack.includes(searchQuery)) {
          allResults.push({ ...row, _tab: tabKey });
        }
      });
    });

    if (allResults.length === 0) {
      contentArea.innerHTML = `
        <div class="no-results">
          <span>🔬</span>
          No results for "<strong>${escHtml(searchInput.value)}</strong>"
        </div>
      `;
      return;
    }

    // Group by tab for display
    const grouped = {};
    TAB_KEYS.forEach(k => { grouped[k] = []; });
    allResults.forEach(r => grouped[r._tab].push(r));

    let html = `<div class="search-all-label">Found ${allResults.length} result${allResults.length !== 1 ? 's' : ''} across all tabs</div>`;

    TAB_KEYS.forEach(tabKey => {
      const rows = grouped[tabKey];
      if (!rows.length) return;
      html += `<div class="section-title">${escHtml(TAB_LABELS[tabKey])}</div>`;
      html += buildTable(rows, searchQuery);
    });

    contentArea.innerHTML = html;
  }

  // Initial render
  render();
})();
