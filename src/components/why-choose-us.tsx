"use client";

import {
  Crown,
  ShieldCheck,
  Gem,
  Sparkles,
  HeartHandshake,
  Award,
} from "lucide-react";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Only premium products and tools for flawless results.",
  },
  {
    icon: Award,
    title: "Expert Artists",
    text: "Experienced professionals passionate about beauty.",
  },
  {
    icon: Crown,
    title: "Luxury Experience",
    text: "Relax, unwind and enjoy a premium atmosphere.",
  },
  {
    icon: Sparkles,
    title: "Attention To Detail",
    text: "Every service is tailored specifically to you.",
  },
  {
    icon: Gem,
    title: "Elegant Results",
    text: "We create looks that inspire confidence and beauty.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Every queen receives exceptional and individualized care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/10 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            Why Choose Ayoria
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Experience Beauty Like Never Before
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Luxury isn&apos;t just what we offer—it&apos;s who we are.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-brand-gold/10 bg-zinc-950 p-8"
              >
                <div className="inline-flex rounded-full bg-brand-gold/10 p-4">
                  <Icon className="h-7 w-7 text-brand-gold" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white font-heading">
                  {reason.title}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}