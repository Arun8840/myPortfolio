import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
import { useDropdownContext } from "./DropDownContainer"

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  icon?: React.ReactNode
}

function DropDownItem({
  children,
  icon,
  className,
  onClick,
  ...otherProps
}: ItemProps) {
  const { setOpenOptions } = useDropdownContext()
  const baseClass =
    "text-white flex items-center gap-2 hover:bg-[var(--variant)] transition-colors duration-150 px-2 py-1.5 rounded cursor-pointer capitalize tracking-wide"

  return (
    <li
      onClick={(e) => {
        setOpenOptions(false)
        if (onClick) onClick(e)
      }}
      {...otherProps}
      className={cn(baseClass, className)}
    >
      {icon && icon}
      <div className="flex-1">{children}</div>
    </li>
  )
}

DropDownItem.displayName = "DropDownItem"
export default DropDownItem
