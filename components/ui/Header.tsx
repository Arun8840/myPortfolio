import { cn } from "@/Utility/cn"
import React, { forwardRef, HTMLAttributes } from "react"

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

// Forward the ref properly
export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ children, className, ...otherProps }, ref) => {
    const baseClass =
      "text-4xl font-poppins-normal font-semibold text-neutral-800"

    return (
      <h1 ref={ref} {...otherProps} className={cn(baseClass, className)}>
        {children}
      </h1>
    )
  }
)

// Display name for better debugging
Header.displayName = "Header"
