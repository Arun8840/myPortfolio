import React, { ButtonHTMLAttributes, CSSProperties } from "react"

interface ColorProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: {
    primary?: string
    secondary?: string
    background?: string
    cardbackground?: string
  }
}
function ColorPallet({ data, ...otherProp }: ColorProp) {
  const { background, cardbackground, primary, secondary } = data
  return (
    <button
      style={
        {
          "--primary": primary,
          "--secondary": secondary,
          "--mainBg": background,
          "--cardBg": cardbackground,
        } as CSSProperties
      }
      {...otherProp}
      className="size-7 overflow-hidden rounded-lg grid grid-cols-2"
    >
      <span className="size-full  bg-[var(--primary)]" />
      <span className="size-full  bg-[var(--secondary)]" />
      <span className="size-full  bg-[var(--mainBg)]" />
      <span className="size-full  bg-[var(--cardBg)]" />
    </button>
  )
}

export default ColorPallet
