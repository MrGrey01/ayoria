"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Premium Beauty Products",
  "Expert Beauty Artists",
  "Luxury Studio Experience",
  "Strict Hygiene Standards",
  "Personalized Beauty Care",
  "Relaxing Atmosphere",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-brand-gold/10 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image Collage */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/brand/braid.png"
              className="h-[450px] rounded-[2rem] object-cover"
            />

            <div className="space-y-4 pt-16">
              <img
                src="/brand/tatoo.png"
                className="h-[220px] rounded-[2rem] object-cover"
              />

              <img
                src="/brand/pedicure.png"
                className="h-[220px] rounded-[2rem] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
              About Ayoria
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Where Beauty
              <span className="text-brand-gold"> Meets Art.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
              At Ayoria, beauty is more than appearance—it&apos;s confidence,
              self-expression and luxury. Every queen deserves exceptional
              care, and we are committed to delivering premium beauty
              experiences tailored to your individuality.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Whether it&apos;s flawless nails, captivating lashes, elegant
              tattoos, rejuvenating pedicures, or professional loc care,
              every detail is crafted with precision and passion.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-full bg-brand-gold/10 p-2">
                    <Check className="h-4 w-4 text-brand-gold" />
                  </div>

                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}