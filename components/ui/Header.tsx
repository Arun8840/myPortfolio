import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
}
export const Header = ({ children, className, ...otherProps }: HeaderProps) => {
  const baseClass =
    "text-4xl font-poppins-normal font-semibold text-neutral-800"
  return (
    <>
      <h1 {...otherProps} className={cn(baseClass, className)}>
        {children}
      </h1>
    </>
  )
}
