"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: React.ElementType;
}

export function RevealWrapper({ children, className = "", delay, as: Tag = "div" }: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={cn("reveal", delay ? `reveal-delay-${delay}` : "", className)}
    >
      {children}
    </Comp>
  );
}
