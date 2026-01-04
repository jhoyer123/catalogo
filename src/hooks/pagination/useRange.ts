import { useState, useEffect } from "react";

export const useRange = (): number => {
  const [range, setRange] = useState(getItemRange());

  useEffect(() => {
    const handleResize = () => setRange(getItemRange());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return range;
};

export const getItemRange = (): number => {
  const width = window.innerWidth;
  if (width <= 400) return 1;
  if (width <= 425) return 2;
  if (width <= 770) return 3;
  return 4;
};
