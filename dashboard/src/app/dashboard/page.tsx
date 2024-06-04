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
  <Card>
  <CardHeader>
    <div className="flex justify-between items-center">
    <CardTitle>Dashboard</CardTitle>

    <div className="flex gap-3">
    <DatePickerWithRange />
    <Button variant="default">Download</Button>
    </div>

    </div>

    <div>
    <Menubar>
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

    <div className="flex w-full">

    <div className="w-7/12 border rounded-lg p-2 shadow-lg">
    <CustomBarGraph />
    </div>

    </div>

  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
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