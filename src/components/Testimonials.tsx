import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
      content: 'BuildMaster transformed our vision into reality. Their attention to detail and craftsmanship exceeded our expectations. Our dream home was delivered on time and within budget.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Reynolds',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
      content: 'Having worked with many construction firms over the years, I can confidently say that BuildMaster stands out for their professionalism, quality, and innovative solutions.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      role: 'Commercial Client',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
      content: 'Our office renovation was completed with minimal disruption to our operations. The BuildMaster team was responsive, professional, and delivered exceptional results.',
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with BuildMaster Construction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-800 rounded-lg p-8 md:p-12">
            <div className="flex flex-wrap md:flex-nowrap items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto border-4 border-yellow-500">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="flex justify-center my-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="text-4xl text-yellow-500 opacity-30 absolute -top-4 -left-4">"</div>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="text-4xl text-yellow-500 opacity-30 absolute -bottom-8 -right-4">"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-yellow-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;