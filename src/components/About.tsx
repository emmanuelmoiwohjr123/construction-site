import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years Experience', icon: <Clock className="h-8 w-8 text-yellow-500 mb-2" /> },
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="h-8 w-8 text-yellow-500 mb-2" /> },
    { value: '150+', label: 'Expert Team Members', icon: <Users className="h-8 w-8 text-yellow-500 mb-2" /> },
    { value: '35+', label: 'Industry Awards', icon: <Award className="h-8 w-8 text-yellow-500 mb-2" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About BuildMaster Construction</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Founded in 1998, BuildMaster Construction has grown to become one of the
              most trusted construction companies in the industry. Our journey is built
              on a foundation of integrity, craftsmanship, and a relentless commitment
              to exceeding client expectations.
            </p>
            <p className="text-gray-600 mb-6">
              We bring together a team of highly skilled professionals, cutting-edge technology,
              and sustainable building practices to deliver projects that stand the test of time.
              From residential homes to large-scale commercial and industrial facilities, we
              approach each project with the same level of dedication and attention to detail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Safety First Approach', 'Innovative Solutions', 'Sustainable Practices', 'Quality Craftsmanship'].map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Construction workers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-12">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Blueprints"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 -mt-12">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Construction machinery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
              {stat.icon}
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;