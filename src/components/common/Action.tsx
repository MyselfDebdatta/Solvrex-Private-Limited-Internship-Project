import { cva, type VariantProps } from "class-variance-authority";
import { createLink } from "@tanstack/react-router";
import { forwardRef, type ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Single source of truth for action styling. Buttons and links share it so a
 * navigation action and a form action never drift apart visually.
 */
export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 rounded-sm",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-deep shadow-none",
        accent: "bg-accent text-accent-foreground hover:bg-accent-deep",
        outline: "border border-primary/30 text-primary hover:border-primary hover:bg-primary/5",
        inverse:
          "border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/12",
        solidInverse: "bg-primary-foreground text-primary hover:bg-secondary",
        ghost: "text-primary hover:bg-primary/6",
        quiet: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4 text-[0.8125rem]",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-13 px-7 text-[0.9375rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionVariants = VariantProps<typeof actionVariants>;

const StyledAnchor = forwardRef<HTMLAnchorElement, ComponentProps<"a"> & ActionVariants>(
  ({ className, variant, size, ...props }, ref) => (
    <a ref={ref} className={cn(actionVariants({ variant, size }), className)} {...props} />
  ),
);
StyledAnchor.displayName = "StyledAnchor";

/** Type-safe router link that carries the shared action styling. */
export const ActionLink = createLink(StyledAnchor);

export function ActionButton({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ComponentProps<"button"> & ActionVariants) {
  return (
    <button type={type} className={cn(actionVariants({ variant, size }), className)} {...props} />
  );
}

export function ActionAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & ActionVariants) {
  return <a className={cn(actionVariants({ variant, size }), className)} {...props} />;
}
