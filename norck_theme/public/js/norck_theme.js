// Norck Theme Switcher — robust injection (v4.2)
// Drop this file in: norck_theme/norck_theme/public/js/norck_theme.js

(function () {
  const THEMES = [
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

  const STORAGE_KEY = "norck_selected_theme";
  const DEFAULT = "norck-dark";

  function applyTheme(key) {
    const theme = THEMES.find(t => t.key === key);
    if (!theme) return;
    Object.entries(theme.vars).forEach(([prop, val]) => document.documentElement.style.setProperty(prop, val));
    try { localStorage.setItem(STORAGE_KEY, key); } catch (e) {}
    document.querySelectorAll(".norck-theme-card").forEach(card => card.classList.toggle("active", card.dataset.key === key));
  }

  function buildModal() {
    if (document.getElementById("norck-modal-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "norck-modal-overlay";
    overlay.innerHTML = `
      <div id="norck-modal" role="dialog" aria-modal="true">
        <button id="norck-modal-close" aria-label="Close">&times;</button>
        <h2>🎨 Choose Theme</h2>
        <div id="norck-theme-grid" aria-live="polite"></div>
      </div>`;
    const grid = overlay.querySelector("#norck-theme-grid");
    const current = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    THEMES.forEach(theme => {
      const card = document.createElement("div");
      card.className = "norck-theme-card" + (theme.key === current ? " active" : "");
      card.dataset.key = theme.key;
      const swatchesHtml = theme.swatches.map(c => `<span class="norck-swatch" style="background:${c}"></span>`).join("");
      card.innerHTML = `<div class="norck-theme-card-name">${theme.name}</div><div class="norck-swatches">${swatchesHtml}</div>`;
      card.addEventListener("click", () => applyTheme(theme.key));
      grid.appendChild(card);
    });
    overlay.querySelector("#norck-modal-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
  }

  function openModal() { buildModal(); document.getElementById("norck-modal-overlay").classList.add("open"); }
  function closeModal() { const o = document.getElementById("norck-modal-overlay"); if (o) o.classList.remove("open"); }

  // Robust menu discovery strategies
  function candidateDropdowns() {
    const set = new Set();
    document.querySelectorAll(".dropdown-menu, [role='menu'], .menu, .user-dropdown, .profile-dropdown").forEach(n => set.add(n));
    // also any element that contains 'Logout' text
    document.querySelectorAll("a, button, li, div").forEach(el => {
      const t = (el.innerText || el.textContent || "").trim();
      if (/logout/i.test(t)) {
        const rootMenu = el.closest(".dropdown-menu") || el.parentElement;
        if (rootMenu) set.add(rootMenu);
      }
    });
    return Array.from(set);
  }

  function insertMenuItem(targetMenu) {
    if (!targetMenu || targetMenu.querySelector("#norck-theme-menu-link")) return false;
    // create elements
    const divider = document.createElement("div"); divider.className = "dropdown-divider";
    const item = document.createElement("a");
    item.id = "norck-theme-menu-link";
    item.className = "dropdown-item";
    item.href = "#";
    item.innerHTML = "🎨&nbsp;&nbsp; Choose Theme";
    item.style.fontWeight = "500";
    item.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); closeDropdowns(); setTimeout(openModal, 80); });
    // try insert before Logout if exists
    let logoutEl = null;
    Array.from(targetMenu.querySelectorAll("a,button,li,div")).forEach(el => {
      const t = (el.innerText || el.textContent || "").trim();
      if (/^logout$/i.test(t)) logoutEl = el;
    });
    if (logoutEl && logoutEl.parentElement) {
      logoutEl.parentElement.insertBefore(divider, logoutEl);
      logoutEl.parentElement.insertBefore(item, logoutEl);
    } else {
      targetMenu.appendChild(divider);
      targetMenu.appendChild(item);
    }
    return true;
  }

  function closeDropdowns() {
    // attempt to close any open bootstrap dropdowns
    document.querySelectorAll(".dropdown.open, .show").forEach(el => {
      el.classList.remove("open", "show");
    });
  }

  function tryInjectOnce() {
    const menus = candidateDropdowns();
    for (const m of menus) {
      if (insertMenuItem(m)) return true;
    }
    return false;
  }

  // MutationObserver: watch for newly added dropdowns / avatar menus
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.addedNodes && m.addedNodes.length) {
        // quick retry when nodes added
        tryInjectOnce();
      }
    }
  });
  observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

  // Fallback interval attempts (short-lived)
  let tries = 0;
  const maxTries = 30;
  const interval = setInterval(() => {
    tries++;
    tryInjectOnce();
    if (tries >= maxTries) clearInterval(interval);
  }, 500);

  // Also inject when user interacts (dropdown open)
  document.addEventListener("click", () => setTimeout(tryInjectOnce, 150));
  document.addEventListener("contextmenu", () => setTimeout(tryInjectOnce, 150));

  // Init: apply saved theme and prebuild modal
  try { applyTheme(localStorage.getItem(STORAGE_KEY) || DEFAULT); } catch (e) {}
  setTimeout(buildModal, 400);

  // If frappe exists, hook into its lifecycle
  if (typeof frappe !== "undefined") {
    try {
      frappe.after_ajax(() => setTimeout(() => { tryInjectOnce(); buildModal(); }, 400));
      // attempt injection after page load
      frappe.ready && frappe.ready(() => setTimeout(tryInjectOnce, 600));
    } catch (e) {}
  } else {
    // plain pages
    document.addEventListener("DOMContentLoaded", () => setTimeout(tryInjectOnce, 500));
  }

})();
