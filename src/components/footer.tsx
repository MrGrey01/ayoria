import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Image from "next/image";
import { LogoText, LogoSvg, LogoIcon, NavLogo } from "./logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-brand-gold/10 py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            {/* <h2 className="text-3xl tracking-[0.25em] text-brand-gold">
              AYORIA
            </h2> */}
            <NavLogo className="text-brand-gold" size={70}/>
            {/* <Image
              src="/logo.png"
              alt="Ayoria Logo"
              width={100}
              height={100}
              className="mx-auto mt-4"
            /> */}

            <p className="mt-4 text-zinc-400">
              Crafted For Your Crown.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3 text-zinc-400">
              <Link href="#about">About</Link>
              <br />
              <Link href="#services">Services</Link>
              <br />
              <Link href="#gallery">Gallery</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-zinc-400">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +234 911 507 7354
              </p>

              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4 text-brand-gold">
              <Instagram size={25} /> 
              <Facebook size={25} />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-gold/10 pt-8 text-center text-zinc-500">
          © 2026 Ayoria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}