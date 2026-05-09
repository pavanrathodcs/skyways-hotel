import type { Metadata } from "next";
import BookingClient from "@/components/booking/BookingClient";

export const metadata: Metadata = {
  title: "Reserve Your Stay — Skyways Hotel",
  description:
    "Book your room at Skyways Hotel, 0.8 miles from LAX Airport in Los Angeles. Rooms from $89/night. Free Wi-Fi, 24/7 front desk.",
};

export default function BookingPage() {
  return <BookingClient />;
}
