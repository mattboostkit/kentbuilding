import React from 'react';
import { Ruler, Star, Heart } from 'lucide-react';

const StatsSection: React.FC = () => (
  <section className="bg-white py-16">
    <div className="container-custom mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kent Building & Construction Ltd</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our commitment to excellence and customer satisfaction is reflected in our track record and industry recognition.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="p-6 rounded-full bg-primary-600/20 mb-4">
            <Ruler className="text-primary-600" size={36} />
          </div>
          <p className="text-gray-900 font-bold text-2xl mb-2">150+</p>
          <p className="text-gray-600 text-base">Projects Completed</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="p-6 rounded-full bg-primary-600/20 mb-4">
            <Star className="text-primary-600" size={36} />
          </div>
          <p className="text-gray-900 font-bold text-2xl mb-2">All 5 Star</p>
          <p className="text-gray-600 text-base">Reviews</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="p-6 rounded-full bg-primary-600/20 mb-4">
            <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="FMB Logo" className="h-9 w-auto" />
          </div>
          <p className="text-gray-900 font-bold text-2xl mb-2">FMB Member</p>
          <p className="text-gray-600 text-base">For 15 Years</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="p-6 rounded-full bg-primary-600/20 mb-4">
            <Heart className="text-primary-600" size={36} />
          </div>
          <p className="text-gray-900 font-bold text-2xl mb-2">100%</p>
          <p className="text-gray-600 text-base">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
