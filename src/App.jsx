import React, { useMemo, useState, useCallback } from "react";
import "./style/index.css";

const EXTENSIONS = [
  { id: "devlens", name: "DevLens", logo: "/logo-devlens.svg", enabled: true,
    desc: "Quickly inspect page layouts and visualize element boundaries."
  },
  { id: "JSONWizard", name: "JSONWizard", logo: "/logo-json-wizard.svg", enabled: false,
    desc: "Formats, validates, and prettifies JSON responses in-browser."
  },
  { id: "MarkupNote", name: "Markup Notes", logo: "/logo-markup-notes.svg", enabled: true,
    desc: "Enables annotation and notes directly onto webpages for collaborative debugging."
  },
  { id: "linkChecker", name: "Link Checker", logo: "/logo-link-checker.svg", enabled: false,
    desc: "Scans and highlights broken links on any page."
  },
  { id: "stylespy", name: "StyleSpy", logo: "/logo-style-spy.svg", enabled: true,
    desc: "Instantly analyze and copy CSS from any webpage element."
  },
  { id: "TabMaster Pro", name: "TabMaster Pro", logo: "/logo-tab-master-pro.svg", enabled: true,
    desc: "Organizes browser tabs into groups and sessions."
  },
  { id: "GridGuides", name: "GridGuides", logo: "/logo-grid-guides.svg", enabled: true,
    desc: "Overlay customizable grids and alignment guides on any webpage."
  },
  { id: "DOM Snapshot", name: "DOM Snapshot", logo: "/logo-dom-snapshot.svg", enabled: false,
    desc: "Capture and export DOM structures quickly."
  },
  { id: "SpeedBoost", name: "SpeedBoost", logo: "/logo-speed-boost.svg", enabled: true,
    desc: "Optimizes browser resource usage to accelerate page loading."
  },
  { id: "ViewsportBuddy", name: "ViewsportBuddy", logo: "/logo-viewport-buddy.svg", enabled: true,
    desc: "Simulates various screen resolutions directly within the browser."
  },
  { id: "PalettePicker", name: "Palette Picker", logo: "/logo-palette-picker.svg", enabled: false,
    desc: "Instantly extracts color palettes from any webpages."
  },
  { id: "ConsolePlus", name: "ConsolePlus", logo: "/logo-console-plus.svg", enabled: true,
    desc: "Sticky notes per site with quick search and sync."
  },
];

export default function App() {
  const [filter, setFilter] = useState("all");          // 'all' | 'active' | 'inactive'
  const [items, setItems]   = useState(EXTENSIONS);     // estado vivo

  const toggleEnabled = useCallback((id) => {
    setItems(prev =>
      prev.map(e => e.id === id ? { ...e, enabled: !e.enabled } : e)
    );
  }, []);

  const filtered = useMemo(() => {
    if (filter === "active")   return items.filter(e => e.enabled);
    if (filter === "inactive") return items.filter(e => !e.enabled);
    return items;
  }, [filter, items]);

  return (
    <div className="app-container">
      <header className="header">
        <img src="/logo.svg" alt="App logo" className="logo" />
        <h1 className="logo-text">Extensions</h1>
        <button className="settings-btn" aria-label="Settings">⚙️</button>
      </header>

      {/* Filtros */}
      <div className="toolbar">
        <h2>Extensions List</h2>
        <div className="filters" role="tablist" aria-label="Filter extensions">
          <button
            className={filter === "all" ? "filter-active" : "filter"}
            onClick={() => setFilter("all")}
            role="tab" aria-selected={filter === "all"}
          >All</button>
          <button
            className={filter === "active" ? "filter-active" : "filter"}
            onClick={() => setFilter("active")}
            role="tab" aria-selected={filter === "active"}
          >Active</button>
          <button
            className={filter === "inactive" ? "filter-active" : "filter"}
            onClick={() => setFilter("inactive")}
            role="tab" aria-selected={filter === "inactive"}
          >Inactive</button>
        </div>
      </div>

      {/* Grid de tarjetas */}
      <main className="extensions-grid">
        {filtered.map(ext => (
          <article className="extension-card" key={ext.id}>
            <div className="img-logo">
              <img src={ext.logo} alt={`${ext.name} logo`} loading="lazy" />
              <div className="title-text">
                <h3 className="extension-title">{ext.name}</h3>
                <p className="extension-desc">{ext.desc}</p>
              </div>
            </div>

            <div className="extension-actions">
              <button className="remove-btn">Remove</button>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={ext.enabled}                 // CONTROLADO
                  onChange={() => toggleEnabled(ext.id)} // TOGGLE STATE
                />
                <span className="slider"></span>
              </label>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
