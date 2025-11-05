import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import buttonVariants from "./buttonVariants"
import type { ButtonVariantProps } from "./buttonVariants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

// Backwards-compat: some consumers import `buttonVariants` directly from
// `components/ui/button`. We now keep the canonical definition in
// `components/ui/buttonVariants.tsx` but re-export it here to avoid breaking
// downstream imports. Prefer importing from './buttonVariants' in new code.
export { buttonVariants } from "./buttonVariants"
