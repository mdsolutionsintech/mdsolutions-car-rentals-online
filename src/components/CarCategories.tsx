
import React from 'react';
import { Car, Users, Briefcase, Crown, Bus, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'economy',
    name: 'Economy',
    icon: Car,
    description: 'Fuel-efficient and budget-friendly',
    features: ['Great fuel economy', 'Easy parking', 'Perfect for city drives'],
    price: 'From R250/day',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'sedan',
    name: 'Sedan',
    icon: Briefcase,
    description: 'Comfortable and professional',
    features: ['Spacious interior', 'Business friendly', 'Smooth ride'],
    price: 'From R350/day',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'suv',
    name: 'SUV',
    icon: Users,
    description: 'Spacious for families and groups',
    features: ['7-8 seater options', 'High driving position', 'Ample cargo space'],
    price: 'From R500/day',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    icon: Crown,
    description: 'Premium experience and comfort',
    features: ['Luxury interior', 'Advanced features', 'Premium brands'],
    price: 'From R800/day',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'van',
    name: 'Van',
    icon: Bus,
    description: 'Perfect for large groups',
    features: ['Up to 12 passengers', 'Large luggage space', 'Event transportation'],
    price: 'From R600/day',
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    id: 'electric',
    name: 'Electric',
    icon: Zap,
    description: 'Eco-friendly and modern',
    features: ['Zero emissions', 'Quiet operation', 'Latest technology'],
    price: 'From R450/day',
    gradient: 'from-lime-500 to-green-600'
  }
];

const CarCategories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Vehicle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From budget-friendly economy cars to luxury vehicles, we have the perfect ride for every occasion and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{category.price}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      View Cars →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
