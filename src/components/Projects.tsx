import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'A state-of-the-art office building featuring sustainable design and smart technology integration.',
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Premium condominiums with panoramic views, high-end finishes, and resort-style amenities.',
    },
    {
      id: 3,
      title: 'Manufacturing Plant',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/4491888/pexels-photo-4491888.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Large-scale production facility designed for operational efficiency and worker safety.',
    },
    {
      id: 4,
      title: 'Community Bridge',
      category: 'infrastructure',
      image: 'https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Critical infrastructure connecting communities while featuring innovative engineering solutions.',
    },
    {
      id: 5,
      title: 'Urban Retail Center',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Mixed-use development combining retail spaces with entertainment venues in an urban setting.',
    },
    {
      id: 6,
      title: 'Custom Family Home',
      category: 'residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Bespoke residence built to the exact specifications of the client with premium materials throughout.',
    },
  ];

  const categories = ['all', 'commercial', 'residential', 'industrial', 'infrastructure'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects across various sectors,
            showcasing our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 mb-2 py-2 px-4 rounded-md capitalize transition duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs uppercase font-bold py-1 px-2 rounded-md">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="text-yellow-500 font-medium hover:text-yellow-600 transition duration-300"
                >
                  View Project Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;