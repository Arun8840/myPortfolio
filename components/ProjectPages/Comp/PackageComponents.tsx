import Button from "@/Utility/UI/Button"
import ButtonUrl from "@/Utility/UI/ButtonUrl"
import CardContainer from "@/Utility/UI/CardContainer"
import Skeleton from "@/Utility/UI/Skeleton"
import Switch from "@/Utility/UI/Switch"
import TimeLineContainer from "@/Utility/UI/timeLine/TimeLineContainer"
import TimelineItems from "@/Utility/UI/timeLine/TimelineItems"
import { ArrowRight, LinkIcon, Plus, Sun } from "lucide-react"
import React from "react"

function PackageComponents() {
  return (
    <section className="pt-3 grid lg:grid-cols-2  gap-3">
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
