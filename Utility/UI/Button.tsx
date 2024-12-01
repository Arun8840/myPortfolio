"use client"

import React, { CSSProperties, ButtonHTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | null
  varient?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | null
  className?: string
  icon?: {
    color: string
    value: React.ReactNode
  }
}

function Button({
  label,
  size = "medium",
  varient = "default",
  className,
  icon,
  children,
  ...otherProps
}: ButtonProps) {
  // Safely access button theme values from theme.json
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#95a5a6",
  }

  const varient_value = buttonTheme[varient ?? "default"]

  const baseClass = `flex items-center gap-3 font-poppins_normal font-medium tracking-wide text-white p-3 rounded-full transition-all duration-150`
  return (
    <button
      {...otherProps}
      style={
        {
          "--varient": varient_value,
          "--effect": `${varient_value}95`,
        } as CSSProperties
      }
      className={cn(
        `bg-[var(--varient)] hover:bg-[var(--effect)] ${baseClass}`,
        className
      )}
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
