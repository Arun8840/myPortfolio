import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface TableHeadProp extends HTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode
  label?: string | null | undefined
}
function TableHead({
  children,
  className,
  label,
  ...otherHeaderProps
}: TableHeadProp) {
  const defaultClass =
    "text-white text-start capitalize tracking-wide text-sm font-poppins_normal font-medium px-4 h-12"
  return (
    <th {...otherHeaderProps} className={cn(defaultClass, className)}>
      {label ? label : children}
    </th>
  )
}

TableHead.displayName = "TableHead"
export default TableHead
