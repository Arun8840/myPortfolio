import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
function TableContainer({
  children,
  className,
  ...otherprops
}: ContainerProps) {
  const defaultClass =
    "border border-stone-700 border-opacity-50 rounded p-4 bg-inherit"
  return (
    <section {...otherprops} className={cn(defaultClass, className)}>
      {children}
    </section>
  )
}

export default TableContainer
