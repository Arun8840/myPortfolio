import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface GlowingProps extends HTMLAttributes<HTMLDivElement> {}
const Glowing: React.FC<GlowingProps> = ({ className, ...otherProps }) => {
  const baseClass =
    "size-[200px] rounded-full absolute bg-radial from-teal-200  to-teal-500 blur-2xl"
  return <div {...otherProps} className={cn(baseClass, className)} />
}

export default Glowing
