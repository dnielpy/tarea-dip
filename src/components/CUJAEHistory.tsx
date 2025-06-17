import React from 'react';
import { Calendar, Users, Building, Award, BookOpen, Lightbulb } from 'lucide-react';

const CUJAEHistory: React.FC = () => {
  const foundationStats = [
    { label: 'Fecha de Fundación', value: '2 de Diciembre, 1964', icon: Calendar },
    { label: 'Estudiantes', value: '7,500+', icon: Users },
    { label: 'Profesores', value: '1,200+', icon: BookOpen },
    { label: 'Facultades', value: '9', icon: Building },
    { label: 'Carreras', value: '13', icon: Award },
    { label: 'Centros de Investigación', value: '12', icon: Lightbulb }
  ];

  const nationalMilestones = [
    {
      year: '1986',
      events: [
        {
          title: 'Cubavisión Internacional',
          date: '24 de julio',
          description: 'Inicio de transmisiones dirigidas a tropas internacionalistas y embajadas'
        },
        {
          title: 'Centro de Ingeniería Genética y Biotecnología (CIGB)',
          date: '1 de julio',
          description: 'Inauguración de uno de los centros científicos más importantes del país'
        }
      ]
    },
    {
      year: '1987',
      events: [
        {
          title: 'Joven Club de Computación y Electrónica',
          date: '8 de septiembre',
          description: 'Fundación por iniciativa de Fidel Castro para socializar la informática'
        }
      ]
    },
    {
      year: '1991',
      events: [
        {
          title: 'Cubacel S.A.',
          date: 'Año 1991',
          description: 'Introducción de la telefonía móvil con tecnología TDMA (800 MHz)'
        }
      ]
    }
  ];

  const cujaeTimeline = [
    {
      year: '1988',
      centers: [
        { name: 'CETDIR', month: 'Septiembre', focus: 'Técnicas de Dirección' },
        { name: 'CIPEL', month: 'Diciembre', focus: 'Investigaciones Electroenergéticas' }
      ]
    },
    {
      year: '1990',
      centers: [
        { name: 'CECAT', month: 'Año 1990', focus: 'Construcción y Arquitectura Tropical' }
      ]
    },
    {
      year: '1992',
      centers: [
        { name: 'CETER', month: 'Diciembre', focus: 'Tecnologías Energéticas Renovables' }
      ]
    },
    {
      year: '1994',
      centers: [
        { name: 'CIPRO', month: 'Febrero', focus: 'Ingeniería de Procesos' },
        { name: 'CETA', month: 'Diciembre', focus: 'Tecnologías Avanzadas' }
      ]
    }
  ];

  const academicMilestones = [
    {
      period: '1985-1986',
      achievement: 'Inauguración del primer módulo del edificio de información científico-técnica',
      significance: 'Confirmación de la condición "Lista para la Primera Etapa en la Preparación para la Defensa"'
    },
    {
      period: '1989-1990',
      achievement: 'Elaboración de los Planes de Estudios "C"',
      significance: 'Mejor vinculación estudio-práctica, introducción de computación e idiomas extranjeros'
    },
    {
      period: '1990-1991',
      achievement: 'Sistema de Estímulo para trabajadores de CES',
      significance: 'Creación de la categoría "Educador Ejemplar" durante el Período Especial'
    },
    {
      period: '1991-1993',
      achievement: 'Brigadas Antimperialistas Universitarias Julio Antonio Mella',
      significance: 'Transformación de la preparación militar estudiantil'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historia de la CUJAE
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Universidad Tecnológica de La Habana "José Antonio Echeverría" - 
              Principal institución de educación superior técnica en Cuba
            </p>
          </div>

          {/* Foundation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {foundationStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center border border-blue-100">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Foundation Story */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fundación y Misión</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                La Universidad Tecnológica de La Habana "José Antonio Echeverría", conocida popularmente como CUJAE, 
                es la principal institución de educación superior en Cuba dedicada a la formación de ingenieros, 
                arquitectos y especialistas en las ciencias técnicas. <strong>Fundada oficialmente el 2 de diciembre de 1964</strong>, 
                la CUJAE surge como resultado de una profunda reforma universitaria impulsada tras el triunfo de la 
                Revolución cubana.
              </p>
              <p className="mb-6">
                El campus de la CUJAE, ubicado en el municipio de Marianao, La Habana, es uno de los mayores complejos 
                universitarios de Cuba y ha sido <strong>reconocido como Monumento Nacional</strong> por su valor patrimonial 
                y arquitectónico, siendo una de las obras más significativas de la arquitectura moderna cubana revolucionaria.
              </p>
              <p>
                Su diseño empleó técnicas innovadoras para la época, como el sistema slift-slab, y su conjunto 
                arquitectónico es considerado un hito en la historia de la construcción universitaria en el país.
              </p>
            </div>
          </div>

          {/* National Technology Milestones */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Hitos Tecnológicos Nacionales (1986-1991)
            </h3>
            <div className="space-y-8">
              {nationalMilestones.map((milestone, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                    <h4 className="text-xl font-bold">{milestone.year}</h4>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {milestone.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="border-l-4 border-green-500 pl-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{event.title}</h5>
                            <span className="text-sm text-green-600 font-medium">{event.date}</span>
                          </div>
                          <p className="text-gray-700">{event.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CUJAE Research Centers Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Creación de Centros de Investigación CUJAE (1988-1994)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Año</th>
                    <th className="px-6 py-4 text-left font-semibold">Centro</th>
                    <th className="px-6 py-4 text-left font-semibold">Mes</th>
                    <th className="px-6 py-4 text-left font-semibold">Área de Enfoque</th>
                  </tr>
                </thead>
                <tbody>
                  {cujaeTimeline.map((year, yearIndex) => (
                    year.centers.map((center, centerIndex) => (
                      <tr key={`${yearIndex}-${centerIndex}`} className="border-b border-gray-200 hover:bg-blue-50">
                        <td className="px-6 py-4 font-semibold text-blue-900">{year.year}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{center.name}</td>
                        <td className="px-6 py-4 text-gray-700">{center.month}</td>
                        <td className="px-6 py-4 text-gray-700">{center.focus}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Milestones */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Hitos Académicos y Docentes (1985-1994)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicMilestones.map((milestone, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-yellow-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">{milestone.period}</h4>
                  </div>
                  <h5 className="font-medium text-gray-900 mb-2">{milestone.achievement}</h5>
                  <p className="text-gray-700 text-sm">{milestone.significance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Centers Chart */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Evolución de Centros de Investigación (1988-1994)
            </h3>
            <div className="relative">
              <div className="flex justify-between items-end h-64 mb-4">
                {cujaeTimeline.map((year, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg flex items-end justify-center text-white font-bold"
                      style={{ height: `${(year.centers.length * 50) + 50}px`, width: '80px' }}
                    >
                      {year.centers.length}
                    </div>
                    <div className="mt-2 text-center">
                      <div className="font-semibold text-gray-900">{year.year}</div>
                      <div className="text-xs text-gray-600">
                        {year.centers.map(c => c.name).join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-sm text-gray-600">
                Número de centros creados por año durante el Período Especial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CUJAEHistory;