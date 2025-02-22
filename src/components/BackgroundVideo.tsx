import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundVideo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-rainy-night-4331-large.mp4" 
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-50/90" />
    </motion.div>
  );
};