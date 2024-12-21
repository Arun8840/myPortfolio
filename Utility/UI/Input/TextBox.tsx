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
  const defaultClass =
    "border border-stone-700 border-opacity-50 bg-inherit rounded-lg p-2 w-full text-white outline-1 outline-stone-700"
  const defaultLableClass = "text-white font-poppins_normal py-3"
  return (
    <div>
      {label && <h1 className={cn(defaultLableClass, labelStyle)}>{label}</h1>}
      <input className={cn(defaultClass, className)} {...otherInputProps} />
    </div>
  )
}

export default TextBox
