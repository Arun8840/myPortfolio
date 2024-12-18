"use client"

import React, { CSSProperties, ButtonHTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | null
  variant?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | null
  className?: string
  icon?: {
    color?: string
    value: React.ReactNode
  }
}

function Button({
  label,
  size = "medium",
  variant = "default",
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

  const variant_value = buttonTheme[variant ?? "default"]

  const isSecondary = ["secondary"]?.includes(variant ?? "")
  const baseClass = `flex items-center gap-3 font-poppins_normal font-medium tracking-wide text-white p-3 rounded-full bg-[var(--variant)] ${
    isSecondary && "text-[var(--primay-text-color)]"
  } ${
    disabled && "opacity-30 cursor-not-allowed"
  } hover:bg-[var(--effect)] transition-all duration-150`
  return (
    <button
      {...otherProps}
      style={
        {
          "--variant": variant_value,
          "--effect": `${variant_value}95`,
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
