"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  glareEffect?: boolean;
  rotationIntensity?: number; // 0-30 degrees
  hoverScale?: number; // 1-1.1 recommended
  perspective?: number; // 500-1500 recommended
}

export default function ThreeDCard({
  children,
  className,
  glareEffect = true,
  rotationIntensity = 15,
  hoverScale = 1.05,
  perspective = 1000,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation values
    const rotateY = ((x - width / 2) / width) * rotationIntensity;
    const rotateX = -((y - height / 2) / height) * rotationIntensity;

    // Update state
    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX(x / width);
    setMouseY(y / height);
  };

  const handleMouseLeave = () => {
    // Reset all rotations when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        perspective: `${perspective}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
        className="w-full h-full"
      >
        {children}

        {/* Glare effect */}
        {glareEffect && (
          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/50 opacity-0"
            style={{
              opacity: Math.max(rotateX, rotateY) / (rotationIntensity * 2),
              background: `radial-gradient(circle at ${mouseX * 100}% ${
                mouseY * 100
              }%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}