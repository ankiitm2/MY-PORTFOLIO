"use client";

import { useEffect } from "react";
import gsap from "gsap";

const Loading = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".preloader", {
      x: 50,
      y: 20,
      backgroundColor: "#e74c3c",
      duration: 0.5,
      ease: "power1.inOut",
    })
      .to(".preloader", {
        x: 100,
        y: -20,
        backgroundColor: "#3498db",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".preloader", {
        x: 150,
        y: 20,
        backgroundColor: "#2ecc71",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".preloader", {
        x: 200,
        y: -20,
        backgroundColor: "#f1c40f",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".preloader", {
        x: 250,
        y: 20,
        backgroundColor: "#9b59b6",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(".preloader", {
        x: 0,
        y: 0,
        backgroundColor: "#e74c3c",
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="preloader">
      <div className="red"></div>
      <div className="green"></div>
      <div className="red"></div>
    </div>
  );
};

export default Loading;
