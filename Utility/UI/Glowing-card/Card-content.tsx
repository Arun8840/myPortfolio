import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}
const CardContent: React.FC<ContentProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const baseClass = "z-10 bg-black/50 backdrop-blur-md rounded-lg p-4"
  return (
    <div {...otherProps} className={cn(baseClass, className)}>
      {children}
    </div>
  )
}

export default CardContent
