import React from "react";
import "./style/index.css";

export default function App() {
  return (
    <div className="appcontainer">
      {/* Encabezado principal con el buscador y el ícono de configuración */}
      <header className="header">
        <h1 className="logo">Extensions</h1>
        <input type="text"
          placeholder="Search extensions..."
          className="search-bar"></input>
        <button className="settings-btn"></button>
      </header> 
      
{/* Filtros de estado: All / Active / Inactive */}
      <div className="filters">
        <button className="filter-active">All</button>
        <button className="filter">Active</button>
         <button className="filter">Inactive</button>
      </div>

      {/* Lista de extensiones */}
      <main className="extensions-list">
        {/* Cada “tarjeta” es una extensión individual */}
        <div className="extension-card">
          <h3 className="extension-title">DevLens</h3>
          <p className="extension-desc">Quickly inspect page layouts and visualize element boundaries.</p>
          <div className="extension-actions">
            <button className="remove-btn">Remove</button>
            <label className="swich">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}