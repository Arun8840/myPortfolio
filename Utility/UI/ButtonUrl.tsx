"use client"

import React, { CSSProperties, AnchorHTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"
import Link from "next/link"

interface ButtonUrlProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string // Ensure href is required for the Link component
  label?: string | null
  variant?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | null
  className?: string
  icon?: {
    color: string
    value: React.ReactNode
  }
}

function ButtonUrl({
  href,
  label,
  size = "medium",
  variant = "default",
  className,
  icon,
  children,
  ...otherProps
}: ButtonUrlProps) {
  // Safely access button theme values from theme.json
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#95a5a6",
  }

  const variantValue = buttonTheme[variant ?? "default"]

  const baseClass = cn(
    `flex items-center gap-3 font-poppins_normal font-medium bg-[var(--variant)] hover:bg-[var(--effect)] tracking-wide text-white p-3 rounded-full transition-all duration-150`,
    className
  )

  return (
    <Link
      href={href} // Ensure the href prop is passed to the Link component
      {...otherProps}
      style={
        {
          "--variant": variantValue,
          "--effect": `${variantValue}95`,
        } as CSSProperties
      }
      className={baseClass}
    >
      {icon && (
        <span
          style={{ color: icon.color }}
          className="inline-flex items-center my-auto"
        >
          {icon.value}
        </span>
      )}
      {label ? <h1 className="text-center">{label}</h1> : children}
    </Link>
  )
}

export default ButtonUrl
