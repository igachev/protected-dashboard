

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


const DashboardPage: React.FC = () => {
  return (
    <>
  <Card>
  <CardHeader>
    <div className="flex justify-between items-center">
    <CardTitle>Dashboard</CardTitle>
    <div className="flex gap-3">
    <CardDescription>Card Description</CardDescription>
    <Button variant="default">Button</Button>

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

export default DashboardPage