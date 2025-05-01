import React from 'react';
import { Building2, Warehouse, Home, Building, HardHat, Compass } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and additions tailored to your unique vision and needs.',
      icon: <Home className="h-12 w-12 text-yellow-500 mb-4" />,
    },
    {
      title: 'Commercial Buildings',
      description: 'Office spaces, retail centers, and mixed-use developments built to the highest standards.',
      icon: <Building2 className="h-12 w-12 text-yellow-500 mb-4" />,
    },
    {
      title: 'Industrial Facilities',
      description: 'Factories, warehouses, and production facilities designed for efficiency and functionality.',
      icon: <Warehouse className="h-12 w-12 text-yellow-500 mb-4" />,
    },
    {
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, and public works projects that connect communities and drive growth.',
      icon: <Building className="h-12 w-12 text-yellow-500 mb-4" />,
    },
    {
      title: 'Project Management',
      description: 'Comprehensive oversight from concept to completion, ensuring on-time and on-budget delivery.',
      icon: <HardHat className="h-12 w-12 text-yellow-500 mb-4" />,
    },
    {
      title: 'Architecture & Design',
      description: 'Innovative designs that balance aesthetics, functionality, and sustainability.',
      icon: <Compass className="h-12 w-12 text-yellow-500 mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction services to meet any project requirement,
            delivered with expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;