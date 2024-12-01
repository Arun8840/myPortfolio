import React, { HTMLAttributes } from "react"
import { cn } from "../cn"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function CardContainer({ children, className, ...otherProps }: CardProps) {
  const baseClass = `bg-[#090707] p-3 rounded-3xl`
  return (
    <div className={cn(baseClass, className)} {...otherProps}>
      {children}
    </div>
  )
}

export default CardContainer
