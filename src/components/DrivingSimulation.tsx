import React from 'react';
import { motion } from 'framer-motion';
import { DrivingAnimation } from '../types';

interface DrivingSimulationProps {
  animation: DrivingAnimation;
}

export const DrivingSimulation: React.FC<DrivingSimulationProps> = ({ animation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="aspect-video">
        <iframe
          src={animation.videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{animation.title}</h3>
        <p className="text-gray-600 text-sm">{animation.description}</p>
        <span className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
          animation.type === 'normal' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {animation.type === 'normal' ? 'Safe Driving' : 'Unsafe Behavior'}
        </span>
      </div>
    </motion.div>
  );
};