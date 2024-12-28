import { cn } from "@/Utility/cn"
import React, { ButtonHTMLAttributes, HTMLAttributes } from "react"
import { ChevronDown } from "lucide-react"
import { useDropdownContext } from "./DropDownContainer"
interface Dropdown_TriProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function DropDownTrigger({
  children,
  className,
  ...otherProps
}: Dropdown_TriProp) {
  const { isOpenOption, setOpenOptions } = useDropdownContext()
  const defaultClass = `hover:bg-[var(--variant)]  border border-[var(--variant)] transition-all duration-150 rounded-lg  gap-3 text-white font-poppins_normal px-4 py-2`
  return (
    <button
      onClick={() => setOpenOptions(!isOpenOption)}
      {...otherProps}
      className={cn(defaultClass, className)}
    >
      {children}
    </button>
  )
}

export default DropDownTrigger
