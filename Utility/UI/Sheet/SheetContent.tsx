import { cn } from "@/Utility/cn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { HTMLAttributes, useEffect, useRef } from "react"
import { useSheetContext } from "./SheetContainer"
import { X } from "lucide-react"
interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  header?: React.ReactNode
}

gsap.registerPlugin(useGSAP)
function SheetContent({ children, header, className }: SheetContentProps) {
  const { setSheetopen, sheetOpen } = useSheetContext()
  const sheetContainerRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const baseClass =
    "w-[350px] h-full self-end bg-black p-2 border-l border-stone-700/80"

  const tl = gsap.timeline({ paused: true })
  const sheetAnimation = tl
    .fromTo(
      sheetContainerRef?.current,
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        display: "flex",
        ease: "power1.inOut",
      },
      0.2
    )
    .fromTo(sheetRef.current, { x: 400 }, { x: 0, ease: "power1.inOut" }, 0.1)
  useGSAP(
    () => {
      if (sheetOpen) {
        sheetAnimation?.play()
      } else {
        sheetAnimation?.reverse()
      }
    },
    { dependencies: [sheetOpen] }
  )

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        setSheetopen(false)
      }
    }

    if (sheetOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [sheetOpen, setSheetopen])
  return (
    <section
      ref={sheetContainerRef}
      className="fixed hidden overflow-hidden  justify-end opacity-0 min-h-screen max-h-full bg-bg backdrop-blur-[1px] z-50 inset-0"
    >
      <div ref={sheetRef} className={cn(baseClass, className)}>
        <div className="flex justify-between items-center p-1 text-white font-semibold text-lg">
          {header}

          <button
            onClick={() => setSheetopen(false)}
            type="button"
            title="close"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </section>
  )
}

SheetContent.displayName = "SheetContent"
export default SheetContent
