"use client"

import React, { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"

interface SwitchProps
  extends HTMLAttributes<HTMLLabelElement | HTMLInputElement> {
  label?: string | null
  variant?: "primary" | "secondary" | "default" | null
  size?: "small" | "medium" | "large" | null
  className?: string
  icon?: {
    color?: string
    value: React.ReactNode
  }
  disabled?: boolean
}

function Switch({
  label,
  size = "medium",
  variant = "default",
  className,
  icon,
  children,
  disabled,
  defaultChecked,
  ...otherProps
}: SwitchProps) {
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#95a5a6",
  }

  const variantValue = buttonTheme[variant ?? "default"]
  const isSecondary = ["secondary"]?.includes(variant ?? "")
  const baseClass = cn(
    `flex items-center gap-3 font-poppins_normal font-medium bg-[var(--variant)] hover:bg-[var(--effect)] tracking-wide text-white p-1 rounded-full transition-all duration-150 min-w-14 ${
      disabled && "opacity-30 cursor-not-allowed"
    }`,
    className
  )
  const randomId = Math.random()

  return (
    <label
      htmlFor={`${randomId}`}
      {...otherProps}
      style={
        {
          "--variant": variantValue,
          "--effect": `${variantValue}98`,
          "--primay-pointer-color": theme?.primary,
        } as CSSProperties
      }
      className={baseClass}
    >
      <input
        disabled={disabled ?? false}
        type="checkbox"
        name="pointer"
        id={`${randomId}`}
        defaultChecked={defaultChecked ?? false}
        className="hidden peer"
      />
      {/*//todo pointer  */}
      <div
        className={`bg-white ${
          isSecondary && "peer-checked:bg-[var(--primay-pointer-color)]"
        } size-6 grid place-items-center rounded-full peer-checked:translate-x-6 transition-all duration-150`}
      >
        {icon && <span style={{ color: icon.color }}>{icon.value}</span>}
      </div>
    </label>
  )
}

export default Switch
