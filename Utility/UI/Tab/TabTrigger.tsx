import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
import { useTabContext } from "./TabContainer"
interface TabListProps
  extends HTMLAttributes<HTMLLIElement | HTMLButtonElement> {
  children: React.ReactNode
  value: string
  icon?: React.ReactNode
  disabled?: boolean
  type?: "default" | "outlined" | "filled" | undefined
}
function TabTrigger({
  children,
  value,
  className,
  icon,
  type,
  disabled,
  ...otherProps
}: TabListProps) {
  const { currentTab, setCurrentTab } = useTabContext()
  const handle_tabChange = (selectedTab: string) => {
    setCurrentTab(selectedTab)
  }
  const isActive = currentTab === value
  const styleTypes = {
    outlined: `border-b-4 p-2 ${
      isActive ? "border-[var(--active-color)]" : "border-transparent"
    }`,
    filled: `${isActive && "bg-[var(--active-color)]"} rounded-sm p-1`,
    default: `${isActive && "bg-[var(--active-color)]"} rounded-sm p-1`,
  }

  const currentType = styleTypes[type || "default"]

  const defaultClass = [
    currentType,
    "text-white w-full flex items-center gap-2 justify-center font-medium text-center cursor-pointer",
    disabled && "opacity-30 cursor-not-allowed",
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <li className="flex-1">
      <button
        disabled={disabled}
        onClick={() => handle_tabChange(value)}
        {...otherProps}
        className={cn(defaultClass, className)}
      >
        {icon && <span>{icon}</span>} {children}
      </button>
    </li>
  )
}
TabTrigger.displayName = "TabTrigger"
export default TabTrigger
