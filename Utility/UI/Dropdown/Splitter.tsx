import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface SplitterProps extends HTMLAttributes<HTMLDivElement> {}

const Splitter = ({ className, ...otherProps }: SplitterProps) => {
  const baseClass = "border-t border-inset border-[var(--variant)] my-1 w-full"
  return <div {...otherProps} className={cn(baseClass, className)} />
}

Splitter.displayName = "Splitter"
export default Splitter
