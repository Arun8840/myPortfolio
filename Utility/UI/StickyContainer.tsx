import React, { HtmlHTMLAttributes } from "react"
import { cn } from "../cn"

interface StickySectionProp extends HtmlHTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}
function StickyContainer({
  children,
  className,
  ...otherProp
}: StickySectionProp) {
  const baseClass = "p-2 size-fit rounded sticky top-0"
  return (
    <ul {...otherProp} className={cn(baseClass, className)}>
      {children}
    </ul>
  )
}

export default StickyContainer
