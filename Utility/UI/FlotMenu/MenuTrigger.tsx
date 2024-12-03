import React, { HTMLAttributes } from "react"

interface MenuTriggerProp extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
function MenuTrigger({ children, ...otherProp }: MenuTriggerProp) {
  return (
    <div {...otherProp} className="size-fit">
      {children}
    </div>
  )
}
MenuTrigger.displayName = "MenuTrigger"
export { MenuTrigger }
