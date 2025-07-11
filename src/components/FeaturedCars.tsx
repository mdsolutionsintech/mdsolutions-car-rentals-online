import React, { useState } from 'react';
import { Star, Users, Fuel, Settings, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const featuredCars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 280,
    rating: 4.8,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging'],
    available: true
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 850,
    rating: 4.9,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    features: ['Leather Seats', 'Navigation', 'Premium Sound'],
    available: true
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 520,
    rating: 4.7,
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    features: ['4WD', '7 Seater', 'Roof Rails'],
    available: true
  },
  {
    id: 4,
    name: 'Mercedes C-Class',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 950,
    rating: 4.9,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    features: ['Premium Interior', 'Advanced Safety', 'Luxury Package'],
    available: false
  },
  {
    id: 5,
    name: 'Volkswagen Polo',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 250,
    rating: 4.6,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    features: ['Fuel Efficient', 'City Friendly', 'Reliable'],
    available: true
  },
  {
    id: 6,
    name: 'Toyota Quantum',
    category: 'Van',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 650,
    rating: 4.5,
    seats: 14,
    fuel: 'Diesel',
    transmission: 'Manual',
    features: ['14 Seater', 'Large Luggage', 'Group Travel'],
    available: true
  },
  {
    id: 7,
    name: 'Ford EcoSport',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606016792748-2d7cdd936f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 420,
    rating: 4.5,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    features: ['Compact SUV', 'High Ground Clearance', 'Smart Features'],
    available: true
  },
  {
    id: 8,
    name: 'Audi A4',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 920,
    rating: 4.8,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Premium Audio'],
    available: true
  },
  {
    id: 9,
    name: 'Nissan Micra',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 230,
    rating: 4.4,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    features: ['Compact Size', 'Easy Parking', 'Great MPG'],
    available: true
  },
  {
    id: 10,
    name: 'Chevrolet Suburban',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1586789019687-a4f7da24bc75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 780,
    rating: 4.6,
    seats: 8,
    fuel: 'Petrol',
    transmission: 'Automatic',
    features: ['8 Seater', 'Towing Capacity', 'Premium Interior'],
    available: true
  },
  {
    id: 11,
    name: 'Mercedes Sprinter',
    category: 'Van',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 720,
    rating: 4.7,
    seats: 12,
    fuel: 'Diesel',
    transmission: 'Automatic',
    features: ['12 Seater', 'Luxury Interior', 'Executive Travel'],
    available: true
  }
];

const FeaturedCars = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Economy', 'Luxury', 'SUV', 'Van'];

  const filteredCars = selectedCategory === 'All' 
    ? featuredCars 
    : featuredCars.filter(car => car.category === selectedCategory);

  return (
    <section id="cars" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of premium vehicles, each maintained to the highest standards for your comfort and safety.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Card 
              key={car.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${car.available ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {car.available ? 'Available' : 'Unavailable'}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {car.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{car.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{car.seats} seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">R{car.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <Link to="/booking">
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      disabled={!car.available}
                    >
                      {car.available ? 'Rent Now' : 'Unavailable'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/booking">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View All Vehicles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
