"use client"

import React, { CSSProperties, ButtonHTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | null
  variant?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | undefined
  className?: string
  icon?: {
    color?: string
    value: React.ReactNode
  }
}

function Button({
  label,
  size = "medium",
  variant = "primary",
  className,
  icon,
  children,
  disabled,
  ...otherProps
}: ButtonProps) {
  // Safely access button theme values from theme.json
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#95a5a6",
  }
  const buttonSize = {
    small: "text-sm p-2 size-fit",
    medium: "p-2 size-fit",
    large: "p-4",
  }
  const currectSize = buttonSize[size]
  const variant_value = buttonTheme[variant ?? "default"]

  const baseClass = [
    currectSize,
    "flex items-center gap-3 font-poppins-normal font-semibold rounded-lg bg-[var(--variant)] hover:bg-[var(--effect)] transition-all duration-150",
    disabled && "opacity-30 cursor-not-allowed",
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <button
      {...otherProps}
      style={
        {
          "--variant": variant_value,
          "--effect": `${variant_value}`,
          "--primay-text-color": theme?.primary,
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
    </button>
  )
}

export default Button
