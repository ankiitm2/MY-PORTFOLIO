"use client";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Loading from "../components/Loading";
import Navbar from "@/components/Intro";
import Meteors from "@/components/Meteors";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Set flag to true after component mounts on the client
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Render nothing on the server; wait until client-side render to display anything
  if (!hasMounted) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-10">
      <div className="hidden sm:block">
        <Meteors />
      </div>
      <CustomCursor />
      <Navbar />
    </div>
  );
}
