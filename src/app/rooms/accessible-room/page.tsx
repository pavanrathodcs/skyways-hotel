import type { Metadata } from "next";
import { ShowerHead, Accessibility, Armchair, DoorOpen, Wifi, Ban } from "lucide-react";
import RoomDetail, { type RoomDetailData } from "@/components/RoomDetail";

export const metadata: Metadata = {
  title: "Accessible Room — Skyways Hotel",
  description:
    "ADA-compliant Accessible Room at Skyways Hotel from $89/night. Roll-in shower, grab bars, shower bench, wide doorways. 0.8 miles from LAX.",
};

const ROOM: RoomDetailData = {
  slug: "accessible-room",
  name: "Accessible Room",
  price: "$89",
  description:
    "Fully ADA-compliant room with roll-in shower, grab bars, shower bench, and wide doorways. Designed for comfort and full accessibility.",
  features: [
    { Icon: ShowerHead,    label: "Roll-In Shower" },
    { Icon: Accessibility, label: "Grab Bars" },
    { Icon: Armchair,      label: "Shower Bench" },
    { Icon: DoorOpen,      label: "Wide Doorways" },
    { Icon: Wifi,          label: "Free Wi-Fi" },
    { Icon: Ban,           label: "Non-Smoking" },
  ],
  image: "/rooms/accessible.jpg",
};

export default function AccessibleRoomPage() {
  return <RoomDetail room={ROOM} />;
}
