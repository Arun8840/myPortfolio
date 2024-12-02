import { cn } from "@/Utility/cn"
import React, { HTMLAttributes, ReactElement, ReactNode } from "react"

interface TimelineProp extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

const TimeLineContainer = ({ children, className }: TimelineProp) => {
  const items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })

  const baseClass =
    "lg:border-l border-dashed border-stone-800 p-0 lg:pl-5 flex flex-col gap-5"
  return <ul className={cn(baseClass, className)}>{items}</ul>
}

export default TimeLineContainer
