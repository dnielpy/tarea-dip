import React from 'react';
import { Award, Users, Lightbulb, TrendingUp, Globe, Star } from 'lucide-react';

const LegacySection: React.FC = () => {
  const centers = [
    {
      name: 'CETDIR',
      description: 'Formación de líderes empresariales con impacto en gestión y productividad',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      name: 'CIPEL',
      description: 'Optimización del sistema eléctrico nacional con mejoras técnicas',
      icon: Lightbulb,
      color: 'text-yellow-600'
    },
    {
      name: 'CECAT',
      description: 'Tecnologías de construcción innovadoras y adaptadas al clima',
      icon: Award,
      color: 'text-green-600'
    },
    {
      name: 'CETER',
      description: 'Proyectos de energías renovables y eficiencia energética',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      name: 'CETA',
      description: 'Transferencia de innovación tecnológica y desarrollo de soluciones avanzadas',
      icon: Globe,
      color: 'text-green-600'
    },
    {
      name: 'CIPRO',
      description: 'Investigación en ingeniería ambiental y biotecnología aplicada',
      icon: Lightbulb,
      color: 'text-blue-600'
    }
  ];

  const achievements = [
    {
      title: 'Importancia de la Ciencia',
      description: 'Clave para superar crisis y avanzar en el desarrollo económico y social',
      icon: Star
    },
    {
      title: 'CUJAE como Pilar',
      description: 'Su papel fundamental en investigación, formación y transferencia tecnológica',
      icon: Globe
    },
    {
      title: 'Futuro Prometedor',
      description: 'La innovación sigue siendo el motor para responder a los retos de Cuba y el mundo',
      icon: Lightbulb
    }
  ];

  return (
    <section id="legado" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legado Científico y Tecnológico de la CUJAE
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Un legado de innovación, resistencia y excelencia académica que trasciende generaciones
            </p>
          </div>

          {/* Research Centers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16 justify-items-center justify-center">
            {centers.map((center, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-center">
                  <center.icon className={`h-12 w-12 ${center.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{center.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{center.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Resiliencia e Innovación en Cuba
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="h-10 w-10 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-8 md:p-12 text-blue-900">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Un Futuro Construido sobre la Innovación
              </h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                El legado de la CUJAE durante el Período Especial demuestra que la innovación, la educación y la 
                determinación son las herramientas más poderosas para superar cualquier adversidad y construir un 
                futuro próspero para las generaciones venideras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;