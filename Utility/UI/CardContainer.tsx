import React, { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

function CardContainer({
  children,
  className,
  animate = false,
  ...otherProps
}: CardProps) {
  const primary = theme?.primary
  const baseClass = `bg-[#090707] border border-transparent p-3 rounded-3xl ${
    animate &&
    "hover:bg-[var(--primary)] hover:border-[var(--primaryBorder)] hover:-rotate-[.5deg] transition-all duration-200"
  }`
  return (
    <div
      style={
        {
          "--primary": `${primary}20`,
          "--primaryBorder": primary,
        } as CSSProperties
      }
      className={cn(baseClass, className)}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default CardContainer
