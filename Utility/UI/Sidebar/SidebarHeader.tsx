import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
import { useSidebarContext } from "./SidebarContainer"

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | null
  icon?: React.ReactNode | null
}
function SidebarHeader({
  children,
  icon,
  className,
  ...otherProps
}: HeaderProps) {
  const baseClass = "text-white p-3 flex items-center gap-2"
  const { isOpen } = useSidebarContext()
  return (
    <div className={cn(baseClass, className)} {...otherProps}>
      {icon && icon}
      {!isOpen ? children ?? "Header" : null}
    </div>
  )
}

SidebarHeader.displayName = "SidebarHeader"
export default SidebarHeader
