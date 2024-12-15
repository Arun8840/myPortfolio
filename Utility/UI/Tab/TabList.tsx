import { cn } from "@/Utility/cn"
import React, { CSSProperties, HTMLAttributes } from "react"
import theme from "../../theme.json"

interface TabListProps extends HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}
function TabList({ children, className, ...otherProps }: TabListProps) {
  const baseClass =
    "p-2 flex bg-stone-500/10 rounded-lg items-center flex-wrap justify-evenly  gap-2"

  const { primary } = theme
  const styleVariables = {
    "--active-color": primary ?? "#1230AE",
  }
  return (
    <ul
      style={styleVariables as CSSProperties}
      {...otherProps}
      className={cn(baseClass, className)}
    >
      {React.Children.map(children, (child: any) => {
        if (child?.type?.displayName === "TabTrigger") {
          return React.cloneElement(child)
        }
        return null
      })}
    </ul>
  )
}

export default TabList