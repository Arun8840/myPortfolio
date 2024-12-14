import React, { HTMLAttributes } from "react"
import { cn } from "../cn"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton: React.FC<SkeletonProps> = ({ className, ...otherProps }) => {
  const baseClass = "h-[100px] rounded-lg"
  return (
    <div
      {...otherProps}
      className={cn(
        baseClass,
        className,
        "bg-gradient-to-l from-[#242427] to-[#18181b] animate-pulse"
      )}
    ></div>
  )
}

export default Skeleton
