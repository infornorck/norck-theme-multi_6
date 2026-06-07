// Norck Theme Switcher v4.3
(function() {
    var THEMES = [
        { key: "norck-dark", name: "Norck Dark", swatches: ["#1b3a5c","#e8417a","#ffffff","#9bbdd9","#2a527a"], vars: { "--norck-navbar-bg":"#1b3a5c","--norck-navbar-border":"#2a527a","--norck-navbar-text":"#d0e4f7","--norck-sidebar-bg":"#1e3f63","--norck-sidebar-border":"#2a527a","--norck-sidebar-text":"#9bbdd9","--norck-sidebar-hover-bg":"rgba(232,65,122,0.12)","--norck-sidebar-hover-text":"#e8f4ff","--norck-sidebar-active-bg":"rgba(232,65,122,0.18)","--norck-sidebar-active-text":"#e8417a","--norck-sidebar-active-border":"#e8417a","--norck-accent":"#e8417a","--norck-accent-hover":"#c4305f","--norck-page-title":"#1b3a5c","--norck-list-hover":"#f0f5ff","--norck-card-border":"#e2eaf2" } },
        { key: "norck-light", name: "Norck Light", swatches: ["#ffffff","#e8417a","#f5f7fa","#4a5568","#e2eaf2"], vars: { "--norck-navbar-bg":"#ffffff","--norck-navbar-border":"#e2eaf2","--norck-navbar-text":"#1b3a5c","--norck-sidebar-bg":"#f5f7fa","--norck-sidebar-border":"#e2eaf2","--norck-sidebar-text":"#4a5568","--norck-sidebar-hover-bg":"rgba(232,65,122,0.08)","--norck-sidebar-hover-text":"#1b3a5c","--norck-sidebar-active-bg":"rgba(232,65,122,0.12)","--norck-sidebar-active-text":"#e8417a","--norck-sidebar-active-border":"#e8417a","--norck-accent":"#e8417a","--norck-accent-hover":"#c4305f","--norck-page-title":"#1b3a5c","--norck-list-hover":"#fff0f5","--norck-card-border":"#e2eaf2" } },
        { key: "ocean-blue", name: "Ocean Blue", swatches: ["#1a4a7a","#38b2ff","#ffffff","#7aadce","#2060a0"], vars: { "--norck-navbar-bg":"#1a4a7a","--norck-navbar-border":"#2060a0","--norck-navbar-text":"#b8d4f0","--norck-sidebar-bg":"#1a4a7a","--norck-sidebar-border":"#2060a0","--norck-sidebar-text":"#7aadce","--norck-sidebar-hover-bg":"rgba(56,178,255,0.12)","--norck-sidebar-hover-text":"#c8e6ff","--norck-sidebar-active-bg":"rgba(56,178,255,0.20)","--norck-sidebar-active-text":"#38b2ff","--norck-sidebar-active-border":"#38b2ff","--norck-accent":"#38b2ff","--norck-accent-hover":"#1a99e8","--norck-page-title":"#0a2540","--norck-list-hover":"#e8f4ff","--norck-card-border":"#d0e8f8" } },
        { key: "charcoal", name: "Charcoal", swatches: ["#2d2d3f","#e8417a","#ffffff","#9098b5","#3d3d52"], vars: { "--norck-navbar-bg":"#2d2d3f","--norck-navbar-border":"#3d3d52","--norck-navbar-text":"#cdd6f4","--norck-sidebar-bg":"#252535","--norck-sidebar-border":"#3d3d52","--norck-sidebar-text":"#9098b5","--norck-sidebar-hover-bg":"rgba(232,65,122,0.10)","--norck-sidebar-hover-text":"#cdd6f4","--norck-sidebar-active-bg":"rgba(232,65,122,0.18)","--norck-sidebar-active-text":"#e8417a","--norck-sidebar-active-border":"#e8417a","--norck-accent":"#e8417a","--norck-accent-hover":"#c4305f","--norck-page-title":"#1e1e2e","--norck-list-hover":"#fff0f5","--norck-card-border":"#e2e2e2" } },
        { key: "forest-green", name: "Forest Green", swatches: ["#1e3d1e","#4ab44a","#ffffff","#7aad7a","#2d5a2d"], vars: { "--norck-navbar-bg":"#1e3d1e","--norck-navbar-border":"#2d5a2d","--norck-navbar-text":"#b8d4b8","--norck-sidebar-bg":"#1e3d1e","--norck-sidebar-border":"#2d5a2d","--norck-sidebar-text":"#7aad7a","--norck-sidebar-hover-bg":"rgba(74,180,74,0.12)","--norck-sidebar-hover-text":"#c8e6c8","--norck-sidebar-active-bg":"rgba(74,180,74,0.20)","--norck-sidebar-active-text":"#4ab44a","--norck-sidebar-active-border":"#4ab44a","--norck-accent":"#4ab44a","--norck-accent-hover":"#38963a","--norck-page-title":"#1a2f1a","--norck-list-hover":"#f0fff0","--norck-card-border":"#d0e8d0" } },
        { key: "corporate-red", name: "Corporate Red", swatches: ["#8b0000","#ff8080","#ffffff","#f0a0a0","#a50000"], vars: { "--norck-navbar-bg":"#8b0000","--norck-navbar-border":"#a50000","--norck-navbar-text":"#ffd0d0","--norck-sidebar-bg":"#7a0000","--norck-sidebar-border":"#a50000","--norck-sidebar-text":"#f0a0a0","--norck-sidebar-hover-bg":"rgba(255,100,100,0.12)","--norck-sidebar-hover-text":"#ffe0e0","--norck-sidebar-active-bg":"rgba(255,100,100,0.20)","--norck-sidebar-active-text":"#ff8080","--norck-sidebar-active-border":"#ff8080","--norck-accent":"#d22630","--norck-accent-hover":"#a81d25","--norck-page-title":"#2d1515","--norck-list-hover":"#fff5f5","--norck-card-border":"#f0d0d0" } },
        { key: "purple-dusk", name: "Purple Dusk", swatches: ["#3b1f6b","#a78bfa","#ffffff","#c4adf5","#5a3490"], vars: { "--norck-navbar-bg":"#3b1f6b","--norck-navbar-border":"#5a3490","--norck-navbar-text":"#ddd6fe","--norck-sidebar-bg":"#3b1f6b","--norck-sidebar-border":"#5a3490","--norck-sidebar-text":"#c4adf5","--norck-sidebar-hover-bg":"rgba(167,139,250,0.12)","--norck-sidebar-hover-text":"#ede9fe","--norck-sidebar-active-bg":"rgba(167,139,250,0.20)","--norck-sidebar-active-text":"#a78bfa","--norck-sidebar-active-border":"#a78bfa","--norck-accent":"#a78bfa","--norck-accent-hover":"#7c3aed","--norck-page-title":"#3b1f6b","--norck-list-hover":"#f5f3ff","--norck-card-border":"#e0d9f8" } },
        { key: "slate-pro", name: "Slate Pro", swatches: ["#1e293b","#38bdf8","#ffffff","#94a3b8","#334155"], vars: { "--norck-navbar-bg":"#1e293b","--norck-navbar-border":"#334155","--norck-navbar-text":"#cbd5e1","--norck-sidebar-bg":"#1e293b","--norck-sidebar-border":"#334155","--norck-sidebar-text":"#94a3b8","--norck-sidebar-hover-bg":"rgba(56,189,248,0.10)","--norck-sidebar-hover-text":"#e2e8f0","--norck-sidebar-active-bg":"rgba(56,189,248,0.18)","--norck-sidebar-active-text":"#38bdf8","--norck-sidebar-active-border":"#38bdf8","--norck-accent":"#38bdf8","--norck-accent-hover":"#0ea5e9","--norck-page-title":"#0f172a","--norck-list-hover":"#f0f9ff","--norck-card-border":"#e2e8f0" } },
        { key: "rose-gold", name: "Rose Gold", swatches: ["#7c3149","#f9a8c9","#fff5f7","#e87aa0","#9e4060"], vars: { "--norck-navbar-bg":"#7c3149","--norck-navbar-border":"#9e4060","--norck-navbar-text":"#fde8ef","--norck-sidebar-bg":"#7c3149","--norck-sidebar-border":"#9e4060","--norck-sidebar-text":"#f9a8c9","--norck-sidebar-hover-bg":"rgba(249,168,201,0.12)","--norck-sidebar-hover-text":"#fff0f5","--norck-sidebar-active-bg":"rgba(249,168,201,0.20)","--norck-sidebar-active-text":"#f9a8c9","--norck-sidebar-active-border":"#f9a8c9","--norck-accent":"#e8417a","--norck-accent-hover":"#c4305f","--norck-page-title":"#7c3149","--norck-list-hover":"#fff0f5","--norck-card-border":"#f9d0df" } }
    ];

    var STORAGE_KEY = 'norck_selected_theme';
    var DEFAULT = 'norck-dark';

    function applyTheme(key) {
        var theme = null;
        for (var i = 0; i < THEMES.length; i++) { if (THEMES[i].key === key) { theme = THEMES[i]; break; } }
        if (!theme) return;
        for (var prop in theme.vars) { document.documentElement.style.setProperty(prop, theme.vars[prop]); }
        localStorage.setItem(STORAGE_KEY, key);
        var cards = document.querySelectorAll('.norck-theme-card');
        for (var c = 0; c < cards.length; c++) {
            cards[c].classList.toggle('active', cards[c].dataset.key === key);
        }
    }

    function buildModal() {
        if (document.getElementById('norck-modal-overlay')) return;
        var current = localStorage.getItem(STORAGE_KEY) || DEFAULT;
        var style = document.createElement('style');
        style.textContent = '#norck-modal-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99999;align-items:center;justify-content:center}#norck-modal-overlay.open{display:flex}#norck-modal{background:#fff;border-radius:12px;padding:28px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;position:relative}#norck-modal h2{margin:0 0 20px;font-size:18px;color:#1b3a5c}#norck-modal-close{position:absolute;top:12px;right:16px;background:none;border:none;font-size:22px;cursor:pointer;color:#666}#norck-theme-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.norck-theme-card{border:2px solid #e2eaf2;border-radius:8px;padding:12px;cursor:pointer;transition:border-color .2s}.norck-theme-card:hover{border-color:#e8417a}.norck-theme-card.active{border-color:#e8417a;box-shadow:0 0 0 2px rgba(232,65,122,0.25)}.norck-theme-card-name{font-size:13px;font-weight:600;margin-bottom:8px;color:#333}.norck-swatches{display:flex;gap:4px}.norck-swatch{width:18px;height:18px;border-radius:50%;border:1px solid rgba(0,0,0,0.1)}';
        document.head.appendChild(style);
        var overlay = document.createElement('div');
        overlay.id = 'norck-modal-overlay';
        var modal = document.createElement('div');
        modal.id = 'norck-modal';
        var closeBtn = document.createElement('button');
        closeBtn.id = 'norck-modal-close';
        closeBtn.textContent = '\u00d7';
        closeBtn.addEventListener('click', closeModal);
        var title = document.createElement('h2');
        title.textContent = 'Choose Theme';
        var grid = document.createElement('div');
        grid.id = 'norck-theme-grid';
        for (var i = 0; i < THEMES.length; i++) {
            (function(theme) {
                var card = document.createElement('div');
                card.className = 'norck-theme-card' + (theme.key === current ? ' active' : '');
                card.dataset.key = theme.key;
                var nameEl = document.createElement('div');
                nameEl.className = 'norck-theme-card-name';
                nameEl.textContent = theme.name;
                var swatchRow = document.createElement('div');
                swatchRow.className = 'norck-swatches';
                for (var s = 0; s < theme.swatches.length; s++) {
                    var dot = document.createElement('span');
                    dot.className = 'norck-swatch';
                    dot.style.background = theme.swatches[s];
                    swatchRow.appendChild(dot);
                }
                card.appendChild(nameEl);
                card.appendChild(swatchRow);
                card.addEventListener('click', function(k) { return function() { applyTheme(k); }; }(theme.key));
                grid.appendChild(card);
            })(THEMES[i]);
        }
        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(grid);
        overlay.appendChild(modal);
        overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
        document.body.appendChild(overlay);
    }

    function openModal() { buildModal(); var o = document.getElementById('norck-modal-overlay'); if (o) o.classList.add('open'); }
    function closeModal() { var o = document.getElementById('norck-modal-overlay'); if (o) o.classList.remove('open'); }

    // ── INJECTION: scan for any visible container holding "Logout" and inject above it ──
    function injectMenuLink() {
        if (document.getElementById('norck-theme-menu-link')) return;

        // Find the Logout element anywhere in the visible DOM
        var allEls = document.querySelectorAll('a, li, button, div[class*="item"]');
        var logoutEl = null;
        for (var i = 0; i < allEls.length; i++) {
            var t = (allEls[i].innerText || allEls[i].textContent || '').trim();
            if (t === 'Logout') { logoutEl = allEls[i]; break; }
        }
        if (!logoutEl) return;

        var container = logoutEl.parentNode;
        if (!container) return;

        var item = document.createElement(logoutEl.tagName);
        item.id = 'norck-theme-menu-link';
        // Copy classes from Logout element for consistent styling
        item.className = logoutEl.className;
        item.textContent = 'Choose Theme';
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            setTimeout(openModal, 50);
        });

        var divider = document.createElement('div');
        divider.style.cssText = 'height:1px;background:#e2eaf2;margin:4px 0;';

        container.insertBefore(divider, logoutEl);
        container.insertBefore(item, logoutEl);
    }

    // Apply saved theme immediately
    applyTheme(localStorage.getItem(STORAGE_KEY) || DEFAULT);

    // Watch for DOM changes (Frappe renders menus dynamically)
    var observer = new MutationObserver(function(mutations) {
        for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].addedNodes.length > 0) {
                setTimeout(injectMenuLink, 30);
                break;
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Also try on every click
    document.addEventListener('click', function() { setTimeout(injectMenuLink, 150); });

    if (typeof frappe !== 'undefined') {
        frappe.after_ajax(function() { setTimeout(buildModal, 500); });
    } else {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(buildModal, 500); });
    }
})();
