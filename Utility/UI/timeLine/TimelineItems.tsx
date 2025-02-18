import { cn } from "@/Utility/cn"
import React, { CSSProperties, HTMLAttributes } from "react"
import theme from "../../theme.json"
interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  value?: string
  icon?: React.ReactNode
}

function TimelineItems({
  value,
  className,
  children,
  icon,
  ...otherProps
}: ItemProps) {
  const { primary, secondary } = theme

  const baseClass = `font-poppins_normal p-2 relative 
  before:absolute before:-left-[30px] before:size-5 
  before:bg-black before:rounded-full before:ring-2 
  before:ring-inset before:ring-stone-800 
  before:scale-75  hover:before:scale-100 before:hidden lg:before:block`
  return (
    <li
      {...otherProps}
      style={
        { "--primary": primary, "--secondary": secondary } as CSSProperties
      }
      className={cn(baseClass, className)}
    >
      {value ?? children}
    </li>
  )
}

export default TimelineItems
