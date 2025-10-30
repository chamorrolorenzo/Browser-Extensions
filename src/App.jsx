import React from "react";
import "./style/index.css";

const EXTENSIONS = [
  { id: "devlens", name: "DevLens", logo: "/logo-devlens.svg", enabled: true,
    desc: "Quickly inspect page layouts and visualize element boundaries." },
  { id: "stylespy", name: "StyleSpy", logo: "/logo-stylespy.svg", enabled: true,
    desc: "Instantly analyze and copy CSS from any webpage element." },
  { id: "darkreader", name: "Dark Reader", logo: "/logo-darkreader.svg", enabled: false,
    desc: "Dark mode for every website, easily and consistently." },
  { id: "gridmate", name: "GridMate", logo: "/logo-gridmate.svg", enabled: true,
    desc: "Overlay responsive grids to refine your layouts." },
  { id: "linkwatch", name: "LinkWatch", logo: "/logo-linkwatch.svg", enabled: false,
    desc: "Track broken links and redirects while you browse." },
  { id: "a11y", name: "A11y Aid", logo: "/logo-a11y.svg", enabled: true,
    desc: "Quick accessibility checks: contrast, headings, landmarks." },
  { id: "perfpeek", name: "PerfPeek", logo: "/logo-perfpeek.svg", enabled: true,
    desc: "Measure paint, layout shifts and network waterfalls." },
  { id: "imgopt", name: "ImgOpt", logo: "/logo-imgopt.svg", enabled: false,
    desc: "Compress and convert images on the fly in-browser." },
  { id: "colorscout", name: "ColorScout", logo: "/logo-colorscout.svg", enabled: true,
    desc: "Pick colors, copy formats, and build palettes quickly." },
  { id: "svgtidy", name: "SVGTidy", logo: "/logo-svgtidy.svg", enabled: true,
    desc: "Clean, minify and inline SVGs with one click." },
  { id: "favkit", name: "FavKit", logo: "/logo-favkit.svg", enabled: false,
    desc: "Generate favicons and app icons from any image." },
  { id: "notesnap", name: "NoteSnap", logo: "/logo-notesnap.svg", enabled: true,
    desc: "Sticky notes per site with quick search and sync." },
];

export default function App() {
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
        <div className="filters">
          <button className="filter-active">All</button>
          <button className="filter">Active</button>
          <button className="filter">Inactive</button>
        </div>
      </div>

      {/* Grid de tarjetas (un solo <main>) */}
      <main className="extensions-grid">
        {EXTENSIONS.map(ext => (
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
                <input type="checkbox" defaultChecked={ext.enabled} />
                <span className="slider"></span>
              </label>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
