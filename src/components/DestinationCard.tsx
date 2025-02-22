import React from 'react';
import { MapPin, Clock, DollarSign, Instagram, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { Destination, Currency } from '../types';
import { currencies } from '../data';

interface DestinationCardProps {
  destination: Destination;
  onInquire: (destination: Destination) => void;
  selectedCurrency: Currency;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination, 
  onInquire,
  selectedCurrency 
}) => {
  const convertedPrice = destination.price * currencies[selectedCurrency].rate;
  const currencySymbol = currencies[selectedCurrency].symbol;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
        >
          <a 
            href={`https://instagram.com/${destination.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-blue-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{destination.location}</span>
        </div>
        <h3 className="text-xl font-semibold mt-2">{destination.name}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{destination.description}</p>
        
        <div className="flex items-center gap-4 mt-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{destination.duration}</span>
          </div>
          <motion.div 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">
              {currencySymbol}{Math.round(convertedPrice).toLocaleString()}
            </span>
          </motion.div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Highlights:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {destination.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Transport:</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {destination.transport.map((t, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <Plane className="w-4 h-4" />
                <span>{t.type}</span>
                <span className="text-xs text-gray-500">({t.details})</span>
                <span className={`text-xs ${t.included ? 'text-green-500' : 'text-gray-500'}`}>
                  {t.included ? 'Included' : 'Optional'}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onInquire(destination)}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Make an Inquiry
        </motion.button>
      </div>
    </motion.div>
  );
};