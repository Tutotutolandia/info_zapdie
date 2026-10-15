import React, { useState } from 'react';
import { Lock, FileCheck, Activity, Shield, ArrowRight } from 'lucide-react';
import './App.css';

const triadData = [
  {
    id: 'confidencialidad',
    title: 'Confidencialidad',
    shortDesc: 'Solo las personas autorizadas pueden ver la información.',
    theme: 'blue',
    icon: Lock,
    everydayExample: 'Es como un diario íntimo con candado. Solo tú tienes la llave para leerlo.',
    cyberExample: 'Uso de contraseñas seguras, reconocimiento facial y encriptación (mezclar los datos para que sean ilegibles sin permiso).',
  },
  {
    id: 'integridad',
    title: 'Integridad',
    shortDesc: 'La información es exacta y nadie la ha alterado sin permiso.',
    theme: 'green',
    icon: FileCheck,
    everydayExample: 'Es como enviar una carta con un sello de cera. Si el sello está roto, sabes que alguien la abrió y pudo cambiar el mensaje.',
    cyberExample: 'Permisos estrictos sobre quién puede editar un archivo y "sellos digitales" que avisan si un documento fue modificado.',
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad',
    shortDesc: 'La información y los sistemas están listos cuando los necesitas.',
    theme: 'orange',
    icon: Activity,
    everydayExample: 'Es como un cajero automático. Esperas que funcione y tenga dinero cada vez que vas a usarlo, las 24 horas.',
    cyberExample: 'Sistemas de respaldo (backups), servidores extra por si uno falla y protección contra ataques que intentan colapsar la red.',
  }
];

export default function App() {
  const [activePillar, setActivePillar] = useState(null);

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="shield-container">
            <Shield className="shield-icon" size={64} />
          </div>
          <h1 className="hero-title">
            La Tríada de la Ciberseguridad
          </h1>
          <p className="hero-subtitle">
            El corazón de la seguridad informática resumido en 3 pilares fundamentales. 
            Imagina que tu información es un tesoro; así es como lo protegemos.
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="main-content">
        <div className="cards-grid">
          {triadData.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(isActive ? null : pillar.id)}
                className={`card theme-${pillar.theme} ${isActive ? 'active' : ''}`}
              >
                <div className="card-icon-wrapper">
                  <Icon size={40} />
                </div>
                <h2 className="card-title">{pillar.title}</h2>
                <p className="card-desc">{pillar.shortDesc}</p>
                <div className="card-action">
                  Ver detalles <ArrowRight size={16} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalles Expandibles */}
        <div className="details-container">
          {activePillar ? (
            triadData.map((pillar) => {
              if (pillar.id !== activePillar) return null;
              
              return (
                <div key={`detail-${pillar.id}`} className={`detail-card theme-${pillar.theme}`}>
                  <div className="detail-header-bar"></div>
                  <div className="detail-content">
                    <h3 className="detail-title">
                      <pillar.icon size={32} />
                      Entendiendo la {pillar.title}
                    </h3>
                    
                    <div className="detail-grid">
                      {/* Concepto Simple */}
                      <div className="detail-box box-everyday">
                        <h4>
                          <span className="emoji" role="img" aria-label="house">🏠</span> En la vida real
                        </h4>
                        <p>{pillar.everydayExample}</p>
                      </div>

                      {/* Concepto Técnico */}
                      <div className="detail-box box-cyber">
                        <h4>
                          <span className="emoji" role="img" aria-label="laptop">💻</span> En el mundo digital
                        </h4>
                        <p>{pillar.cyberExample}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-state">
              <Shield size={64} className="empty-icon" />
              <p>Haz clic en cualquiera de los pilares de arriba para descubrir cómo funciona.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Infografía interactiva creada para enseñar los fundamentos de la Ciberseguridad.</p>
        <p>Ningún sistema es 100% seguro si falla uno de estos 3 pilares.</p>
        <p>Hecho por: https://github.com/Tutotutolandia.</p>
      </footer>
    </div>
  );
}