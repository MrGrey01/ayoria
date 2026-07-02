"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    value: "500+",
    label: "Happy Clients",
  },
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "1000+",
    label: "Beauty Transformations",
  },
  {
    value: "5★",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="relative border-y border-brand-gold/10 bg-zinc-950 py-16">
       <Image 
            src="/brand/studio.png" 
            alt="studio blurred parallax background" 
            fill
            // width={500} height={500} 
            className="absolute object-cover right-0 top-0 w-full opacity-90" />
            <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-brand-gold/10 bg-black/40 p-8 text-center backdrop-blur-sm"
            >
              <h3 className="text-5xl font-bold text-brand-gold">
                {stat.value}
              </h3>

              <p className="mt-4 text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}