"use client";

import {
  Mail,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Instagram from "./icons/instagram";
import Facebook from "./icons/facebook";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* background glow */}

      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        {/* heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Craft Your Crown
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Ready for your next beauty transformation?
            Reach out and let&apos;s create something beautiful.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Contact Details */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-yellow-500/10 bg-zinc-950 p-8">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-8">
                <ContactItem
                  icon={<Phone />}
                  title="Phone"
                  value="+234 XXX XXX XXXX"
                />

                <ContactItem
                  icon={<Mail />}
                  title="Email"
                  value="hello@ayoria.com"
                />

                <ContactItem
                  icon={<MapPin />}
                  title="Location"
                  value="Lagos, Nigeria"
                />

                <ContactItem
                  icon={<Clock3 />}
                  title="Opening Hours"
                  value="Mon - Sat: 9:00AM - 7:00PM"
                />
              </div>

              {/* socials */}

              <div className="mt-10 flex gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-yellow-500/20"
                >
                  <Instagram />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="border-yellow-500/20"
                >
                  <Facebook />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-yellow-500/10 bg-zinc-950 p-8"
          >
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Send Us A Message
            </h3>

            <form className="space-y-6">
              <Input
                placeholder="Full Name"
                className="h-14 border-yellow-500/10"
              />

              <Input
                placeholder="Email Address"
                className="h-14 border-yellow-500/10"
              />

              <Input
                placeholder="Phone Number"
                className="h-14 border-yellow-500/10"
              />

              <Input
                placeholder="Service Interested In"
                className="h-14 border-yellow-500/10"
              />

              <Textarea
                placeholder="Tell us about your beauty goals..."
                className="min-h-[180px] border-yellow-500/10"
              />

              <Button
                className="h-14 w-full bg-yellow-500 text-black hover:bg-brand-gold"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function ContactItem({
  icon,
  title,
  value,
}: ContactItemProps) {
  return (
    <div className="flex gap-5">
      <div className="rounded-2xl bg-yellow-500/10 p-4 text-brand-gold">
        {icon}
      </div>

      <div>
        <h4 className="font-medium text-white">
          {title}
        </h4>

        <p className="mt-1 text-zinc-400">
          {value}
        </p>
      </div>
    </div>
  );
}