"use client"
import React, {
  createContext,
  CSSProperties,
  HTMLAttributes,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import theme from "../../theme.json"
import { cn } from "@/Utility/cn"

interface Dropdown_containerProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "default"
}

interface DropdownContextProps {
  isOpenOption: boolean
  setOpenOptions: Dispatch<SetStateAction<boolean>>
}

const DropdownContext = createContext<DropdownContextProps | null>(null)

function DropDownContainer({
  children,
  variant = "default",
  className,
  ...otherProps
}: Dropdown_containerProp) {
  const [isOpenOption, setOpenOptions] = useState(false)
  const buttonTheme: Record<string, string> = theme?.button_theme || {
    primary: "#3498db",
    secondary: "#2ecc71",
    default: "#09090b",
  }
  const variant_value = buttonTheme[variant ?? "default"]
  const styleVaribles = {
    "--variant": variant_value,
    "--effect": `${variant_value}95`,
    "--primay-text-color": theme?.primary,
  }

  const baseClass = "relative size-fit"
  return (
    <DropdownContext.Provider value={{ isOpenOption, setOpenOptions }}>
      <div
        className={cn(baseClass, className)}
        style={styleVaribles as CSSProperties}
        {...otherProps}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// todo context
export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a dropdown container"
    )
  }
  return context
}
export default DropDownContainer
