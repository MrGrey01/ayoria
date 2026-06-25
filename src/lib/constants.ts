// lib/constants.ts

import {
  Gem,
  Sparkles,
  Footprints,
  BrushCleaning,
  Scissors,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroServices = [
  "Luxury Nails",
  "Premium Lashes",
  "Pedicure",
  "Body Art & Tattoos",
  "Locs & Re-Locking",
];

export const services = [
  {
    title: "Nails",
    description:
      "Elegant nail artistry crafted to complement your unique style.",
    icon: Gem,
  },
  {
    title: "Lashes",
    description:
      "From soft glam to dramatic volume, enhance your gaze beautifully.",
    icon: Sparkles,
  },
  {
    title: "Pedicure",
    description:
      "Relaxing treatments that refresh, restore and perfect your feet.",
    icon: Footprints,
  },
  {
    title: "Tattoos",
    description:
      "Professional body art created with precision and creativity.",
    icon: BrushCleaning,
  },
  {
    title: "Locs",
    description:
      "Expert locking, re-locking and styling services for your crown.",
    icon: Scissors,
  },
];