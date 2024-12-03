import { cn } from "@/Utility/cn"
import React, { CSSProperties, HTMLAttributes } from "react"
import theme from "../../theme.json"
interface MenuItemProp extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  showIcon?: {
    show?: boolean
    icon?: React.ReactNode
  }
}
function MenuItem({
  children,
  className,
  showIcon,
  ...otherProp
}: MenuItemProp) {
  const primary = theme?.primary
  const secondary = theme?.secondary
  const baseClass =
    "p-2 hover:bg-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-200 font-mono_normal font-medium cursor-pointer flex items-center gap-2"
  return (
    <li
      style={
        { "--primary": primary, "--secondary": secondary } as CSSProperties
      }
      {...otherProp}
      className={cn(baseClass, className)}
    >
      <span>{showIcon?.show && showIcon?.icon}</span>
      {children}
    </li>
  )
}
MenuItem.displayName = "MenuItem"
export { MenuItem }
