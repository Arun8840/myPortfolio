import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface CardPros extends HTMLAttributes<HTMLDivElement> {}
const GlowingCard: React.FC<CardPros> = ({
  className,
  children,
  ...otherProps
}) => {
  const baseClass =
    "min-w-[300px] rounded-xl overflow-hidden mx-auto relative p-0.5 grid ring ring-inset ring-neutral-600/50"

  return (
    <div {...otherProps} className={cn(baseClass, className)}>
      {children}
    </div>
  )
}

export default GlowingCard
