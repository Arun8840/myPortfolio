import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"
interface TableRowprop extends HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode
  label?: string | null | undefined
}
function TableRow({ children, className, label, ...otherProps }: TableRowprop) {
  const defaultClass =
    "odd:bg-stone-800/10 hover:bg-stone-700/10 transition-colors transition-150"
  return (
    <tr className={cn(defaultClass, className)}>
      {/* //todo is table row */}
      {React.Children.map(children, (child: any) => {
        if (child?.type?.displayName === "TableCell") {
          return React.cloneElement(child)
        }
        return null
      })}
    </tr>
  )
}

TableRow.displayName = "TableRow"
export default TableRow
