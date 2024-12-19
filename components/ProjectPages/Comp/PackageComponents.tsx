import Button from "@/Utility/UI/Button"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import CardContainer from "@/Utility/UI/CardContainer"
import {
  DropDownContainer,
  DropDownContent,
  DropDownGroup,
  DropDownGroupTitle,
  DropDownItem,
  DropDownTrigger,
} from "@/Utility/UI/Dropdown"
import Splitter from "@/Utility/UI/Dropdown/Splitter"
import Skeleton from "@/Utility/UI/Skeleton"
import Switch from "@/Utility/UI/Switch"
import TabContainer from "@/Utility/UI/Tab/TabContainer"
import TabList from "@/Utility/UI/Tab/TabList"
import TabRender from "@/Utility/UI/Tab/TabRender"
import TabTrigger from "@/Utility/UI/Tab/TabTrigger"
import TimeLineContainer from "@/Utility/UI/timeLine/TimeLineContainer"
import TimelineItems from "@/Utility/UI/timeLine/TimelineItems"
import {
  ArrowRight,
  Bell,
  CircleDollarSign,
  KeyRound,
  LinkIcon,
  Lock,
  LogOut,
  Plus,
  PlusIcon,
  Send,
  Settings,
  Settings2,
  Shield,
  Sun,
  User,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react"
import React from "react"

interface MenuTypes {
  group: string
  groupIcon: React.ReactNode
  items: { label: string; icon: React.ReactNode }[]
}

function PackageComponents() {
  const DropdownMenus = [
    {
      label: "profile",
      icon: <UserRound size={18} className="text-blue-500" />,
    },
    {
      label: "settings",
      icon: <Settings2 size={18} className="text-yellow-500" />,
    },
    {
      label: "billing",
      icon: <CircleDollarSign size={18} className="text-green-500" />,
    },
    {
      label: "invite users",
      icon: <UsersRound size={18} className="text-indigo-500" />,
    },
    {
      label: "new team",
      icon: <PlusIcon size={18} className="text-orange-500" />,
    },
    {
      label: "logout",
      icon: <LogOut size={18} className="text-red-500" />,
    },
  ]
  const GroupedDropdowns: MenuTypes[] = [
    {
      group: "Info",
      groupIcon: <User size={20} className="text-blue-500" />, // Group icon
      items: [
        { label: "Profile", icon: <User size={18} className="text-red-500" /> },
        {
          label: "Activity",
          icon: <Bell size={18} className="text-purple-500" />,
        },
        {
          label: "Notifications",
          icon: <Send size={18} className="text-orange-500" />,
        },
      ],
    },
    {
      group: "Settings",
      groupIcon: <Settings size={20} className="text-green-500" />, // Group icon
      items: [
        {
          label: "Security",
          icon: <Shield size={18} className="text-indigo-500" />,
        },
        {
          label: "Account",
          icon: <User size={18} className="text-pink-500" />,
        },
      ],
    },
    {
      group: "Team",
      groupIcon: <Users size={20} className="text-purple-500" />, // Group icon
      items: [
        {
          label: "Permissions",
          icon: <Lock size={18} className="text-lime-500" />,
        },
        {
          label: "Invites",
          icon: <Send size={18} className="text-cyan-500" />,
        },
      ],
    },
  ]
  return (
    <section className="pt-3 grid lg:grid-cols-2  gap-3">
      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Dropdown
        </h1>
        <div className="flex flex-wrap gap-3">
          <DropDownContainer>
            <DropDownTrigger disabled>Disabled Dropdown</DropDownTrigger>
            <DropDownContent className="w-full">
              {DropdownMenus?.map(
                (options: { label: string; icon: React.ReactNode }) => {
                  return (
                    <DropDownItem key={options?.label}>
                      {options?.label}
                    </DropDownItem>
                  )
                }
              )}
            </DropDownContent>
          </DropDownContainer>
          <DropDownContainer>
            <DropDownTrigger>Default Dropdown</DropDownTrigger>
            <DropDownContent position="top" className="w-full">
              {DropdownMenus?.map(
                (options: { label: string; icon: React.ReactNode }) => {
                  return (
                    <DropDownItem key={options?.label}>
                      {options?.label}
                    </DropDownItem>
                  )
                }
              )}
            </DropDownContent>
          </DropDownContainer>
          <DropDownContainer>
            <DropDownTrigger>With Icon Dropdown</DropDownTrigger>
            <DropDownContent className="w-full">
              {DropdownMenus?.map(
                (options: { label: string; icon: React.ReactNode }) => {
                  return (
                    <DropDownItem key={options?.label} icon={options?.icon}>
                      {options?.label}
                    </DropDownItem>
                  )
                }
              )}
            </DropDownContent>
          </DropDownContainer>
          <DropDownContainer>
            <DropDownTrigger>Grouped Dropdown</DropDownTrigger>
            <DropDownGroup>
              {GroupedDropdowns?.map((group) => (
                <React.Fragment key={group?.group}>
                  {/* Add key here */}
                  <DropDownGroupTitle icon={group?.groupIcon}>
                    {group?.group}
                  </DropDownGroupTitle>
                  <Splitter />
                  {group?.items?.map((child) => (
                    <DropDownItem icon={child?.icon} key={child?.label}>
                      {child?.label}
                    </DropDownItem>
                  ))}
                </React.Fragment>
              ))}
            </DropDownGroup>
          </DropDownContainer>
        </div>
      </CardContainer>
      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Tab component
        </h1>

        <TabContainer defaultValue="Account">
          <TabList>
            <TabTrigger value="Account">Account</TabTrigger>
            <TabTrigger icon={<Settings size={18} />} value="Settings">
              Settings
            </TabTrigger>
            <TabTrigger disabled icon={<KeyRound size={18} />} value="Security">
              Security
            </TabTrigger>
          </TabList>
          <TabRender value="Account">
            <h1>Account</h1>
            <p className="pt-3">
              Without Icon A clean and simple tab navigation system that
              displays only text labels for each tab. Ideal for minimalist
              designs and straightforward content organization. Focuses solely
              on functionality without visual distractions.
            </p>
          </TabRender>
          <TabRender value="Security">
            <h1>Security</h1>
            <p>
              With Icon An enhanced tab navigation system that includes icons
              alongside text labels. Icons provide a visual cue, making it
              easier for users to identify tab content. Great for intuitive
              navigation in visually rich applications.
            </p>
          </TabRender>
          <TabRender value="Settings">
            <h1>Settings</h1>
            <p>
              Disabled Tab Navigation A tab navigation system with the option to
              disable specific tabs. Disabled tabs appear visually distinct and
              cannot be selected. Useful for guiding users or restricting access
              to certain sections.
            </p>
          </TabRender>
        </TabContainer>
      </CardContainer>

      {/* //todo groups */}
      <CardContainer className="col-span-full">
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Buttons
        </h1>
        <div className="flex flex-wrap gap-3">
          <Button label={"Disabled"} disabled variant={"default"} />
          <Button label={"Default"} variant={"default"} />
          <Button label={"Primary"} variant={"primary"} />
          <Button label={"Secondary"} variant={"secondary"} />
          <Button
            label={"Primary"}
            variant={"primary"}
            icon={{
              color: "white",
              value: <Plus size={20} />,
            }}
          />
          <Button
            label={"Default"}
            variant={"default"}
            icon={{
              value: <Plus size={20} />,
            }}
          />
          <Button
            label={"Secondary"}
            variant={"secondary"}
            icon={{
              value: <Plus size={20} />,
            }}
          />
          <ButtonUrl
            href=""
            label={"Url Button"}
            variant={"primary"}
            icon={{
              color: "white",
              value: <LinkIcon size={20} />,
            }}
          />
        </div>
      </CardContainer>

      {/* default card */}
      <CardContainer>
        <h1 className="text-white font-mono_normal font-semibold pb-2">
          Default Card
        </h1>
        <p className="text-white font-mono_normal py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          assumenda a quo aut optio ea,ipsum dolor sit amet consectetur
          adipisicing elit. Beatae assumenda a quo aut optio ea,
        </p>
        <div className="flex justify-end">
          <Button
            label={"Open"}
            variant={"primary"}
            icon={{
              color: "white",
              value: <ArrowRight size={20} />,
            }}
          />
        </div>
      </CardContainer>

      {/* animated card */}
      <CardContainer animate>
        <h1 className="text-white font-mono_normal font-semibold pb-2 capitalize">
          Hover animated card
        </h1>
        <p className="text-white font-mono_normal py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          assumenda a quo aut optio ea,ipsum dolor sit amet consectetur
          adipisicing elit. Beatae assumenda a quo aut optio ea,
        </p>
        <div className="flex justify-end">
          <Button
            label={"Open"}
            variant={"primary"}
            icon={{
              color: "white",
              value: <ArrowRight size={20} />,
            }}
          />
        </div>
      </CardContainer>

      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Timeline component
        </h1>

        <TimeLineContainer animate>
          <TimelineItems className="font-mono_normal">
            <h1 className="pt-0 p-2">Timeline title</h1>
            <p className="p-2">Timeline description</p>
          </TimelineItems>
          <TimelineItems className="font-mono_normal">
            <h1 className="pt-0 p-2">Timeline title</h1>
            <p className="p-2">Timeline description</p>
          </TimelineItems>
          <TimelineItems className="font-mono_normal">
            <h1 className="pt-0 p-2">Timeline title</h1>
            <p className="p-2">Timeline description</p>
          </TimelineItems>
        </TimeLineContainer>
      </CardContainer>

      {/* switch groups */}
      <div className="flex flex-col gap-3">
        <CardContainer>
          <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
            Switch component
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <Switch variant={"default"} />
            <Switch variant={"primary"} />
            <Switch variant={"secondary"} />
            <Switch disabled variant={"primary"} />
            <Switch
              variant={"default"}
              icon={{
                color: "orange",
                value: <Sun size={16} className="fill-current" />,
              }}
            />
          </div>
        </CardContainer>

        <h1 className="text-white font-mono_normal font-semibold p-2 capitalize">
          Skeleton
        </h1>
        <div className="flex gap-3 p-2">
          <Skeleton className="size-20 rounded-full" />
          <div className="flex-1 flex flex-col gap-3 p-2">
            <Skeleton className="w-full h-5 rounded-full" />
            <Skeleton className="w-10/12 h-5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackageComponents
