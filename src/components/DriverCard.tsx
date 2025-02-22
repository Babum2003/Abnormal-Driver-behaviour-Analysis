import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Car, TrendingDown, TrendingUp } from 'lucide-react';
import { DriverData } from '../types';

interface DriverCardProps {
  driver: DriverData;
  onClick: (driver: DriverData) => void;
}

export const DriverCard: React.FC<DriverCardProps> = ({ driver, onClick }) => {
  const scoreColor = driver.behavior.safetyScore >= 90 
    ? 'text-green-600' 
    : driver.behavior.safetyScore >= 80 
    ? 'text-yellow-600' 
    : 'text-red-600';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(driver)}
      className="bg-white rounded-xl p-6 shadow-lg cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{driver.name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Car className="w-4 h-4" />
            <span className="text-sm">{driver.vehicleId}</span>
          </div>
        </div>
        <motion.div 
          className={`text-2xl font-bold ${scoreColor}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {driver.behavior.safetyScore}
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
          <span className="text-sm">
            {driver.alerts.length} Alert{driver.alerts.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {driver.behavior.safetyScore >= driver.behavior.safetyScore ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className="text-sm">Score Trend</span>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        Last updated: {new Date(driver.lastUpdated).toLocaleString()}
      </div>
    </motion.div>
  );
};