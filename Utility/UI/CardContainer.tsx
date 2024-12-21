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
  const { primary, cardBg } = theme

  const baseClass = `bg-[var(--card-inactive-state-bg)] border border-transparent p-3 rounded-3xl ${
    animate &&
    "hover:bg-[var(--card-active-state-bg)] hover:border-[var(--card-border)] hover:-rotate-[.5deg] transition-all duration-200"
  }`
  return (
    <div
      style={
        {
          "--card-active-state-bg": cardBg,
          "--card-inactive-state-bg": `${cardBg}30`,
          "--card-border": cardBg,
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
