import type { Metadata } from "next";
import { BedDouble, Wifi, Tv, Ban, Sparkles, Clock } from "lucide-react";
import RoomDetail, { type RoomDetailData } from "@/components/RoomDetail";

export const metadata: Metadata = {
  title: "Queen Room — Skyways Hotel",
  description:
    "Queen Room at Skyways Hotel from $89/night. One queen bed, free Wi-Fi, cable TV, 0.8 miles from LAX.",
};

const ROOM: RoomDetailData = {
  slug: "queen-room",
  name: "Queen Room",
  price: "$89",
  description:
    "A clean, comfortable room with one queen bed. Everything you need for a great LAX-area stay — free Wi-Fi, cable TV, and a good night's sleep before your flight.",
  features: [
    { Icon: BedDouble, label: "1 Queen Bed" },
    { Icon: Wifi,      label: "Free Wi-Fi" },
    { Icon: Tv,        label: "Cable TV" },
    { Icon: Ban,       label: "Non-Smoking" },
    { Icon: Sparkles,  label: "Daily Housekeeping" },
    { Icon: Clock,     label: "24/7 Front Desk" },
  ],
  image: "/rooms/queen-room.jpg",
};

export default function QueenRoomPage() {
  return <RoomDetail room={ROOM} />;
}
