"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger,SheetClose  } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import BookingModal from "./booking-modal";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-black p-4 border-l border-yellow-600/20"
      >
        <div className="my-12 flex flex-col justify-between items-center gap-8">
          {navLinks.map((link) => (
            <SheetClose asChild
              key={link.href}
            >
            <Link
              href={link.href}
              className="text-lg text-white hover:text-brand-gold transition"
            >
              {link.label}
            </Link>
            </SheetClose>
          ))}

          <BookingModal className="mt-4 bg-yellow-500 hover:bg-brand-gold text-black"/>
        </div>
      </SheetContent>
    </Sheet>
  );
}