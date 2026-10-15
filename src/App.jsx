import React, { useState } from 'react';
import { Lock, FileCheck, Activity, Shield, ArrowRight, Server, Key } from 'lucide-react';

const triadData = [
  {
    id: 'confidencialidad',
    title: 'Confidencialidad',
    shortDesc: 'Solo las personas autorizadas pueden ver la información.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    icon: Lock,
    everydayExample: 'Es como un diario íntimo con candado. Solo tú tienes la llave para leerlo.',
    cyberExample: 'Uso de contraseñas seguras, reconocimiento facial y encriptación (mezclar los datos para que sean ilegibles sin permiso).',
    tools: [Key, Shield]
  },
  {
    id: 'integridad',
    title: 'Integridad',
    shortDesc: 'La información es exacta y nadie la ha alterado sin permiso.',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    icon: FileCheck,
    everydayExample: 'Es como enviar una carta con un sello de cera. Si el sello está roto, sabes que alguien la abrió y pudo cambiar el mensaje.',
    cyberExample: 'Permisos estrictos sobre quién puede editar un archivo y "sellos digitales" que avisan si un documento fue modificado.',
    tools: [Shield, FileCheck]
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad',
    shortDesc: 'La información y los sistemas están listos cuando los necesitas.',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    icon: Activity,
    everydayExample: 'Es como un cajero automático. Esperas que funcione y tenga dinero cada vez que vas a usarlo, las 24 horas.',
    cyberExample: 'Sistemas de respaldo (backups), servidores extra por si uno falla y protección contra ataques que intentan colapsar la red.',
    tools: [Server, Activity]
  }
];

export default function App() {
  const [activePillar, setActivePillar] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12 overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 text-center shadow-xl md:rounded-b-[3rem] rounded-b-3xl mb-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-500/20 rounded-full backdrop-blur-sm">
              <Shield className="w-16 h-16 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            La Tríada de la Ciberseguridad
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            El corazón de la seguridad informática resumido en 3 pilares fundamentales. 
            Imagina que tu información es un tesoro; así es como lo protegemos.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 -mt-16 md:-mt-20">
          {triadData.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(isActive ? null : pillar.id)}
                className={`flex flex-col items-center p-8 rounded-2xl transition-all duration-300 shadow-lg text-left w-full
                  ${isActive 
                    ? `${pillar.color} text-white scale-105 shadow-xl` 
                    : 'bg-white hover:-translate-y-2 hover:shadow-xl'
                  }
                `}
              >
                <div className={`p-4 rounded-full mb-4 ${isActive ? 'bg-white/20' : pillar.lightColor}`}>
                  <Icon className={`w-10 h-10 ${isActive ? 'text-white' : pillar.textColor}`} />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-center w-full">
                  {pillar.title}
                </h2>
                <p className={`text-center leading-relaxed ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
                  {pillar.shortDesc}
                </p>
                <div className={`mt-6 flex items-center text-sm font-semibold transition-opacity duration-300 
                  ${isActive ? 'text-white opacity-100' : `${pillar.textColor} opacity-0`}`}
                >
                  Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 transition-all duration-500 ease-in-out min-h-[300px]">
          {activePillar ? (
            triadData.map((pillar) => {
              if (pillar.id !== activePillar) return null;
              
              return (
                <div 
                  key={`detail-${pillar.id}`} 
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${pillar.borderColor} transform transition-all duration-500`}
                  style={{ animation: 'fadeInUp 0.4s ease-out forwards' }}
                >
                  <style>{`
                    @keyframes fadeInUp {
                      from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                  <div className={`h-3 w-full ${pillar.color}`}></div>
                  <div className="p-6 sm:p-8 md:p-12">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${pillar.textColor} flex items-center gap-3`}>
                      <pillar.icon className="w-8 h-8 flex-shrink-0" />
                      Entendiendo la {pillar.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Concepto Simple */}
                      <div className="space-y-6">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                          <h4 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🏠</span> En la vida real
                          </h4>
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {pillar.everydayExample}
                          </p>
                        </div>
                      </div>

                      {/* Concepto Técnico */}
                      <div className="space-y-6">
                        <div className={`${pillar.lightColor} rounded-2xl p-6 border ${pillar.borderColor}`}>
                          <h4 className={`text-xl font-bold ${pillar.textColor} mb-3 flex items-center gap-2`}>
                            <span className="text-2xl">💻</span> En el mundo digital
                          </h4>
                          <p className="text-slate-700 leading-relaxed text-lg">
                            {pillar.cyberExample}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center p-12 bg-white rounded-3xl shadow-sm border border-slate-100 border-dashed">
              <Shield className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <p className="text-xl text-slate-500 font-medium">
                Haz clic en cualquiera de los pilares de arriba para descubrir cómo funciona.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto mt-20 px-4 text-center text-slate-500 text-sm">
        <p>Infografía interactiva creada para enseñar los fundamentos de la Ciberseguridad.</p>
        <p className="mt-2">Ningún sistema es 100% seguro si falla uno de estos 3 pilares.</p>
      </footer>
    </div>
  );
}