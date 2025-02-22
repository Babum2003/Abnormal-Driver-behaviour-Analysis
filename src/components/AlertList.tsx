import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Clock } from 'lucide-react';
import { Alert } from '../types';

interface AlertListProps {
  alerts: Alert[];
}

export const AlertList: React.FC<AlertListProps> = ({ alerts }) => {
  const getSeverityColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-4 shadow-md"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold">{alert.type.replace('_', ' ').toUpperCase()}</h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${getSeverityColor(alert.severity)}`}>
              {alert.severity}
            </span>
          </div>

          <p className="mt-2 text-gray-600">{alert.details}</p>

          <div className="mt-3 grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{alert.location.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{new Date(alert.timestamp).toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};