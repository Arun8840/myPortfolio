"use client"

import React, { CSSProperties, AnchorHTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"
import Link from "next/link"

interface ButtonUrlProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string // Ensure href is required for the Link component
  label?: string | null
  variant?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | undefined
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
  variant = "primary",
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

  const buttonSize = {
    small: "text-sm p-2 size-fit",
    medium: "p-2.5 size-fit",
    large: "p-4",
  }
  const currectSize = buttonSize[size]
  const variant_value = buttonTheme[variant ?? "default"]

  const isSecondary = ["secondary"]?.includes(variant ?? "")
  const baseClass = [
    currectSize,
    "flex items-center gap-3 font-poppins-normal font-medium tracking-wide rounded-lg bg-[var(--variant)] hover:bg-[var(--effect)] transition-all duration-150",
    isSecondary && "text-[var(--primay-text-color)]",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Link
      href={href} // Ensure the href prop is passed to the Link component
      {...otherProps}
      style={
        {
          "--variant": variant_value,
          "--effect": `${variant_value}95`,
        } as CSSProperties
      }
      className={cn(baseClass, className)}
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
