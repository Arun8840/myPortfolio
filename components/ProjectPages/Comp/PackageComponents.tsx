import Button from "@/Utility/UI/Button"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import CardContainer from "@/Utility/UI/CardContainer"
import Chips from "@/Utility/UI/Chips"
import {
  DropDownContainer,
  DropDownContent,
  DropDownGroup,
  DropDownGroupTitle,
  DropDownItem,
  DropDownTrigger,
} from "@/Utility/UI/Dropdown"
import Splitter from "@/Utility/UI/Dropdown/Splitter"
import TextBox from "@/Utility/UI/Input/TextBox"
import Skeleton from "@/Utility/UI/Skeleton"
import Switch from "@/Utility/UI/Switch"
import { TabContainer, TabList, TabRender, TabTrigger } from "@/Utility/UI/Tab"
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@/Utility/UI/Table"
import { TimeLineContainer, TimelineItems } from "@/Utility/UI/timeLine"
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
  const tableHeader: string[] = [
    "Name",
    "Enable User",
    "email",
    "status",
    "amount",
    "actions",
  ]

  const tableData: {
    Name: string
    active: boolean
    status: boolean
    email: string
    amount: string
  }[] = [
    {
      Name: "John Doe",
      status: false,
      active: true,
      email: "john.doe@example.com",
      amount: "$1200",
    },
    {
      Name: "Jane Smith",
      status: true,
      active: false,
      email: "jane.smith@example.com",
      amount: "$950",
    },
    {
      Name: "Alice Johnson",
      status: false,
      active: true,
      email: "alice.johnson@example.com",
      amount: "$1500",
    },
    {
      Name: "Bob Brown",
      status: true,
      active: false,
      email: "bob.brown@example.com",
      amount: "$800",
    },
  ]

  return (
    <section className="pt-3 grid lg:grid-cols-2  gap-3">
      {/* //TODO CHIPS */}
      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Chips
        </h1>
        <div className="flex flex-wrap gap-3">
          <Chips variant="default" label="small" chipSize="small" />
          <Chips variant="default" label="Medium" chipSize="medium" />
          <Chips variant="outlined" label="Large" chipSize="large" />
        </div>
      </CardContainer>
      {/* //TODO INPUT */}
      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Input component
        </h1>
        <TextBox type="text" required label="UserName" />
      </CardContainer>
      {/* //TODO TABLE */}
      <CardContainer className="col-span-full">
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Table component
        </h1>
        {/* //todo table */}
        <TableContainer>
          {/* //todo other events experimental*/}
          <div className="flex justify-between gap-3 items-center p-2">
            <h1 className="text-white font-mono_bold font-semibold text-lg flex items-center gap-3">
              <UserRound /> Users
            </h1>
            <div className="flex justify-end items-center gap-2  flex-1">
              <input
                placeholder="Filter..."
                type="text"
                className="bg-inherit outline-none focus:ring-2 ring-inset ring-stone-600 border border-stone-700 border-opacity-50 rounded-lg p-2 w-1/2 text-white"
              />
              <DropDownContainer>
                <DropDownTrigger>Show by</DropDownTrigger>
                <DropDownContent className="w-40">
                  <DropDownItem>Name</DropDownItem>
                  <DropDownItem>Status</DropDownItem>
                  <DropDownItem>Email</DropDownItem>
                  <DropDownItem>Active</DropDownItem>
                  <DropDownItem>Amount</DropDownItem>
                </DropDownContent>
              </DropDownContainer>
            </div>
          </div>
          <Table>
            {tableHeader?.map((headers) => {
              return <TableHead key={headers}>{headers}</TableHead>
            })}
            {/* table body */}
            {tableData?.map((datas) => {
              return (
                <TableRow key={datas?.Name}>
                  <TableCell>
                    <p className="line-clamp-1">{datas?.Name}</p>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Switch defaultChecked={datas?.status} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="line-clamp-1">{datas?.email}</p>
                  </TableCell>
                  <TableCell>
                    <Chips
                      disabled
                      variant="outlined"
                      chipSize="small"
                      defaultChecked={datas?.active}
                      label={datas?.active ? "active" : "Inactive"}
                    />
                  </TableCell>
                  <TableCell>{datas?.amount}</TableCell>
                  <TableCell>
                    <DropDownContainer>
                      <DropDownTrigger>More</DropDownTrigger>
                      <DropDownContent className="w-40">
                        <DropDownItem>Edit</DropDownItem>
                        <DropDownItem>Copy</DropDownItem>
                        <DropDownItem>Delete</DropDownItem>
                      </DropDownContent>
                    </DropDownContainer>
                  </TableCell>
                </TableRow>
              )
            })}
          </Table>
        </TableContainer>
      </CardContainer>
      {/* //todo TAB */}
      <CardContainer className="col-span-full">
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Tab component
        </h1>

        <div className="grid lg:grid-cols-2 gap-2">
          <TabContainer defaultValue="Account">
            <TabList type="filled">
              <TabTrigger value="Account">Account</TabTrigger>
              <TabTrigger icon={<Settings size={18} />} value="Settings">
                Settings
              </TabTrigger>
              <TabTrigger icon={<KeyRound size={18} />} value="Security">
                Security
              </TabTrigger>
            </TabList>
            <TabRender value="Account">
              <h1>Account</h1>
              <p className="pt-3 text-justify">
                Without Icon A clean and simple tab navigation system that
                displays only text labels for each tab. Ideal for minimalist
                designs and straightforward content organization. Focuses solely
                on functionality without visual distractions.
              </p>
            </TabRender>
            <TabRender value="Security">
              <h1>Security</h1>
              <p className="pt-3 text-justify">
                With Icon An enhanced tab navigation system that includes icons
                alongside text labels. Icons provide a visual cue, making it
                easier for users to identify tab content. Great for intuitive
                navigation in visually rich applications.
              </p>
            </TabRender>
            <TabRender value="Settings">
              <h1>Settings</h1>
              <p className="pt-3 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur unde temporibus officia sit ipsam iste eveniet.
                Deleniti ipsam sed accusantium autem debitis! Veniam fuga
                tempora ab ullam voluptatibus, id ipsum!
              </p>
            </TabRender>
          </TabContainer>

          <TabContainer defaultValue="Account">
            <TabList type="outlined">
              <TabTrigger value="Account">Account</TabTrigger>
              <TabTrigger icon={<Settings size={18} />} value="Settings">
                Settings
              </TabTrigger>
              <TabTrigger
                disabled
                icon={<KeyRound size={18} />}
                value="Security"
              >
                In-active
              </TabTrigger>
            </TabList>
            <TabRender value="Account">
              <h1>Account</h1>
              <p className="pt-3 text-justify">
                Without Icon A clean and simple tab navigation system that
                displays only text labels for each tab. Ideal for minimalist
                designs and straightforward content organization. Focuses solely
                on functionality without visual distractions.
              </p>
            </TabRender>
            <TabRender value="Security">
              <h1>Security</h1>
              <p className="pt-3 text-justify">
                With Icon An enhanced tab navigation system that includes icons
                alongside text labels. Icons provide a visual cue, making it
                easier for users to identify tab content. Great for intuitive
                navigation in visually rich applications.
              </p>
            </TabRender>
            <TabRender value="Settings">
              <h1>Settings</h1>
              <p className="pt-3 text-justify">
                Disabled Tab Navigation A tab navigation system with the option
                to disable specific tabs. Disabled tabs appear visually distinct
                and cannot be selected. Useful for guiding users or restricting
                access to certain sections.
              </p>
            </TabRender>
          </TabContainer>
        </div>
      </CardContainer>
      {/* //todo BUTTON */}
      <CardContainer>
        <h1 className="text-white font-mono_normal pb-5 font-semibold capitalize">
          Buttons
        </h1>
        <div className="flex items-center flex-wrap gap-3">
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

          <ButtonUrl
            href=""
            label={"Url Button"}
            variant={"primary"}
            icon={{
              color: "white",
              value: <LinkIcon size={20} />,
            }}
          />
          <Button size="small" label={"Small"} variant={"primary"} />
          <Button size="medium" label={"Medium"} variant={"primary"} />
          <Button size="large" label={"Large Button"} variant={"primary"} />
        </div>
      </CardContainer>
      {/* //TODO DROPDOWN */}
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

      {/* //TODO DEFAULT CARD */}
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

      {/*//TODO ANIMATED CARD */}
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
      {/* //TODO TIMELINE */}
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

      {/* //TODO SWITCH GROUPS AND SKELETON*/}
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
        <CardContainer>
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
        </CardContainer>
      </div>
    </section>
  )
}

export default PackageComponents
