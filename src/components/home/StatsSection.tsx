import React from 'react';
import { Ruler, Award } from 'lucide-react';

const StatsSection: React.FC = () => (
  <section className="bg-white py-12">
    <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center justify-center md:justify-start">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Ruler className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">250+</p>
          <p className="text-gray-600">Projects Completed</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-4 rounded-full bg-primary-600/20 mr-5">
          <Award className="text-primary-400" size={24} />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">100%</p>
          <p className="text-gray-600">Customer Satisfaction</p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <img src="https://ik.imagekit.io/boostkit/Kent%20Building/FMB.svg?updatedAt=1747756996556" alt="FMB Logo" className="h-12 w-auto mr-5" />
        <div>
          <p className="text-gray-900 font-bold text-xl">FMB Member</p>
          <p className="text-gray-600">For Over 15 Years</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
