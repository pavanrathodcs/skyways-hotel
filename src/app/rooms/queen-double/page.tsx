import type { Metadata } from "next";
import { BedDouble, Trees, Wifi, Users, Ban, Sparkles } from "lucide-react";
import RoomDetail, { type RoomDetailData } from "@/components/RoomDetail";

export const metadata: Metadata = {
  title: "Queen Double Room — Skyways Hotel",
  description:
    "Queen Double Room at Skyways Hotel from $100/night. Two queen beds, garden view, sleeps 4, 0.8 miles from LAX.",
};

const ROOM: RoomDetailData = {
  slug: "queen-double",
  name: "Queen Double Room",
  price: "$100",
  description:
    "Two queen beds with garden views — ideal for families, groups, or anyone who wants extra space. Free Wi-Fi and room for up to 4 guests.",
  features: [
    { Icon: BedDouble, label: "2 Queen Beds" },
    { Icon: Trees,     label: "Garden View" },
    { Icon: Wifi,      label: "Free Wi-Fi" },
    { Icon: Users,     label: "Sleeps 4" },
    { Icon: Ban,       label: "Non-Smoking" },
    { Icon: Sparkles,  label: "Daily Housekeeping" },
  ],
  image: "/rooms/queen-double.jpg",
};

export default function QueenDoublePage() {
  return <RoomDetail room={ROOM} />;
}
