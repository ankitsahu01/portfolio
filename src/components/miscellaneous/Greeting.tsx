"use client";

import { useEffect, useState } from "react";

const getGreeting = () => {
  const hrs = new Date().getHours();
  if (hrs >= 4 && hrs < 12) return "Good morning";
  if (hrs >= 12 && hrs < 17) return "Good afternoon";
  return "Good evening";
};

const Greeting = () => {
  const [greeting, setGreeting] = useState<string>(getGreeting);

  useEffect(() => {
    // Recalculates dynamically based on the visitor's local browser timezone
    setGreeting(getGreeting());
  }, []);

  return <span suppressHydrationWarning>{greeting}</span>;
};

export default Greeting;
