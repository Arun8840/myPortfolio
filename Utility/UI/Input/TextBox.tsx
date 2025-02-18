import { cn } from "@/Utility/cn"
import React, { HTMLAttributes, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined
  labelStyle?: string | undefined
}
function TextBox({
  label,
  className,
  labelStyle,
  ...otherInputProps
}: InputProps) {
  const defaultClass = "bg-white  rounded-lg p-2 w-full text-white"
  const defaultLableClass = "font-poppins-normal py-3"
  return (
    <div>
      {label && <h1 className={cn(defaultLableClass, labelStyle)}>{label}</h1>}
      <input className={cn(defaultClass, className)} {...otherInputProps} />
    </div>
  )
}

export default TextBox
