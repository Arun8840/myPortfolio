import React, { ButtonHTMLAttributes, CSSProperties } from "react"
import theme from "../../theme.json"
import { cn } from "@/Utility/cn"
import { useSheetContext } from "./SheetContainer"
interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "default" | null
}

function SheetTrigger({
  children,
  className,
  disabled,
  variant = "default",
  ...otherProps
}: TriggerProps) {
  // Safely access button theme values from theme.json
  const { sheetOpen, setSheetopen } = useSheetContext()
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#95a5a6",
  }

  const variant_value = buttonTheme[variant ?? "default"]

  const baseClass = [
    "flex items-center gap-3 p-2 font-poppins_normal font-medium text-white rounded-lg bg-[var(--variant)] hover:bg-[var(--effect)] transition-all duration-150",
    disabled && "opacity-30 cursor-not-allowed",
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <button
      style={
        {
          "--variant": variant_value,
          "--effect": `${variant_value}95`,
          "--primay-text-color": theme?.primary,
        } as CSSProperties
      }
      className={cn(baseClass, className)}
      onClick={() => setSheetopen(!sheetOpen)}
      {...otherProps}
    >
      {children}
    </button>
  )
}

SheetTrigger.displayName = "SheetTrigger"
export default SheetTrigger
