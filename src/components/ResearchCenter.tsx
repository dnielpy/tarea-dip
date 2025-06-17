import React from 'react';
import { Calendar, Target, TrendingUp, CheckCircle } from 'lucide-react';

interface ResearchCenterProps {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  description: string;
  functions: string[];
  impacts: string[];
  projects?: {
    name: string;
    description: string;
  }[];
  additionalInfo?: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  image?: string;
}

const ResearchCenter: React.FC<ResearchCenterProps> = ({
  id,
  title,
  year,
  subtitle,
  description,
  functions,
  impacts,
  projects,
  additionalInfo,
  color,
  image
}) => {
  const colorClasses = {
    blue: {
      bg: 'from-blue-600 to-blue-700',
      accent: 'text-blue-600',
      border: 'border-blue-200',
      card: 'bg-blue-50'
    },
    green: {
      bg: 'from-green-600 to-green-700',
      accent: 'text-green-600',
      border: 'border-green-200',
      card: 'bg-green-50'
    },
    purple: {
      bg: 'from-purple-600 to-purple-700',
      accent: 'text-purple-600',
      border: 'border-purple-200',
      card: 'bg-purple-50'
    },
    orange: {
      bg: 'from-orange-600 to-orange-700',
      accent: 'text-orange-600',
      border: 'border-orange-200',
      card: 'bg-orange-50'
    }
  };

  const colors = colorClasses[color];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Image */}
          <div className={`bg-gradient-to-r ${colors.bg} rounded-2xl p-8 md:p-12 text-white mb-12 overflow-hidden relative`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-6 w-6" />
                  <span className="text-lg font-semibold">{year}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-xl text-gray-100">{subtitle}</p>
              </div>
              {image && (
                <div className="relative">
                  <img 
                    src={image} 
                    alt={`${title} - Centro de Investigación`}
                    className="w-full h-64 object-cover rounded-xl shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Functions and Impacts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className={`${colors.card} rounded-xl p-8 ${colors.border} border`}>
              <div className="flex items-center mb-6">
                <Target className={`h-6 w-6 ${colors.accent} mr-3`} />
                <h3 className="text-xl font-semibold text-gray-900">Funciones</h3>
              </div>
              <ul className="space-y-3">
                {functions.map((func, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 ${colors.accent} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700">{func}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${colors.card} rounded-xl p-8 ${colors.border} border`}>
              <div className="flex items-center mb-6">
                <TrendingUp className={`h-6 w-6 ${colors.accent} mr-3`} />
                <h3 className="text-xl font-semibold text-gray-900">Impactos</h3>
              </div>
              <ul className="space-y-3">
                {impacts.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 ${colors.accent} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          {projects && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proyectos Destacados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <h4 className={`text-lg font-semibold ${colors.accent} mb-3`}>{project.name}</h4>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          {additionalInfo && (
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed text-center italic">{additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchCenter;