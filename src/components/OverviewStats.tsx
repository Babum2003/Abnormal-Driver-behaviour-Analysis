import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Clock, Route, AlertTriangle, 
  TrendingUp, Gauge, Car, Award 
} from 'lucide-react';
import { DriverData } from '../types';

interface OverviewStatsProps {
  drivers: DriverData[];
}

export const OverviewStats: React.FC<OverviewStatsProps> = ({ drivers }) => {
  const totalAlerts = drivers.reduce((sum, driver) => sum + driver.alerts.length, 0);
  const avgSafetyScore = drivers.reduce((sum, driver) => sum + driver.behavior.safetyScore, 0) / drivers.length;
  const totalDistance = drivers.reduce((sum, driver) => sum + driver.distanceCovered, 0);
  const totalHours = drivers.reduce((sum, driver) => sum + driver.drivingHours, 0);

  const stats = [
    {
      title: 'Total Drivers',
      value: drivers.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Driving Hours',
      value: `${Math.round(totalHours)}h`,
      icon: Clock,
      color: 'bg-green-500',
    },
    {
      title: 'Distance Covered',
      value: `${Math.round(totalDistance).toLocaleString()} km`,
      icon: Route,
      color: 'bg-purple-500',
    },
    {
      title: 'Total Alerts',
      value: totalAlerts,
      icon: AlertTriangle,
      color: 'bg-yellow-500',
    },
    {
      title: 'Avg Safety Score',
      value: Math.round(avgSafetyScore),
      icon: TrendingUp,
      color: 'bg-indigo-500',
    },
    {
      title: 'Active Vehicles',
      value: new Set(drivers.map(d => d.vehicleType)).size,
      icon: Car,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};