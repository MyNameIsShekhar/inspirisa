import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define badge variants with custom colors
const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-3.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      default:
        "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
      secondary:
        "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
      destructive:
        "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
      outline: "text-foreground",
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const customBadgeVariants = {
  active: "bg-black text-white border-transparent",
  outline: "border-gray-400 text-black border",
};

// Badge component
function Badge({ className, variant, ...props }) {
  const customStyle = customBadgeVariants[variant] || "";
  return (
    <div className={cn(badgeVariants({ variant }), customStyle, className)} {...props} />
  );
}

// Exporting Badge components with custom styles
export function BadgeSecondary({ children }) {
  return <Badge variant="active">{children}</Badge>;
}

export function BadgeOutline({ children }) {
  return <Badge variant="outline">{children}</Badge>;
}

export { Badge, badgeVariants };
