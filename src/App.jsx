import React from "react";
import "./style/index.css";
import logoDevLens from "./assets/logo-devlens.svg";
import logo from "./assets/logo.svg"

export default function App() {
  return (
    <div className="app-container">
      {/* Encabezado principal con el buscador y el ícono de configuración */}
      <header className="header">
        <img src={logo} alt="logo" />
        <h1 className="logo-text">Extensions</h1>
                <button className="settings-btn">⚙️</button>
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
          <div className="img-logo"><img src={logoDevLens} alt="DevLens logo"/>
            <div className="title-text">
            <h3 className="extension-title"> DevLens</h3><p className="extension-desc">Quickly inspect page layouts and visualize element boundaries.</p>
          </div>
          </div>
          <div className="extension-actions">
            <button className="remove-btn">Remove</button>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}