"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroServices } from "@/lib/constants";
import BookingModal from "./booking-modal";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();

const y = useTransform(
  scrollY,
  [0, 600],
  [0, 120]
);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-black pt-32"
    >
      {/* background glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-brand-gold/20 bg-brand-gold/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-brand-gold">
              Luxury Beauty Studio
            </span>

            <h1 className="text-5xl font-bold font-heading leading-none text-white md:text-7xl">
              Every Detail.
              <br />
              Every Queen.
              <br />
              <span className="text-brand-gold">Always You.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Welcome to Ayoria, where beauty meets luxury.
              We specialize in premium nails, lashes, pedicure,
              tattoos, and loc services designed to elevate your confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <BookingModal
                size="lg"
                className="bg-brand-gold text-black hover:bg-brand-gold"
              />

              <Button
              asChild
                size="lg"
                variant="outline"
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
              >
                <Link href="#gallery">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {heroServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div style={{ y }}>
              <img
                src="/brand/nails.png"
                className="h-[250px] w-full rounded-[2rem] object-cover"
              />
  
</motion.div>
<motion.div style={{ y }}>
              <img
                src="/brand/cosmetics.png"
                className="mt-14 h-[250px] w-full rounded-[2rem] object-cover"
              />
              </motion.div>
<motion.div style={{ y }}>
              <img
                src="/brand/spa.png"
                className="h-[250px] w-full rounded-[2rem] object-cover"
              />
              </motion.div>
<motion.div style={{ y }}>
              <img
                src="/brand/tatoo.png"
                className="mt-14 h-[250px] w-full rounded-[2rem] object-cover"
              />
            </motion.div>
            </div>

            {/* floating card */}

            <div className="absolute bottom-10 left-1/2 w-[280px] -translate-x-1/2 rounded-3xl border border-brand-gold/20 bg-black/80 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold font-heading">
                Ayoria
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Crafted For Your Crown
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                Luxury beauty experiences tailored exclusively for queens.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}