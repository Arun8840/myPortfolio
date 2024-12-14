import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
import { useTabContext } from "./TabContainer"
interface TabListProps
  extends HTMLAttributes<HTMLLIElement | HTMLButtonElement> {
  children: React.ReactNode
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}
function TabTrigger({
  children,
  value,
  className,
  icon,
  disabled,
  ...otherProps
}: TabListProps) {
  const { currentTab, setCurrentTab } = useTabContext()
  const handle_tabChange = (selectedTab: string) => {
    setCurrentTab(selectedTab)
  }

  const isActive = currentTab === value

  const defaultClass = `${
    isActive && "bg-[var(--active-color)]"
  } text-white w-full flex items-center gap-2 justify-center font-medium text-center rounded p-1 cursor-pointer ${
    disabled && "opacity-30 cursor-not-allowed"
  }`
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
