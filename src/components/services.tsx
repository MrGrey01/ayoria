"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-950 py-28"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl ">
            Luxury Services For Every Queen
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Discover premium beauty services delivered with precision,
            creativity, and luxury.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-yellow-500/10 bg-black p-8 transition-all duration-300 hover:-translate-y-3 hover:border-brand-gold"
              >
                <div className="inline-flex rounded-2xl bg-yellow-500/10 p-5">
                  <Icon className="h-8 w-8 text-brand-gold" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white font-heading">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                <button className="mt-8 text-brand-gold">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}