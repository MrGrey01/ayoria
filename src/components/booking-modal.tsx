"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookingModalProps{
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
  className?: string;
  title?: string;
}

export default function BookingModal({size, title="Book Appointment", className=""}:BookingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        size={size}
          className="bg-brand-gold hover:bg-brand-gold/80 text-black font-bold"
        >
          {title}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black border-brand-gold/20">
        <h2 className="text-2xl font-bold">
          Book Appointment
        </h2>

        <div className="space-y-4 mt-6">
          <Input placeholder="Full Name" />

          <Input placeholder="Phone Number" />

          <Input placeholder="Service" />

          <Input type="date" />
        </div>

        <Button className="mt-6 w-full bg-brand-gold text-black">
          Submit Booking
        </Button>
      </DialogContent>
    </Dialog>
  );
}