import React, { CSSProperties, HTMLAttributes } from "react"
import { cn } from "../cn"
import theme from "../theme.json"
interface ColorProp extends HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode
  className?: string
}
function Label({ children, className, ...otherProp }: ColorProp) {
  const { primary, secondary } = theme
  const baseClass = "font-mono_normal text-[var(--primaryColor)] capitalize"

  const styleVariable = {
    "--primaryColor": primary,
    "--secondaryColor": secondary,
  }
  return (
    <h1
      style={styleVariable as CSSProperties}
      className={cn(baseClass, className)}
    >
      {children ?? "header"}
    </h1>
  )
}

export default Label
