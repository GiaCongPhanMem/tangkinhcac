import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal-4 text-ivory-dim border border-charcoal-5",
        gold: "bg-[rgba(184,154,94,0.12)] text-gold border border-[rgba(184,154,94,0.2)]",
        active:
          "bg-[rgba(74,222,128,0.1)] text-green-400 border border-[rgba(74,222,128,0.2)]",
        topic:
          "bg-charcoal-3 text-ivory-dim border border-charcoal-4 hover:border-gold-dim hover:text-ivory cursor-pointer",
        difficulty: "border",
      },
      size: {
        sm: "text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-md",
        md: "text-xs px-2.5 py-1 rounded-lg",
        lg: "text-sm px-3 py-1.5 rounded-xl",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
