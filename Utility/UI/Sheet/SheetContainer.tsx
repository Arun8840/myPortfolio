import { cn } from "@/Utility/cn"
import React, {
  createContext,
  HTMLAttributes,
  useContext,
  useState,
} from "react"

interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface ContextTypes {
  sheetOpen: boolean
  setSheetopen: (value: boolean) => void
}

const SheetContext = createContext<ContextTypes | null>(null)
function SheetContainer({ children, className }: SheetProps) {
  const [sheetOpen, setSheetopen] = useState(false)
  const baseClass = "size-fit"
  return (
    <SheetContext.Provider value={{ sheetOpen, setSheetopen }}>
      <section className={cn(baseClass, className)}>
        {React.Children.toArray(children).filter(
          (child: any) => child?.type?.displayName === "SheetTrigger"
        )}
        {React.Children.toArray(children).filter(
          (child: any) => child?.type?.displayName === "SheetContent"
        )}
      </section>
    </SheetContext.Provider>
  )
}
export const useSheetContext = () => {
  const context = useContext(SheetContext)
  if (!context) {
    throw new Error("useSheetontext must be used within a SheetContainer")
  }
  return context
}
export default SheetContainer
