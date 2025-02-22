import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from 'lucide-react';
import { DriverCard } from './components/DriverCard';
import { AlertList } from './components/AlertList';
import { TrendChart } from './components/TrendChart';
import { OverviewStats } from './components/OverviewStats';
import { DrivingSimulation } from './components/DrivingSimulation';
import { BackgroundVideo } from './components/BackgroundVideo';
import { driversData, trendData, drivingAnimations } from './data';
import { DriverData } from './types';

function App() {
  const [selectedDriver, setSelectedDriver] = useState<DriverData | null>(null);

  return (
    <div className="min-h-screen bg-gray-50/90 relative">
      <BackgroundVideo />
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Car className="w-8 h-8 text-blue-600" />
              <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%'],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Driver Behavior Analysis
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Fleet Overview</h2>
          <OverviewStats drivers={driversData} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Driver Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {driversData.map((driver) => (
                  <DriverCard
                    key={driver.id}
                    driver={driver}
                    onClick={setSelectedDriver}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Safety Trends</h2>
              <TrendChart data={trendData} />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Driving Behavior Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {drivingAnimations.map((animation) => (
                  <DrivingSimulation key={animation.id} animation={animation} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
              <AlertList 
                alerts={selectedDriver 
                  ? selectedDriver.alerts 
                  : driversData.flatMap(d => d.alerts)
                } 
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white/90 backdrop-blur-sm border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Created By</h3>
              <div className="text-gray-600">
                <p>BabuM2003</p>
                <a 
                  href="mailto:babum73392@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  babum73392@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <div className="text-sm text-gray-600">
                <p>© 2024 Driver Behavior Analysis. All rights reserved.</p>
                <p>
                  Disclaimer: This system is for monitoring and analysis purposes only. 
                  The accuracy of behavior detection may vary based on environmental factors 
                  and sensor data quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;