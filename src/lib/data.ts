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
  features: string[];
  priceDisplay: string;
  size: string;
  gradient: string;
  glowClass: string;
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
    description: 'Comfortable queen bed, cable TV, free WiFi, and ironing facilities.',
    features: ['1 Queen Bed', 'Free WiFi', 'Cable TV', 'Non-smoking'],
    priceDisplay: '$89',
    size: '250 sq ft',
    gradient: 'from-[#0d1117] via-[#131928] to-[#0a0e1a]',
    glowClass: 'bg-[#0f1e3d]/40',
  },
  {
    id: 'queen-double',
    name: 'Queen Double',
    tag: 'Great for Families',
    description: 'Two queen beds with free WiFi, ideal for families or groups.',
    features: ['2 Queen Beds', 'Free WiFi', 'Cable TV', 'Non-smoking'],
    priceDisplay: '$100',
    size: '291 sq ft',
    gradient: 'from-[#111111] via-[#1c1c1c] to-[#141414]',
    glowClass: 'bg-[#1a1a1a]/40',
  },
  {
    id: 'executive-king',
    name: 'Executive King',
    tag: 'Premium Option',
    description: 'Upgraded king room with enhanced amenities and dedicated workspace.',
    features: ['King Bed', 'Work Desk', 'Free WiFi', 'Non-smoking'],
    priceDisplay: 'From $120',
    size: '320 sq ft',
    gradient: 'from-[#0d0a00] via-[#1a1200] to-[#100d00]',
    glowClass: 'bg-[#1a1000]/30',
  },
];

export const AMENITIES: Amenity[] = [
  {
    name: 'Free WiFi',
    description: 'High-speed wireless internet throughout the property, included with every stay.',
    Icon: Wifi,
  },
  {
    name: 'On-Site Restaurant',
    description: 'Full-service dining available for breakfast, lunch, and dinner on-site.',
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
