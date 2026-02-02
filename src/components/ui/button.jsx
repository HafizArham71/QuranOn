import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl hover:-translate-y-0.5",
        primary:
          "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg hover:from-teal-600 hover:to-cyan-700 hover:shadow-xl hover:-translate-y-0.5",
        secondary:
          "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl hover:-translate-y-0.5",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:from-red-600 hover:to-pink-700 hover:shadow-xl hover:-translate-y-0.5",
        outline:
          "border-2 border-teal-600 text-teal-600 bg-white shadow-md hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 hover:shadow-lg hover:-translate-y-0.5",
        outlineLight:
          "border-2 border-white text-white bg-transparent shadow-md hover:bg-white hover:text-teal-600 hover:shadow-lg hover:-translate-y-0.5",
        outlineDark:
          "border-2 border-gray-700 text-gray-700 bg-white/90 shadow-md hover:bg-gray-700 hover:text-white hover:shadow-lg hover:-translate-y-0.5",
        ghost:
          "text-teal-600 hover:bg-teal-50 hover:text-teal-700",
        ghostLight:
          "text-white hover:bg-white/20 hover:text-white",
        ghostDark:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        link: "text-teal-600 underline-offset-4 hover:underline hover:text-teal-700",
        linkLight: "text-white underline-offset-4 hover:underline hover:text-white/80",
        linkDark: "text-gray-700 underline-offset-4 hover:underline hover:text-gray-900",
        success:
          "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl hover:-translate-y-0.5",
        warning:
          "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg hover:from-yellow-600 hover:to-orange-700 hover:shadow-xl hover:-translate-y-0.5",
        info:
          "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8",
        iconLg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
