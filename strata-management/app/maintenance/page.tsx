import { Building, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>StrataManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Finances
            </a>
            <a href="/maintenance" className="font-medium text-foreground transition-colors">
              Maintenance
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Documents
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Residents
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, Treasurer</span>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              T
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Maintenance Requests</h1>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Request
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search requests..." className="w-full pl-8" />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Requests</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Manage all building maintenance issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Lobby Light Fixture Replacement</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 5A</p>
                          <p className="text-xs text-muted-foreground">May 6, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                          Pending
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        The main light fixture in the lobby is flickering and needs to be replaced.
                      </p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Assign
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Garage Door Malfunction</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 8B</p>
                          <p className="text-xs text-muted-foreground">May 3, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          In Progress
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        The garage door is not opening properly. Sometimes it gets stuck halfway.
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Assigned to: Sydney Garage Doors</p>
                        <p>Scheduled: May 10, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Water Leak in Common Hallway</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 3C</p>
                          <p className="text-xs text-muted-foreground">April 29, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          In Progress
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Water leaking from ceiling on level 3 near the elevator.</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Assigned to: Quick Plumbing Services</p>
                        <p>Scheduled: May 8, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Gym Equipment Maintenance</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 10A</p>
                          <p className="text-xs text-muted-foreground">April 22, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                          Completed
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Treadmill in the gym is making unusual noises and needs servicing.</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Completed by: Fitness Equipment Repairs</p>
                        <p>Completed on: May 1, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pending" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Requests</CardTitle>
                  <CardDescription>Maintenance issues awaiting assignment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Lobby Light Fixture Replacement</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 5A</p>
                          <p className="text-xs text-muted-foreground">May 6, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                          Pending
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        The main light fixture in the lobby is flickering and needs to be replaced.
                      </p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Assign
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Pool Area Cleaning</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 2B</p>
                          <p className="text-xs text-muted-foreground">May 5, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                          Pending
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        The pool area needs thorough cleaning. There are leaves and debris around the pool.
                      </p>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Assign
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="in-progress" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>In Progress Requests</CardTitle>
                  <CardDescription>Maintenance issues currently being addressed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Garage Door Malfunction</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 8B</p>
                          <p className="text-xs text-muted-foreground">May 3, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          In Progress
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        The garage door is not opening properly. Sometimes it gets stuck halfway.
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Assigned to: Sydney Garage Doors</p>
                        <p>Scheduled: May 10, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Water Leak in Common Hallway</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 3C</p>
                          <p className="text-xs text-muted-foreground">April 29, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                          In Progress
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Water leaking from ceiling on level 3 near the elevator.</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Assigned to: Quick Plumbing Services</p>
                        <p>Scheduled: May 8, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Update Status
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Completed Requests</CardTitle>
                  <CardDescription>Resolved maintenance issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Gym Equipment Maintenance</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 10A</p>
                          <p className="text-xs text-muted-foreground">April 22, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                          Completed
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Treadmill in the gym is making unusual noises and needs servicing.</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Completed by: Fitness Equipment Repairs</p>
                        <p>Completed on: May 1, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Intercom System Repair</h3>
                          <p className="text-sm text-muted-foreground">Reported by: Unit 7D</p>
                          <p className="text-xs text-muted-foreground">April 15, 2025</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                          Completed
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Intercom system in the main entrance is not working properly.</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>Completed by: Security Systems Ltd</p>
                        <p>Completed on: April 25, 2025</p>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 StrataManage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
