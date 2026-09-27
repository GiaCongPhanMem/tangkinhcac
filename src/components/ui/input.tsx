import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconLeft, iconRight, ...props }, ref) => {
    if (iconLeft || iconRight) {
      return (
        <div className="relative flex items-center">
          {iconLeft && (
            <span className="absolute left-3 text-ivory-mute pointer-events-none flex-shrink-0">
              {iconLeft}
            </span>
          )}
          <input
            ref={ref}
            className={cn(
              "flex w-full bg-charcoal-3 border border-charcoal-4 text-ivory placeholder:text-ivory-mute rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-gold-dim focus:ring-2 focus:ring-gold/8 disabled:opacity-50",
              iconLeft && "pl-10",
              iconRight && "pr-10",
              className
            )}
            {...props}
          />
          {iconRight && (
            <span className="absolute right-3 text-ivory-mute pointer-events-none flex-shrink-0">
              {iconRight}
            </span>
          )}
        </div>
      );
    }
    return (
      <input
        ref={ref}
        className={cn(
          "flex w-full bg-charcoal-3 border border-charcoal-4 text-ivory placeholder:text-ivory-mute rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-gold-dim focus:ring-2 focus:ring-gold/8 disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
