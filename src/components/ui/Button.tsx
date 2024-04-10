import { Button as KButton } from "@kobalte/core";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "solid-js";

import { cn } from "~/utils/cn";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground hover:border-foreground",
        outline:
          "border border-foreground bg-background hover:border-background",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ class: className, variant, size, ...rest }: ButtonProps) => {
  return (
    <KButton.Root
      class={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
};

export default Button;
