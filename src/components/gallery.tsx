"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

// const images = [
//   "/gallery/1.jpg",
//   "/gallery/2.jpg",
//   "/gallery/3.jpg",
//   "/gallery/4.jpg",
//   "/gallery/5.jpg",
//   "/gallery/6.jpg",
// ];


const images = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-zinc-950 py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-brand-gold">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Beauty In Every Detail
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Explore transformations crafted for queens.
          </p>
        </div>

        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full rounded-[2rem] object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



export const Gallery2 =()=> {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-brand-gold uppercase tracking-[0.4em]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Beauty In Every Detail
          </h2>
        </div>

        <div className="mt-20 columns-1 md:columns-2 lg:columns-3 gap-6">
          {images.map((src, i) => (
            <div
              key={src}
              className="mb-6 cursor-pointer overflow-hidden rounded-[2rem]"
              onClick={() => setIndex(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full rounded-[2rem] transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />
      </div>
    </section>
  );
}