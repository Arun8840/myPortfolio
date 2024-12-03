"use client"

import React, { useState } from "react"
import Button from "@/Utility/UI/Button"
import CardContainer from "@/Utility/UI/CardContainer"
import { Bug, Ellipsis, Folder, Home, Info, Phone } from "lucide-react"
import MenuContainer from "@/Utility/UI/FlotMenu/MenuContainer"
import { MenuTrigger } from "@/Utility/UI/FlotMenu/MenuTrigger"
import { MenuItem } from "@/Utility/UI/FlotMenu/MenuItem"
import { MenuList } from "@/Utility/UI/FlotMenu/MenuList"

function Homepage() {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const MenuItems: { label: string; icon: React.ReactNode }[] = [
    { label: "Home", icon: <Home size={18} /> },
    { label: "About", icon: <Info size={18} /> },
    { label: "Projects", icon: <Folder size={18} /> },
    { label: "Contact", icon: <Phone size={18} /> },
  ]
  const handleOpenMenu = () => {
    setOpenMenu(!isOpenMenu)
  }
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-3 justify-between container mx-auto items-start py-5">
        <h1 className="font-mono_normal font-semibold capitalize text-white tracking-wide text-2xl">
          Im arun
        </h1>

        <p className="lg:w-1/2 text-lg font-mono_bold text-white tracking-wide">
          A creative Frontend Developer specializing in React, Next.js, and
          modern JavaScript, building stunning and responsive web experiences.
          Let bring your vision to life with clean code and innovative designs.
        </p>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            label={"Let's talk"}
            icon={{
              value: (
                <Bug
                  strokeWidth={0.8}
                  className="rotate-0 group-hover/buttonTalk:rotate-90 transition-transform duration-150"
                />
              ),
              color: "white",
            }}
            key={"contact_button"}
            varient={"primary"}
            className="font-mono_normal group/buttonTalk"
          />
          <MenuContainer defaultOpen={isOpenMenu}>
            <MenuTrigger onClick={handleOpenMenu}>
              <Button
                className="font-mono_normal"
                key={"menu_button"}
                icon={{
                  color: "white",
                  value: (
                    <Ellipsis
                      size={18}
                      className="hover:rotate-90 transition-transform duration-200"
                    />
                  ),
                }}
              />
            </MenuTrigger>
            <MenuList className="bg-black">
              {MenuItems?.map((options, optionIndex: number) => {
                return (
                  <MenuItem
                    onClick={handleOpenMenu}
                    showIcon={{ show: true, icon: options?.icon }}
                    className="text-lg text-[var(--primary)]"
                    key={`${options?.label}-${optionIndex}`}
                  >
                    {options?.label}
                  </MenuItem>
                )
              })}
            </MenuList>
          </MenuContainer>
        </div>
      </div>

      {/* Banner */}
      <CardContainer className="flex-1 hidden lg:block container mx-auto">
        <h1>content</h1>
      </CardContainer>
    </section>
  )
}

export default Homepage
