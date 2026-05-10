"use client";
/**
 * components/ui/Button.tsx
 * shadcn-style button with cva variants. Uses our brand tokens.
 */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const button = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-medium tracking-[-0.005em]",
    "rounded-sm transition duration-micro ease-smooth",
    "focus-visible:shadow-focus disabled:opacity-40 disabled:pointer-events-none",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white shadow-glow-cta",
          "bg-grad-brand bg-[length:140%_140%] bg-[position:0%_50%]",
          "hover:brightness-[1.08]",
        ],
        secondary: [
          "bg-surface-3 text-text-primary border border-border shadow-inset-top",
          "hover:border-border-strong",
        ],
        ghost: [
          "bg-transparent text-text-secondary",
          "hover:text-text-primary hover:bg-surface-2",
        ],
        outline: [
          "bg-transparent text-text-primary border border-border-strong",
          "hover:bg-surface-2",
        ],
        danger: [
          "bg-danger text-white shadow-1",
          "hover:brightness-[1.08]",
        ],
      },
      size: {
        sm:   "h-8 px-3 text-[13px]",
        md:   "h-10 px-4 text-[14px]",
        lg:   "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, asChild, loading, iconLeft, iconRight, children, disabled, ...rest },
    ref
  ) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(button({ variant, size }), className)}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        {...rest}
      >
        {loading ? <Spinner /> : iconLeft}
        <span>{children}</span>
        {!loading && iconRight}
      </Comp>
    );
  }
);

function Spinner() {
  return (
    <span className="inline-block h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden />
  );
}
