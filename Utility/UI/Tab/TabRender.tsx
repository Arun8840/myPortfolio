import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
import { useTabContext } from "./TabContainer"

interface TabRenderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  value: string
}
function TabRender({
  children,
  value,
  className,
  ...otherProps
}: TabRenderProps) {
  const { currentTab } = useTabContext()
  const defaultClass = "text-white p-2"

  if (currentTab !== value) return null
  return (
    <div {...otherProps} className={cn(defaultClass, className)}>
      {children}
    </div>
  )
}

TabRender.displayName = "TabRender"
export default TabRender
