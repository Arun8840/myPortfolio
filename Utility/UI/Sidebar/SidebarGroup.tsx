import { cn } from "@/Utility/cn"
import { ChevronsUpDown } from "lucide-react"
import React, { HTMLAttributes } from "react"

interface ListProps extends HTMLAttributes<HTMLDListElement> {
  children: React.ReactNode
  header?: string | null
  icon?: React.ReactNode | null
  defaultOpen?: boolean
}
function SidebarGroup({
  children,
  className,
  header,
  icon,
  defaultOpen = true,
  ...otherProps
}: ListProps) {
  const baseClass = "p-1 text-sm flex flex-col gap-1 text-[var(--text-color)]"
  return (
    <dl {...otherProps} className={cn(baseClass, className)}>
      <input
        type="checkbox"
        name="groupedMenu"
        defaultChecked={defaultOpen}
        id={header ?? "groupheader"}
        className="hidden peer/groupedMenu"
      />
      <dt className="flex items-center justify-between p-1 gap-2 rounded-sm">
        <div className="flex items-center gap-2">
          {icon && <div className="bg-white/5 p-2 rounded-sm">{icon}</div>}
          {header}
        </div>

        <label
          htmlFor={header ?? "groupheader"}
          className="peer-checked/groupedMenu:text-red-500 transition-transform duration-150"
        >
          <ChevronsUpDown color="gray" size={18} />
        </label>
      </dt>
      <dd className="hidden peer-checked/groupedMenu:block">
        <ul>
          {React.Children.toArray(children).map((child: any) => {
            if (child?.type?.displayName === "SidebarItem") {
              return React.cloneElement(child)
            }
            return null
          })}
        </ul>
      </dd>
    </dl>
  )
}

SidebarGroup.displayName = "SidebarGroup"
export default SidebarGroup
