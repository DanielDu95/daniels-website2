"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollRevealSection({
  children,
  delay = 0,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prevY = useRef(0);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.top;

          if (entry.isIntersecting) {
            setVisible(true);

            // Determine if entering from top or bottom
            if (currentY < prevY.current) {
              setDirection("down");
            } else if (currentY > prevY.current) {
              setDirection("up");
            }
          } else {
            setVisible(false);
          }

          prevY.current = currentY;
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateY(0)"
      : direction === "down"
      ? "translateY(60px)"
      : "translateY(-60px)",
    transitionProperty: "opacity, transform",
    transitionDuration: "0.6s, 0.6s",
    transitionTimingFunction: "ease, ease",
    transitionDelay: `${delay}s, ${delay}s`,
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
