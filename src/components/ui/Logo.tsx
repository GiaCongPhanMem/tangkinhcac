import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg";
}

const SIZE = {
  sm: { fontSize: 15, gap: 8 },
  md: { fontSize: 19, gap: 10 },
  lg: { fontSize: 26, gap: 12 },
};

export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const s = SIZE[size];

  return (
    <div
      className={cn("flex items-center select-none", className)}
      style={{ gap: s.gap }}
      aria-label="Tàng Kinh Các"
    >
      {/* ── Wordmark ── */}
      <span
        className="font-serif font-bold leading-none tracking-tight"
        style={{
          fontSize: s.fontSize,
          background: "linear-gradient(135deg, #d4a84b 0%, #f0c96a 45%, #b8882e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Tàng Kinh Các
      </span>
    </div>
  );
}
