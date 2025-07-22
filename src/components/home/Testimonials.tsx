import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Van Asselt family',
    location: 'Fletching & Saint-Tropez',
    testimonial: 'KBC beautifully executed two diverse projects—an oak-barn extension and a villa refurbishment in France. Meticulous workmanship and clear communication delivered homes we\'re proud of. Highly recommended.',
    rating: 5,
    project: 'International Projects',
  },
  {
    id: 2,
    name: 'Hanna Mashford',
    location: 'Groombridge',
    testimonial: 'Spencer at Kent Building & Construction and his employees were superb in the work they did at my house. They were punctual, polite and were a pleasure to have working here. Spencer was extremely knowledgable and helpful. He offered guidance and advice on certain works. His cost was reasonable and true to his quotation. His workmanship was excellent. I would not hesitate in having him undertake further work and would certainly recommend him to anyone looking for a decent builder.',
    rating: 5,
    project: 'Home Renovation',
  },
  {
    id: 3,
    name: 'John & Sally Turner',
    location: 'Langton Green',
    testimonial: 'Excellent work on extensive renovation inside and outside the house. Kitchen and Utility room were redesigned with a joining wall removed, new ceiling and tiled floor relaid. Reception hall stone floor removed and wooden floor laid, with existing wooden floors sanded and resurfaced. Walls and ceilings in bedrooms, dining room, lounge and hallway redecorated with stairs and banister also renovated. All external wooden windows sanded and resurfaced. Very high standard on all work and would highly recommend KBC Ltd.',
    rating: 5,
    project: 'Extensive Renovation',
  },
  {
    id: 4,
    name: 'Jonathan Kent',
    location: 'Bewl Water',
    testimonial: 'This first-phase barn restoration involved careful dismantling, reassembling on new foundations, insulating, reroofing and replacing major timbers. Spence and team solved problems, controlled costs and delivered superb stone, brick and oak-frame work. Even the conservation officer was impressed. Highly recommended.',
    rating: 5,
    project: 'Barn Restoration',
  },
  {
    id: 5,
    name: 'Mike',
    location: 'Matfield',
    testimonial: 'Spencer\'s team renovated our 150-year-old house and basement reliably and honestly. When issues arose, he clearly explained options. We\'re very happy with the quality and transparency.',
    rating: 5,
    project: 'Period Property Renovation',
  },
  {
    id: 6,
    name: 'Ellie',
    location: 'Tonbridge',
    testimonial: 'Kent Building & Construction listened, suggested improvements and always delivered exactly what I wanted. Honest, transparent and excellent finish. I\'d happily use and recommend them again.',
    rating: 5,
    project: 'Home Renovation',
  },
  {
    id: 7,
    name: 'Kathy & Andrew',
    location: 'Hackney',
    testimonial: 'Spencer repaired our Victorian house\'s structure and damp. Despite unexpected extra work, he warned us in advance and included us in every decision. Spencer, Nathan and Robert were punctual, hardworking and professional. Our façade is now structurally sound—highly recommended.',
    rating: 5,
    project: 'Victorian House Restoration',
  },
  {
    id: 8,
    name: 'Graham Wykes',
    location: 'Tunbridge Wells & Virginia Water',
    testimonial: 'On five high-value properties Spencer consistently fixed underlying issues to the highest standard, delivering excellent finishes. I\'ve recommended him to friends, all of whom appreciated his skill and reliability.',
    rating: 5,
    project: 'High-Value Property Renovation',
  },
  {
    id: 9,
    name: 'Sarah Garrett',
    location: 'Ninfield',
    testimonial: 'Spencer was professional, friendly and committed. When project scope changed, he stayed engaged, offered clear explanations and solution options. His pride in quality and exemplary customer service make him highly recommendable.',
    rating: 5,
    project: 'Building Project',
  },
  {
    id: 10,
    name: 'Fiona, Andy & Alex Pocock',
    location: 'Horsmonden',
    testimonial: 'KBC took on our challenging project mid-stream, working through COVID to source materials and maintain progress. Their suggestions enhanced our build. Professional, friendly and always reachable—we\'ve already recommended them and will use them again.',
    rating: 5,
    project: 'Complex Build Project',
  },
  {
    id: 11,
    name: 'Mrs Habershon',
    location: 'Hand Cross',
    testimonial: 'After our builder withdrew, Spencer seamlessly took over our kitchen/diner build and alterations. He planned expertly, worked hard, listened to our ideas and kept things running smoothly. A pleasure to work with, especially supporting my disabled husband.',
    rating: 5,
    project: 'Kitchen Extension',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://ik.imagekit.io/boostkit/Kent%20Building/Restoration%20and%20Refurbishment/Restoration-6.jpg?updatedAt=1751887634085')] bg-cover bg-center" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/70 to-gray-900/60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-white">Client <span className="text-primary-200">Testimonials</span></h2>
          <p className="section-subtitle text-primary-100">
            Don't just take our word for it. Read what our clients have to say about their experience working with Spencer and the Kent Building & Construction team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-8 top-0 text-primary-400 opacity-30">
              <Quote size={120} />
            </div>

            <div className="bg-white rounded-lg shadow-custom-lg p-8 md:p-12 relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${index === activeIndex ? 'block' : 'hidden'}`}
                >
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm border border-gray-200 rounded px-2 py-1">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.testimonial}"
                  </p>
                </motion.div>
              ))}

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex flex-wrap justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeIndex
                          ? 'bg-primary-600 w-4'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;