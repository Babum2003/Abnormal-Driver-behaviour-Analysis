export interface DriverData {
  id: string;
  name: string;
  vehicleId: string;
  behavior: BehaviorMetrics;
  alerts: Alert[];
  lastUpdated: string;
  drivingHours: number;
  distanceCovered: number;
  vehicleType: string;
  licenseClass: string;
  experience: number;
}

export interface BehaviorMetrics {
  speedingInstances: number;
  harshBraking: number;
  suddenAcceleration: number;
  sharpTurns: number;
  distractions: number;
  safetyScore: number;
  fuelEfficiency: number;
  averageSpeed: number;
  restBreaks: number;
}

export interface Alert {
  id: string;
  type: 'speeding' | 'harsh_braking' | 'sudden_acceleration' | 'sharp_turn' | 'distraction';
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  details: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

export interface TrendData {
  date: string;
  safetyScore: number;
  incidents: number;
}

export interface DrivingAnimation {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  type: 'normal' | 'abnormal';
}