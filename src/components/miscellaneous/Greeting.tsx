"use client";

import { useEffect, useState } from "react";

const getGreeting = (): string => {
  const hrs = new Date().getHours();
  if (hrs >= 4 && hrs < 12) return "Good morning";
  if (hrs >= 12 && hrs < 17) return "Good afternoon";
  return "Good evening";
};

const Greeting = () => {
  // Start with neutral greeting for perfect SSR hydration match
  const [greeting, setGreeting] = useState<string>("Good day");

  useEffect(() => {
    // Immediately updates to the user's local browser time upon mounting
    setGreeting(getGreeting());
  }, []);

  return <>{greeting}</>;
};

export default Greeting;
