"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 0-1, controls the parallax effect intensity
  direction?: "up" | "down" | "left" | "right";
  speed?: number; // 0-1, controls the speed of the parallax effect
}

export default function ParallaxSection({
  children,
  className,
  intensity = 0.2,
  direction = "up",
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Update measurements on resize
  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element) {
        setElementTop(element.offsetTop);
        setClientHeight(window.innerHeight);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Calculate transform based on direction
  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${intensity * 100}%`, `-${intensity * 100}%`]
        );
      case "down":
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`-${intensity * 100}%`, `${intensity * 100}%`]
        );
      case "left":
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${intensity * 100}%`, `-${intensity * 100}%`]
        );
      case "right":
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`-${intensity * 100}%`, `${intensity * 100}%`]
        );
      default:
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${intensity * 100}%`, `-${intensity * 100}%`]
        );
    }
  };

  const yValue = direction === "up" || direction === "down" ? getTransformValue() : 0;
  const xValue = direction === "left" || direction === "right" ? getTransformValue() : 0;

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        style={{
          y: yValue,
          x: xValue,
          transition: `transform ${speed}s cubic-bezier(0.17, 0.67, 0.83, 0.67)`,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}