import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">CUJAE</h3>
                <p className="text-sm text-gray-400">Universidad Tecnológica de La Habana</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Institución líder en educación superior tecnológica en Cuba, comprometida con la innovación, 
              la investigación y la formación de profesionales de excelencia.
            </p>
            <p className="text-sm text-gray-400">
              Este sitio web conmemora el legado histórico de los centros de investigación creados durante 
              el Período Especial en Cuba.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">
                    Calle 114 #11901 e/ Ciclovía y 119<br />
                    Marianao, La Habana, Cuba
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <p className="text-sm text-gray-300">+53 7 266 3293</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p className="text-sm text-gray-300">info@cujae.edu.cu</p>
              </div>
             <div className="flex items-center space-x-3">
                <img className='h-16' src='/Cujae_qrcode.png'></img>
             </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#contexto" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                Contexto Histórico
              </a>
              <a href="#cetdir" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                CETDIR
              </a>
              <a href="#cipel" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                CIPEL
              </a>
              <a href="#cecat" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                CECAT
              </a>
              <a href="#ceter" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                CETER
              </a>
              <a href="#legado" className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                Legado
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 CUJAE - Universidad Tecnológica de La Habana "José Antonio Echeverría". 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;