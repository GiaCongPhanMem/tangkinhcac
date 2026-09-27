import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/40 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--gold)] text-[var(--bg-base)] hover:bg-[var(--gold-light)] active:scale-[0.98] font-semibold",
        secondary:
          "bg-[var(--bg-3)] border border-[var(--bg-4)] text-[var(--text-dim)] hover:text-[var(--text-primary)] hover:border-[var(--gold-dim)]",
        outline:
          "border border-[var(--bg-4)] text-[var(--text-dim)] hover:border-[var(--gold-dim)] hover:text-[var(--text-primary)]",
        ghost:
          "text-[var(--text-mute)] hover:text-[var(--text-dim)] hover:bg-[var(--bg-3)]",
        gold:
          "bg-[var(--gold-subtle)] border border-[rgba(184,154,94,0.2)] text-[var(--gold-light)] hover:bg-[rgba(184,154,94,0.18)]",
        destructive:
          "bg-[var(--burgundy)] text-[var(--text-primary)] hover:bg-[var(--burgundy-l)]",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-5 text-sm rounded-xl",
        lg: "h-12 px-8 text-[15px] rounded-2xl",
        xl: "h-14 px-10 text-base rounded-full",
        icon: "h-9 w-9 rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
