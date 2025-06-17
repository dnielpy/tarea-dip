import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CUJAEHistory from './components/CUJAEHistory';
import ContextSection from './components/ContextSection';
import ResearchCenter from './components/ResearchCenter';
import LegacySection from './components/LegacySection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'historia', 'contexto', 'cetdir', 'cipel', 'cecat', 'ceter', 'legado'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <CUJAEHistory />
      <ContextSection />
      
      <ResearchCenter
        id="cetdir"
        title="CETDIR"
        year="1988"
        subtitle="Formación de Directivos y Gestión Empresarial"
        description="Centro CETDIR fue fundado en septiembre de 1988, adscrito a la Facultad de Ingeniería Industrial de la CUJAE. Se dedica a la capacitación y entrenamiento de directivos del sistema empresarial cubano y organismos estatales, promoviendo la introducción de técnicas de dirección y gestión adaptadas a la realidad cubana. Su Maestría en Dirección es una de las más reconocidas del país, acreditada como de Excelencia en 2016."
        functions={[
          "Formación y entrenamiento de directivos empresariales",
          "Desarrollo de programas de capacitación gerencial",
          "Consultoría estratégica para empresas estatales y organizaciones",
          "Investigación en gestión empresarial y administración",
          "Superación de cuadros como encargo estatal"
        ]}
        impacts={[
          "Incremento en la eficiencia de empresas estatales",
          "Mejora en procesos de gestión y toma de decisiones",
          "Crecimiento medible en productividad empresarial",
          "Formación de líderes preparados para crisis",
          "Transformación organizacional en entidades participantes"
        ]}
        projects={[
          {
            name: "Maestría en Dirección",
            description: "Programa acreditado como de Excelencia en 2016, reconocido como uno de los más prestigiosos del país"
          },
          {
            name: "Consultorías Estratégicas",
            description: "Servicios de investigación y desarrollo experimental en gestión empresarial con salidas de transformación"
          }
        ]}
        additionalInfo="CETDIR desarrolla actividades de ciencias y tecnologías orientadas al campo de la administración, con el fin de elevar la eficiencia y efectividad. La actividad de superación de cuadros es gestionada como proyectos con salidas de transformación en las entidades participantes."
        color="blue"
        image="/tarea-dip/1.jpeg"
      />

      <ResearchCenter
        id="cipel"
        title="CIPEL"
        year="1988"
        subtitle="Pruebas y Optimización del Sistema Electroenergético Nacional"
        description="El Centro de Investigaciones y Pruebas Electroenergéticas (CIPEL) fue creado oficialmente el 17 de diciembre de 1988, mediante la fusión de especialistas provenientes de los dos centros de investigaciones que existían en aquellos momentos y que abordaban los temas del sector eléctrico; uno perteneciente al Ministerio de Educación Superior (MES) y otro perteneciente al antiguo Ministerio de la Industria Eléctrica (MIE)."
        functions={[
          "Realizar pruebas y ensayos en alta tensión a equipos nacionales e importados",
          "Investigación en generación distribuida y sistemas eléctricos", 
          "Desarrollo de aplicaciones industriales y diagnósticos",
          "Investigaciones para la defensa nacional",
          "Optimizar la estabilidad y confiabilidad del Sistema Electroenergético Nacional"
        ]}
        impacts={[
          "Reducción significativa de apagones en el sistema nacional",
          "Incremento en eficiencia energética del país",
          "Mayor confiabilidad del sistema eléctrico cubano",
          "Optimización de redes eléctricas nacionales",
          "Unificación de recursos materiales y humanos del sector eléctrico"
        ]}
        projects={[
          {
            name: "Pruebas de Alta Tensión",
            description: "Ensayos especializados para equipos y materiales del Sistema Electroenergético Nacional"
          },
          {
            name: "Investigación en Generación Distribuida",
            description: "Desarrollo de tecnologías para optimizar la generación y distribución eléctrica"
          }
        ]}
        additionalInfo="CIPEL tiene la responsabilidad de aunar los recursos materiales y humanos en el país para dar respuesta adecuada a las investigaciones que requiere el Sistema Electroenergético Nacional (SEN), integrados en un solo centro. Durante el Período Especial, estas pruebas fueron clave para mantener el suministro eléctrico en condiciones difíciles."
        color="green"
        image="/tarea-dip/2.jpeg"
      />

      <ResearchCenter
        id="cecat"
        title="CECAT"
        year="1990"
        subtitle="Tecnologías Tropicales para la Construcción Sostenible"
        description="El Centro de Estudios de Construcción y Arquitectura Tropical (CECAT) fue creado en 1990, sustituyendo al CIMTEC. Su objetivo es unificar esfuerzos con la Facultad de Arquitectura en el desarrollo de materiales y tecnologías propias de las condiciones tropicales, potenciando la participación popular en la creación de los materiales necesarios para la vivienda y obras de interés social."
        functions={[
          "Desarrollo de tecnologías de construcción adaptadas al clima tropical",
          "Investigación de materiales resistentes al ambiente húmedo",
          "Optimización de recursos constructivos locales",
          "Promoción de construcciones sostenibles y económicas",
          "Potenciar la participación popular en construcción de viviendas"
        ]}
        impacts={[
          "Reducción de costos en proyectos de construcción",
          "Aumento de durabilidad en edificaciones tropicales",
          "Optimización del uso de materiales locales",
          "Mejora en resistencia a condiciones climáticas adversas",
          "Desarrollo de soluciones constructivas innovadoras"
        ]}
        projects={[
          {
            name: "Tejas de Microconcreto (TEVI)",
            description: "Diseñadas para resistir climas tropicales, reducen costos y aumentan durabilidad en proyectos de construcción"
          },
          {
            name: "Sistema Constructivo de Ferrocemento SERF",
            description: "Material innovador y económico que optimiza uso de recursos, con aplicaciones en viviendas y obras civiles"
          }
        ]}
        additionalInfo="Las actividades docentes de pregrado están vinculadas a la carrera de Ingeniería Civil, y el posgrado incluye la Maestría de Ingeniería Civil y el Doctorado Curricular Colaborativo. Uno de sus resultados más relevantes ha sido la creación de las tejas de microconcreto (Tevi) y el sistema constructivo de ferrocemento SERF."
        color="purple"
        image="/tarea-dip/cvi-historia mejor.jpg"
      />

      <ResearchCenter
        id="ceter"
        title="CETER"
        year="1992"
        subtitle="Energías Renovables y Eficiencia Energética"
        description="El Centro de Estudios de Tecnologías Energéticas Renovables (CETER) fue fundado el 10 de diciembre de 1992, inaugurado en el marco del VII Forum Nacional de Piezas de Repuesto, Equipos y Tecnologías de Avanzada, por Resolución Rectoral No.170/92. Tributa a la Facultad de Mecánica y su objetivo es contribuir al desarrollo sostenible de la sociedad mediante la Educación, Investigación e Implementación alrededor de las fuentes de energía renovable."
        functions={[
          "Investigación en fuentes de energía renovable",
          "Desarrollo de tecnologías en eficiencia energética",
          "Educación e implementación de soluciones energéticas sostenibles",
          "Capacitación de técnicos especializados en energías limpias",
          "Estudio de la interrelación energía-medio ambiente-sociedad"
        ]}
        impacts={[
          "Reducción de dependencia de combustibles fósiles",
          "Diversificación de la matriz energética nacional",
          "Optimización del consumo energético en sectores productivos",
          "Consolidación de un legado de sostenibilidad energética",
          "Contribución al desarrollo sostenible de Cuba"
        ]}
        projects={[
          {
            name: "Proyectos Solares y Eólicos",
            description: "Implementación de energías limpias adaptadas a condiciones tropicales para diversificar la matriz energética"
          },
          {
            name: "Eficiencia Energética",
            description: "Estudios aplicados en sectores industriales y residenciales para reducir consumo y optimizar recursos"
          }
        ]}
        additionalInfo="CETER mantiene colaboración con universidades y centros de investigación nacionales y es miembro activo de la red Cubasolar. Durante el Período Especial, desarrolló tecnologías innovadoras que contribuyeron significativamente a la reducción de la dependencia de combustibles fósiles."
        color="orange"
        image="/tarea-dip/3.jpeg"
      />

      <LegacySection />
      <Footer />
    </div>
  );
}

export default App;