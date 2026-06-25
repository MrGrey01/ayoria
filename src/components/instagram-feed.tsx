// import { Instagram } from "lucide-react";

import InstagramIcon from "./icons/instagram";

const posts = [
  "/instagram/1.jpg",
  "/instagram/2.jpg",
  "/instagram/3.jpg",
  "/instagram/4.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="uppercase tracking-[0.4em] text-brand-gold">
              Instagram
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Follow Our Journey
            </h2>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 text-brand-gold"
          >
            <InstagramIcon />
            @ayoria.studio
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {posts.map((post) => (
            <img
              key={post}
              src={post}
              className="aspect-square rounded-[2rem] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}