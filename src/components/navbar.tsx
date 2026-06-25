"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import MobileNav from "./mobile-nav";
import { LogoText, LogoSvg, LogoIcon } from "./logo";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-yellow-500/10 bg-black/60 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/">
          <div className="flex xflex-col">
            {/* <span className="text-3xl font-serif tracking-[0.25em] text-brand-gold">
              AYORIA
            </span> */}
            {/* <LogoText/> */}
            <LogoIcon className="text-brand-gold" size={70}/>
            <div className="-ml-2 flex flex-col items-center justify-center">
<h3 className="text-brand-gold text-4xl font-heading">AYORIA</h3>
<Separator className="bg-brand-gold"/>
            <span className="text-[10px] uppercase tracking-wide text-yellow-100">
              Crafted For Your Crown
            </span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-zinc-300 transition hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="rounded-full bg-yellow-500 px-8 text-black hover:bg-brand-gold">
            Book Now
          </Button>
        </div>

        <MobileNav />
      </div>
    </motion.header>
  );
}