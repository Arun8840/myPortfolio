import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface TableCellProp extends HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode
  label?: string | null | undefined
}
function TableCell({
  children,
  className,
  label,
  ...otherHeaderProps
}: TableCellProp) {
  const defaultClass =
    "text-white text-start text-sm font-poppins_normal font-medium px-4 py-2"
  return (
    <td {...otherHeaderProps} className={cn(defaultClass, className)}>
      {label ? label : children}
    </td>
  )
}

TableCell.displayName = "TableCell"
export default TableCell
