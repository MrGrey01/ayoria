"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ada E.",
    review:
      "The best beauty experience I've ever had. My nails and lashes were flawless.",
  },
  {
    name: "Chioma O.",
    review:
      "Ayoria transformed my locs beautifully. Luxury service from start to finish.",
  },
  {
    name: "Jessica A.",
    review:
      "Exceptional customer service and an amazing atmosphere. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Loved By Queens
          </h2>
        </div>

        <Carousel 
         plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        className="mx-auto mt-20 max-w-4xl">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <div className="rounded-[2rem] border border-yellow-500/10 bg-zinc-950 p-12 text-center">
                  <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  <p className="text-xl italic text-zinc-300">
                    &quot;{testimonial.review}&quot;
                  </p>

                  <h4 className="mt-8 text-lg font-semibold text-brand-gold">
                    {testimonial.name}
                  </h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}