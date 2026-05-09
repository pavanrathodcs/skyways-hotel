import {
  Wifi,
  UtensilsCrossed,
  PlaneTakeoff,
  Bell,
  Trees,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type Room = {
  id: string;
  name: string;
  tag: string;
  description: string;
  priceDisplay: string;
  size: string;
  image: string;
  gradient: string;
  glowClass: string;
  features: string[];
};

export type Amenity = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export type Stat = {
  value: string;
  label: string;
};

export const ROOMS: Room[] = [
  {
    id: 'queen-room',
    name: 'Queen Room',
    tag: 'Most Booked',
    description: 'Clean, comfortable queen bed with free WiFi, cable TV, and everything you need for a great LAX stay.',
    priceDisplay: '$89',
    size: '250 sq ft',
    image: '/rooms/queen-room.jpg',
    gradient: 'from-[#0d1117] via-[#131928] to-[#0a0e1a]',
    glowClass: 'bg-[#0f1e3d]/40',
    features: ['1 Queen Bed', 'Free WiFi', 'Cable TV', 'Non-Smoking'],
  },
  {
    id: 'queen-double',
    name: 'Queen Double',
    tag: 'Best for Families',
    description: 'Two queen beds with garden views, free WiFi, and plenty of space for families or groups.',
    priceDisplay: '$100',
    size: '291 sq ft',
    image: '/rooms/queen-double.jpg',
    gradient: 'from-[#111111] via-[#1a1a1a] to-[#141414]',
    glowClass: 'bg-[#1a1a1a]/40',
    features: ['2 Queen Beds', 'Garden View', 'Free WiFi', 'Sleeps 4'],
  },
  {
    id: 'accessible-room',
    name: 'Accessible Room',
    tag: 'ADA Compliant',
    description: 'Fully accessible room with roll-in shower, grab bars, shower bench, and wide doorways for full comfort and independence.',
    priceDisplay: '$89',
    size: '250 sq ft',
    image: '/rooms/accessible.jpg',
    gradient: 'from-[#0a0f0a] via-[#111811] to-[#0a0f0a]',
    glowClass: 'bg-[#0f2010]/40',
    features: ['Roll-In Shower', 'Grab Bars', 'Shower Bench', 'Wide Doorways'],
  },
];

export const AMENITIES: Amenity[] = [
  {
    name: 'Free WiFi',
    description: 'High-speed wireless internet throughout the property, included with every stay.',
    Icon: Wifi,
  },
  {
    name: "Aliki's Authentic Greek Taverna",
    description: "Authentic Greek cuisine on-site. Open for lunch and dinner. Vegan and gluten-free options available.",
    Icon: UtensilsCrossed,
  },
  {
    name: 'LAX Access',
    description: 'Located 0.8 miles from Los Angeles International Airport with easy transit connections.',
    Icon: PlaneTakeoff,
  },
  {
    name: '24-Hour Front Desk',
    description: 'Our team is available around the clock for check-in, assistance, and local recommendations.',
    Icon: Bell,
  },
  {
    name: 'Garden & Terrace',
    description: 'A tranquil outdoor space to relax, with seating and garden views.',
    Icon: Trees,
  },
  {
    name: 'Family Rooms',
    description: 'Spacious rooms configured for families, with multiple beds and extra amenities.',
    Icon: Users,
  },
];

export const STATS: Stat[] = [
  { value: '0.8 mi', label: 'From LAX' },
  { value: '7.1', label: 'Guest Rating' },
  { value: 'Free', label: 'WiFi Included' },
  { value: '24/7', label: 'Front Desk' },
];
