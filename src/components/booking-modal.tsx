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
}

export default function BookingModal({size, className=""}:BookingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        size={size}
          className="bg-yellow-500 text-black"
        >
          Book Appointment
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black border-yellow-500/20">
        <h2 className="text-2xl font-bold">
          Book Appointment
        </h2>

        <div className="space-y-4 mt-6">
          <Input placeholder="Full Name" />

          <Input placeholder="Phone Number" />

          <Input placeholder="Service" />

          <Input type="date" />
        </div>

        <Button className="mt-6 w-full bg-yellow-500 text-black">
          Submit Booking
        </Button>
      </DialogContent>
    </Dialog>
  );
}