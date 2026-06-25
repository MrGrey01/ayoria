"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      z-[999]
      hidden
      h-8
      w-8
      rounded-full
      border
      border-brand-gold
      lg:block
      "
      style={{
        transform: `translate(${position.x - 16}px,${
          position.y - 16
        }px)`,
      }}
    />
  );
}