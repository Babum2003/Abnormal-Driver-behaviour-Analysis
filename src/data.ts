import { DriverData, TrendData, DrivingAnimation } from './types';

export const driversData: DriverData[] = [
  {
    id: 'D001',
    name: 'John Smith',
    vehicleId: 'V001',
    vehicleType: 'Heavy Truck',
    licenseClass: 'Class A CDL',
    experience: 5,
    drivingHours: 156,
    distanceCovered: 8750,
    behavior: {
      speedingInstances: 3,
      harshBraking: 2,
      suddenAcceleration: 1,
      sharpTurns: 0,
      distractions: 2,
      safetyScore: 85,
      fuelEfficiency: 7.8,
      averageSpeed: 65,
      restBreaks: 12
    },
    alerts: [
      {
        id: 'A001',
        type: 'speeding',
        timestamp: '2024-03-21T10:30:00Z',
        severity: 'medium',
        details: 'Exceeded speed limit by 15 mph',
        location: {
          latitude: 40.7128,
          longitude: -74.0060,
          address: 'Broadway, New York'
        }
      }
    ],
    lastUpdated: '2024-03-21T11:00:00Z'
  },
  {
    id: 'D002',
    name: 'Emma Davis',
    vehicleId: 'V002',
    vehicleType: 'Delivery Van',
    licenseClass: 'Class B CDL',
    experience: 3,
    drivingHours: 120,
    distanceCovered: 5200,
    behavior: {
      speedingInstances: 1,
      harshBraking: 0,
      suddenAcceleration: 1,
      sharpTurns: 1,
      distractions: 0,
      safetyScore: 92,
      fuelEfficiency: 8.5,
      averageSpeed: 55,
      restBreaks: 15
    },
    alerts: [],
    lastUpdated: '2024-03-21T10:55:00Z'
  },
  {
    id: 'D003',
    name: 'Michael Chen',
    vehicleId: 'V003',
    vehicleType: 'Box Truck',
    licenseClass: 'Class B CDL',
    experience: 7,
    drivingHours: 180,
    distanceCovered: 9800,
    behavior: {
      speedingInstances: 2,
      harshBraking: 1,
      suddenAcceleration: 0,
      sharpTurns: 2,
      distractions: 1,
      safetyScore: 88,
      fuelEfficiency: 7.2,
      averageSpeed: 58,
      restBreaks: 18
    },
    alerts: [
      {
        id: 'A002',
        type: 'harsh_braking',
        timestamp: '2024-03-21T09:15:00Z',
        severity: 'low',
        details: 'Sudden brake application',
        location: {
          latitude: 34.0522,
          longitude: -118.2437,
          address: 'Downtown LA'
        }
      }
    ],
    lastUpdated: '2024-03-21T11:30:00Z'
  },
  {
    id: 'D004',
    name: 'Sarah Johnson',
    vehicleId: 'V004',
    vehicleType: 'Heavy Truck',
    licenseClass: 'Class A CDL',
    experience: 10,
    drivingHours: 210,
    distanceCovered: 12000,
    behavior: {
      speedingInstances: 0,
      harshBraking: 1,
      suddenAcceleration: 0,
      sharpTurns: 0,
      distractions: 1,
      safetyScore: 95,
      fuelEfficiency: 8.1,
      averageSpeed: 62,
      restBreaks: 20
    },
    alerts: [],
    lastUpdated: '2024-03-21T12:00:00Z'
  },
  {
    id: 'D005',
    name: 'David Martinez',
    vehicleId: 'V005',
    vehicleType: 'Delivery Van',
    licenseClass: 'Class B CDL',
    experience: 2,
    drivingHours: 90,
    distanceCovered: 3800,
    behavior: {
      speedingInstances: 4,
      harshBraking: 3,
      suddenAcceleration: 2,
      sharpTurns: 1,
      distractions: 3,
      safetyScore: 78,
      fuelEfficiency: 7.5,
      averageSpeed: 52,
      restBreaks: 10
    },
    alerts: [
      {
        id: 'A003',
        type: 'distraction',
        timestamp: '2024-03-21T13:45:00Z',
        severity: 'high',
        details: 'Extended phone usage while driving',
        location: {
          latitude: 41.8781,
          longitude: -87.6298,
          address: 'Chicago Loop'
        }
      }
    ],
    lastUpdated: '2024-03-21T14:00:00Z'
  }
];

export const drivingAnimations: DrivingAnimation[] = [
  {
    id: 'DA001',
    title: 'Safe Highway Driving',
    videoUrl: 'https://www.youtube.com/embed/tZqIQmdSa1E',
    description: 'Example of proper highway driving behavior with safe following distance and smooth lane changes.',
    type: 'normal'
  },
  {
    id: 'DA002',
    title: 'Harsh Braking Incident',
    videoUrl: 'https://www.youtube.com/embed/9jrKXf2G-AA',
    description: 'Analysis of a harsh braking event showing potential safety risks and preventive measures.',
    type: 'abnormal'
  },
  {
    id: 'DA003',
    title: 'Distracted Driving Example',
    videoUrl: 'https://www.youtube.com/embed/K3kfJGx0lRM',
    description: 'Demonstration of common distracted driving behaviors and their consequences.',
    type: 'abnormal'
  }
];

export const trendData: TrendData[] = [
  { date: '2024-03-15', safetyScore: 88, incidents: 4 },
  { date: '2024-03-16', safetyScore: 90, incidents: 3 },
  { date: '2024-03-17', safetyScore: 85, incidents: 5 },
  { date: '2024-03-18', safetyScore: 87, incidents: 4 },
  { date: '2024-03-19', safetyScore: 91, incidents: 2 },
  { date: '2024-03-20', safetyScore: 89, incidents: 3 },
  { date: '2024-03-21', safetyScore: 88, incidents: 4 }
];