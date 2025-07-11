"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const ballRef = useRef<HTMLDivElement>(null);

  const size = 400;
  const radius = size / 2;

  const pos = useRef({ x: -radius, y: 100 });
  const directionX = useRef(1); // 1 = right, -1 = left
  const velocityX = useRef(0);
  const shouldMove = useRef(false); // control horizontal move

  const vw = useRef(0);
  const vh = useRef(0);
  const lastScrollY = useRef(0);
  const targetY = useRef(100);

  const SPEED = 3;

  useEffect(() => {
    vw.current = window.innerWidth;
    vh.current = window.innerHeight;
    lastScrollY.current = window.scrollY;

    function handleResize() {
      vw.current = window.innerWidth;
      vh.current = window.innerHeight;
    }

    function handleScroll() {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Update vertical target
      targetY.current += deltaY;
      targetY.current = Math.min(
        Math.max(targetY.current, 0),
        vh.current - size
      );

      // Trigger one move to opposite edge
      if (!shouldMove.current) {
        shouldMove.current = true;
        velocityX.current = SPEED * directionX.current;
      }
    }

    function animate() {
      const el = ballRef.current;
      if (!el) return;

      const leftLimit = -radius;
      const rightLimit = vw.current - radius;

      // Move horizontally if allowed
      if (shouldMove.current) {
        pos.current.x += velocityX.current;

        // Hit left edge
        if (pos.current.x <= leftLimit) {
          pos.current.x = leftLimit;
          velocityX.current = 0;
          directionX.current = 1; // Next time go right
          shouldMove.current = false;
        }

        // Hit right edge
        if (pos.current.x >= rightLimit) {
          pos.current.x = rightLimit;
          velocityX.current = 0;
          directionX.current = -1; // Next time go left
          shouldMove.current = false;
        }
      }

      // Vertical smooth follow
      pos.current.y += (targetY.current - pos.current.y) * 0.05;

      // Apply position
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className="fixed w-[500px] h-[500px] rounded-full bg-white blur-xl pointer-events-none z-[-1]"
      style={{ left: 0, top: 0 }}
    />
  );
}
