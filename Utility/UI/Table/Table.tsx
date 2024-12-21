import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode
}
function Table_Main({ children, className, ...otherTableProp }: TableProps) {
  const defaultClass =
    "w-full table-fixed divide-y divide-stone-700 divide-opacity-50"
  return (
    <table {...otherTableProp} className={cn(defaultClass, className)}>
      {/* //todo is table header */}
      <thead>
        <tr>
          {React.Children.map(children, (child: any) => {
            if (child?.type?.displayName === "TableHead") {
              return React.cloneElement(child)
            }
            return null
          })}
        </tr>
      </thead>

      <tbody>
        {/* //todo is table row */}
        {React.Children.map(children, (child: any) => {
          if (child?.type?.displayName === "TableRow") {
            return React.cloneElement(child)
          }
          return null
        })}
      </tbody>
    </table>
  )
}

export default Table_Main
