"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import CustomBarGraph from "@/components/ui/CustomBarGraph";






const DashboardPage: React.FC = () => {
  return (
    <>
  <Card className="w-full flex flex-col">
  <CardHeader>
    <div className="flex justify-between items-center">
    <CardTitle>Dashboard</CardTitle>

    <div className="flex gap-3">
    <DatePickerWithRange />
    <Button variant="default">Download</Button>
    </div>

    </div>

    <div>
    <Menubar className="w-fit">
  <MenubarMenu>
    <MenubarTrigger>Overview</MenubarTrigger>
    <MenubarTrigger>Analytics</MenubarTrigger>
    <MenubarTrigger>Reports</MenubarTrigger>
    <MenubarTrigger>Notifications</MenubarTrigger>
  </MenubarMenu>
</Menubar>
    </div>

    <div className="flex w-full gap-3">

<div className="w-3/12">
<Card className="rounded-lg shadow-lg">
  <CardHeader className="pb-0">
    <h2 className="font-bold">Total Revanue</h2>
    <h3 className="text-2xl font-bold">$45,231.89</h3>
    </CardHeader>
  <CardContent>
    <p className="text-gray-400">+20.1% from last month</p>
  </CardContent>
 
</Card>
</div>

<div className="w-3/12">
<Card className="rounded-lg shadow-lg">
  <CardHeader className="pb-0">
    <h2 className="font-bold">Subscriptions</h2>
    <h3 className="text-2xl font-bold">+2350</h3>
    </CardHeader>
  <CardContent>
    <p className="text-gray-400">+180.1% from last month</p>
  </CardContent>
 
</Card>
</div>

<div className="w-3/12">
<Card className="rounded-lg shadow-lg">
  <CardHeader className="pb-0">
    <h2 className="font-bold">Sales</h2>
    <h3 className="text-2xl font-bold">+12,234</h3>
    </CardHeader>
  <CardContent>
    <p className="text-gray-400">+19% from last month</p>
  </CardContent>
 
</Card>
</div>

<div className="w-3/12 rounded">
<Card className="rounded-lg shadow-lg">
  <CardHeader className="pb-0">
    <h2 className="font-bold">Active Now</h2>
    <h3 className="text-2xl font-bold">+573</h3>
    </CardHeader>
  <CardContent>
    <p className="text-gray-400">+201 since last hour</p>
  </CardContent>
 
</Card>
</div>

    </div>

    <div className="flex w-full gap-3">

    <div className="w-7/12 border rounded-lg p-2 shadow-lg">
    <CustomBarGraph />
    </div>

    <div className="w-5/12 border rounded-lg p-2 shadow-lg">
    <h4 className="font-bold pt-1 pl-1">Recent Sales</h4>
    <p className="text-gray-400 text-sm pt-1 pl-1">You made 265 sales this month</p>

    <div className="w-full p-2">
<Card className="border-0 shadow-none flex justify-between items-center ">
  <CardHeader className="p-0 pl-2">
    <div className="flex items-center flex-wrap">
    <img src="" alt="img" className="pr-2" />
    <div>
    <h2 className="font-bold text-sm">Olivia Martin</h2>
    <h3 className=" text-gray-400 text-xs">olivia.martin@email.com</h3>
    </div>
    </div>
    </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold p-0">+$1,999.00</p>
  </CardContent>
 
</Card>
</div>

<div className="w-full p-2">
<Card className="border-0 shadow-none flex justify-between items-center">
  <CardHeader className="p-0 pl-2">
    <div className="flex items-center">
    <img src="" alt="img" className="pr-2" />
    <div>
    <h2 className="font-bold text-sm">Jackson Lee</h2>
    <h3 className=" text-gray-400 text-xs">jackson.lee@email.com</h3>
    </div>
    </div>
    </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold p-0">+$39.00</p>
  </CardContent>
 
</Card>
</div>

<div className="w-full p-2">
<Card className="border-0 shadow-none flex justify-between items-center">
  <CardHeader className="p-0 pl-2">
    <div className="flex items-center">
    <img src="" alt="img" className="pr-2" />
    <div>
    <h2 className="font-bold text-sm">Isabella Nguyen</h2>
    <h3 className=" text-gray-400 text-xs">isabella.nguyen@email.com</h3>
    </div>
    </div>
    </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold p-0">+$299.00</p>
  </CardContent>
 
</Card>
</div>

<div className="w-full p-2">
<Card className="border-0 shadow-none flex justify-between items-center">
  <CardHeader className="p-0 pl-2">
    <div className="flex items-center">
    <img src="" alt="img" className="pr-2" />
    <div>
    <h2 className="font-bold text-sm">William Kim</h2>
    <h3 className=" text-gray-400 text-xs">will@email.com</h3>
    </div>
    </div>
    </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold p-0">+$99.00</p>
  </CardContent>
 
</Card>
</div>

<div className="w-full p-2">
<Card className="border-0 shadow-none flex justify-between items-center">
  <CardHeader className="p-0 pl-2">
    <div className="flex items-center">
    <img src="" alt="img" className="pr-2" />
    <div>
    <h2 className="font-bold text-sm">Sofia Davis</h2>
    <h3 className=" text-gray-400 text-xs">sofia.davis@email.com</h3>
    </div>
    </div>
    </CardHeader>
  <CardContent className="p-0">
    <p className="font-bold p-0">+$39.00</p>
  </CardContent>
 
</Card>
</div>
    
    </div>

    </div>

  </CardHeader>
</Card>


    </>
  )
}

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
 
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}


export default DashboardPage