/**
 * components/ui/Card.tsx
 * Surface primitive — RSC-safe. Compose with CardHeader/Body/Footer.
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const card = cva(
  "relative bg-surface-2 border border-border rounded-md shadow-inset-top",
  {
    variants: {
      elevation: {
        "0": "bg-surface-1",
        "1": "bg-surface-2",
        "2": "bg-surface-2 shadow-2 shadow-inset-top",
        "3": "bg-surface-3 shadow-pop shadow-inset-top",
      },
      tone: {
        default: "",
        violet: "before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-grad-brand before:opacity-30 before:-z-10",
        cyan:    "ring-1 ring-cyan/20",
        success: "ring-1 ring-success/20",
        danger:  "ring-1 ring-danger/30",
      },
      interactive: {
        true:  "transition-colors duration-micro ease-smooth hover:border-border-strong cursor-pointer",
        false: "",
      },
    },
    defaultVariants: { elevation: "1", tone: "default", interactive: false },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, elevation, tone, interactive, ...rest },
  ref
) {
  return <div ref={ref} className={cn(card({ elevation, tone, interactive }), className)} {...rest} />;
});

export const CardHeader = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pb-3 flex items-center justify-between gap-4", className)} {...rest} />
);
export const CardBody = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-3", className)} {...rest} />
);
export const CardFooter = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-4 border-t border-border flex items-center gap-3", className)} {...rest} />
);

export const Eyebrow = ({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn("text-micro uppercase tracking-[0.16em] text-text-secondary font-medium", className)}
    {...rest}
  />
);
