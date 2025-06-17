import React from 'react';
import { Clock, TrendingDown, Lightbulb, Globe } from 'lucide-react';

const ContextSection: React.FC = () => {
  return (
    <section id="contexto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contexto del Período Especial en Cuba
            </h2>
            <div className="flex items-center justify-center space-x-2 text-yellow-600 mb-6">
              <Clock className="h-5 w-5" />
              <span className="font-medium">1985 - 1994</span>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <TrendingDown className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Desafíos Económicos</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Durante el Período Especial en Cuba, aproximadamente desde el año 89 hasta mediados de los 90, 
                  el país enfrentó profundos desafíos económicos y sociales tras la caída del bloque soviético.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Necesidad de Innovación</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Este contexto generó una fuerte necesidad de innovación y adaptación para superar las 
                  dificultades y garantizar la supervivencia y desarrollo del país.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Impacto Nacional</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Las severas restricciones de recursos y energía impactaron todas las áreas de la vida nacional, 
                  obligando a la búsqueda de soluciones creativas e innovadoras.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Respuesta de CUJAE</h3>
                <p className="leading-relaxed">
                  Fue en este escenario donde surgieron centros de investigación y desarrollo como la CUJAE, 
                  que desempeñaron un papel fundamental en la búsqueda de respuestas a los problemas apremiantes del momento.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              CUJAE en el Período Especial
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Durante esta época crítica para Cuba, conocida como el Período Especial, la CUJAE dio un paso al frente 
                con una determinación excepcional, afrontando la gran responsabilidad de optimizar al máximo los recursos 
                escasos y limitados de nuestro país.
              </p>
              <p className="mb-6">
                En medio de las severas dificultades económicas y el bloqueo internacional, la universidad se centró en 
                buscar y desarrollar nuevas técnicas innovadoras que pudieran contribuir eficazmente a enfrentar la 
                problemática actual que el país atravesaba.
              </p>
              <p className="mb-6">
                La CUJAE no solo se dedicó a la investigación aplicada, sino que también promovió la formación de 
                profesionales capacitados que pudieran liderar la implementación de soluciones sostenibles y eficientes 
                en variados sectores productivos y sociales.
              </p>
              <p>
                Por medio de un enfoque multidisciplinario, la CUJAE fortaleció su papel protagónico para impulsar el 
                desarrollo científico y tecnológico que respondiera a las necesidades urgentes de la nación, logrando 
                avances importantes en áreas como la energía, la construcción y la gestión empresarial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;