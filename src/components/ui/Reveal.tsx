"use client";

import { useInView } from "@/hooks/useInView";
import { CSSProperties, ElementType, ReactNode } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in"
  | "slide-up";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;          // ms
  duration?: number;       // ms
  className?: string;
  threshold?: number;
  as?: ElementType;
}

const INITIAL: Record<Variant, CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(40px)" },
  "fade-down":  { opacity: 0, transform: "translateY(-40px)" },
  "fade-left":  { opacity: 0, transform: "translateX(40px)" },
  "fade-right": { opacity: 0, transform: "translateX(-40px)" },
  "fade-in":    { opacity: 0 },
  "zoom-in":    { opacity: 0, transform: "scale(0.92)" },
  "slide-up":   { opacity: 0, transform: "translateY(60px)" },
};

const VISIBLE: CSSProperties = {
  opacity: 1,
  transform: "none",
};

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.12,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView({ threshold });

  const style: CSSProperties = {
    ...(inView ? VISIBLE : INITIAL[variant]),
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                 transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
