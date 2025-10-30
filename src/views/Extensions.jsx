// src/pages/Extensions.jsx
import { useState, useMemo } from "react";
import devlensLogo from "../assets/logo-devlens.svg"; 
import "../style/index.css";


const SEED = [
  { id: "devlens",       name: "DevLens",        desc: "Quickly inspect page layouts and visualize element boundaries.", color:<div className="badge">
  <img src={devlensLogo} alt="DevLens logo" />
</div>, active:true },
  { id: "stylespy",      name: "StyleSpy",       desc: "Instantly analyze and copy CSS from any webpage element.",      color:"#B7DCE8", active:true },
  { id: "speedboost",    name: "SpeedBoost",     desc: "Optimizes browser resource usage to accelerate page loading.",  color:"#F6C6B6", active:false },
  { id: "jsonwizard",    name: "JSONWizard",     desc: "Formats, validates, and prettifies JSON responses in-browser.", color:"#EAB7C9", active:true },
  { id: "tabmaster",     name: "TabMaster Pro",  desc: "Organizes browser tabs into groups and sessions.",              color:"#C9B7E8", active:true },
  { id: "viewportbuddy", name: "ViewportBuddy",  desc: "Simulates various screen resolutions directly within the browser.", color:"#9BA3B2", active:false },
  { id: "markupnotes",   name: "Markup Notes",   desc: "Enables annotation and notes directly onto webpages.",         color:"#E6BFA7", active:true },
  { id: "gridguides",    name: "GridGuides",     desc: "Overlay customizable grids and alignment guides on any webpage.", color:"#CDB7E8", active:false },
  { id: "palettepicker", name: "Palette Picker", desc: "Instantly extracts color palettes from any webpage.",           color:"#EACAAE", active:true },
  { id: "linkchecker",   name: "LinkChecker",    desc: "Scans and highlights broken links on any page.",                color:"#F2D2A7", active:true },
  { id: "domsnapshot",   name: "DOM Snapshot",   desc: "Capture and export DOM structures quickly.",                    color:"#B7DCE0", active:false },
  { id: "consoleplus",   name: "ConsolePlus",    desc: "Enhanced developer console with advanced filtering and logging.", color:"#9FB9A8", active:true },
];

export default function Extensions() {
  const [filter, setFilter] = useState("all"); // all | active | inactive
  const [items, setItems] = useState(SEED);

  const filtered = useMemo(() => {
    if (filter === "active")   return items.filter(i => i.active);
    if (filter === "inactive") return items.filter(i => !i.active);
    return items;
  }, [items, filter]);

  const toggleActive = (id) => {
    setItems(prev => prev.map(i => i.id === id ? {...i, active: !i.active} : i));
  };

  return (
    <div className="page">
      {/* Toolbar superior (título + chips) */}
      <div className="toolbar">
        <h1 className="title">Extensions List</h1>
        <div className="filters">
          <button
            className={`chip ${filter==='all'?'chip--all':''}`}
            onClick={()=>setFilter("all")}
          >All</button>
          <button
            className={`chip ${filter==='active'?'chip--all':''}`}
            onClick={()=>setFilter("active")}
          >Active</button>
          <button
            className={`chip ${filter==='inactive'?'chip--all':''}`}
            onClick={()=>setFilter("inactive")}
          >Inactive</button>
        </div>
      </div>

      {/* Grilla de tarjetas */}
      <main className="extensions-list">
        {filtered.map(ext => (
          <article className="extension-card" key={ext.id}>
            <div className="extension-head">
              <div className="badge" style={{background: ext.color}} />
              <h3 className="extension-title">{ext.name}</h3>
            </div>
            <p className="extension-desc">{ext.desc}</p>
            <div className="extension-actions">
              <button className="remove-btn">Remove</button>
              <label className="swich">
                <input
                  type="checkbox"
                  checked={ext.active}
                  onChange={()=>toggleActive(ext.id)}
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
