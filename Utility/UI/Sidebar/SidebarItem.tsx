import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
  value?: string | null
  icon?: React.ReactNode | null | undefined
}
function SidebarItem({
  children,
  value,
  className,
  icon,
  ...otherProps
}: ListItemProps) {
  const baseClass =
    "rounded p-1 flex items-center gap-2 cursor-pointer hover:bg-[var(--selected-color)] transition-colors duration-150"
  return (
    <li className={cn(baseClass, className)} {...otherProps}>
      {icon && <div className="bg-white/5 p-2 rounded">{icon}</div>}
      {value ? value : children}
    </li>
  )
}

SidebarItem.displayName = "SidebarItem"
export default SidebarItem
