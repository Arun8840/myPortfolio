import React, { CSSProperties, InputHTMLAttributes } from "react"
import theme from "../theme.json"
import { cn } from "../cn"

interface ChipPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  label: string | null | undefined
  variant?: "outlined" | "default"
  selectType?: "multiSelect" | "singleSelect" | "default"
  chipSize?: "small" | "medium" | "large" | undefined
}

const Chips: React.FC<ChipPropTypes> = ({
  label,
  className,
  selectType = "default",
  variant = "default",
  chipSize = "medium",
  ...otherChipProps
}) => {
  const { primary } = theme

  // Determine the input type based on selectType
  const typeMatcher = ["multiSelect", "default"]
  const typeValue = typeMatcher.includes(selectType) ? "checkbox" : "radio"

  // Define variants
  const Variants = {
    outlined:
      "border border-stone-500/50 peer-checked:border-[var(--primary-color)] peer-checked:bg-[var(--primary-outlined-checked)] peer-checked:text-[var(--primary-color)]",
    default: "bg-white peer-checked:bg-[var(--primary-color)]",
  }
  const VariantSize = {
    small: "text-sm p-2",
    medium: "p-2",
    large: "p-4",
  }

  // Define style variables
  const styleVariables = {
    "--primary-default-checked": primary,
    "--primary-outlined-checked": `${primary}30`,
    "--primary-color": primary,
  }

  // Base classes for the chip
  const defaultClass = [
    "rounded-full font-poppins-normal select-none px-4 py-2 text-white transition-colors duration-150",
    Variants[variant],
    VariantSize[chipSize],
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <label style={styleVariables as CSSProperties} htmlFor={label ?? "chips"}>
      <input
        {...otherChipProps}
        type={typeValue}
        className="peer hidden"
        id={label ?? "chips"}
      />
      <span className={cn(defaultClass, className)}>{label}</span>
    </label>
  )
}

export default Chips
