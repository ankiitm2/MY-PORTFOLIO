"use client";
import React, { useRef, useEffect } from "react";

const CustomCursor = () => {
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const cursorFollowerDotRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      // Smoother animation with smaller divisor
      followerPosition.current.x +=
        (mousePosition.current.x - followerPosition.current.x) / 8;
      followerPosition.current.y +=
        (mousePosition.current.y - followerPosition.current.y) / 8;

      dotPosition.current.x +=
        (mousePosition.current.x - dotPosition.current.x) / 6;
      dotPosition.current.y +=
        (mousePosition.current.y - dotPosition.current.y) / 6;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate(${
          followerPosition.current.x - 20
        }px, ${followerPosition.current.y - 20}px)`;
      }

      if (cursorFollowerDotRef.current) {
        cursorFollowerDotRef.current.style.transform = `translate(${
          dotPosition.current.x - 4
        }px, ${dotPosition.current.y - 4}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorFollowerRef}
        className="mouseCursor fixed w-10 h-10 border-2 mix-blend-difference border-black rounded-full pointer-events-none z-50"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={cursorFollowerDotRef}
        className="cursorDot fixed w-2 h-2 bg-black mix-blend-difference rounded-full pointer-events-none z-50"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
};

export default CustomCursor;
