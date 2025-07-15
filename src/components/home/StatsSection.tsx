import React from 'react';
import { Ruler, Star, CheckCircle, Users, Heart } from 'lucide-react';

const StatsSection: React.FC = () => (
  <section className="bg-white py-12">
    <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-center justify-center md:justify-start">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Ruler className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">150+</p>
          <p className="text-gray-600 text-lg">Projects Completed</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Star className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">All 5 Star</p>
          <p className="text-gray-600 text-lg">Reviews</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center md:justify-end">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <CheckCircle className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">Independently</p>
          <p className="text-gray-600 text-lg">Assessed by FMB</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="FMB Logo" className="h-12 w-auto mr-5" />
        <div>
          <p className="text-gray-900 font-bold text-xl">FMB Member</p>
          <p className="text-gray-600 text-lg">For 15 Years</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Users className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">Regular Aide</p>
          <p className="text-gray-600 text-lg">To BBC Construction</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Heart className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">100%</p>
          <p className="text-gray-600 text-lg">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
