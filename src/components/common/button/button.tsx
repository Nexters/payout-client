"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-h5 transition-colors disabled:pointer-disabled",
  {
    variants: {
      variant: {
        primary: "bg-main-700 text-white active:bg-main-400 disabled:bg-[#7692DA] disabled:text-opacity-40",
        secondary: "bg-main-50 font-semibold text-main-900 active:bg-main-100 ",
        tertiary: "bg-grey-100 text-grey-800 active:bg-grey-200 ",
      },
      size: {
        large: "p-4 h-[58px] w-[335px]",
        medium: "p-4 h-12 w-[335px]",
        fit: "p-4 h-12 w-fit",
        max: "h-[58px] w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
