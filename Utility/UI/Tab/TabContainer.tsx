"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react"
import { cn } from "@/Utility/cn"

interface TabContextProps {
  currentTab: string
  setCurrentTab: (value: string) => void
}

const TabContext = createContext<TabContextProps | null>(null)

interface TabContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  defaultValue: string
}

function TabContainer({
  children,
  className,
  defaultValue,
  ...otherProps
}: TabContainerProps) {
  const [currentTab, setCurrentTab] = useState(defaultValue ?? "")
  const defaultClass = "p-1 rounded-lg"
  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      <div {...otherProps} className={cn(defaultClass, className)}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error("useTabContext must be used within a TabContainer")
  }
  return context
}

export default TabContainer
