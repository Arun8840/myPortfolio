import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

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
  const baseClass = `text-white font-poppins_normal p-2 relative 
  before:absolute before:-left-[30px] before:size-5 
  before:bg-black before:rounded-full before:ring-2 
  before:ring-inset before:ring-stone-800 
  before:scale-75 hover:before:bg-[#1a30fb] hover:before:ring-white hover:before:scale-100`
  return (
    <li {...otherProps} className={cn(baseClass, className)}>
      {value ?? children}
    </li>
  )
}

export default TimelineItems
