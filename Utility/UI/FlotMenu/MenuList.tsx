import { cn } from "@/Utility/cn"
import React, { HTMLAttributes } from "react"

interface MenuListProp extends HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}
function MenuList({ children, className }: MenuListProp) {
  const baseClass =
    "flex flex-col gap-2 bg-[#09090b] bg-inherit p-3 w-full h-full"
  return <ul className={cn(baseClass, className)}>{children}</ul>
}
MenuList.displayName = "MenuList"
export { MenuList }
