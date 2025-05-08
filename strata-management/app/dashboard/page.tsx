import { Building, Calendar, DollarSign, FileText, PenToolIcon as Tool, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>StrataManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="font-medium text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Finances
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Building: </span>
              <span className="font-medium">123 Strata Street</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,685</div>
                <p className="text-xs text-muted-foreground">Budget: $30,000</p>
                <Progress value={82} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$156,432</div>
                <p className="text-xs text-muted-foreground">Target: $200,000</p>
                <Progress value={78} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
                <Tool className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 pending, 4 in progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Next: May 15, 2025</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="finances">Finances</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your building</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <Tool className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">New maintenance request</p>
                          <p className="text-sm text-muted-foreground">Lobby light fixture needs replacement</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Levy payment received</p>
                          <p className="text-sm text-muted-foreground">Unit 12B - $850</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Document uploaded</p>
                          <p className="text-sm text-muted-foreground">Insurance renewal policy</p>
                          <p className="text-xs text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Committee Members</CardTitle>
                    <CardDescription>Current strata committee</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            C
                          </div>
                          <div>
                            <p className="font-medium">Jane Smith</p>
                            <p className="text-xs text-muted-foreground">Chairperson</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            T
                          </div>
                          <div>
                            <p className="font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">Treasurer</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            S
                          </div>
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-xs text-muted-foreground">Secretary</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                            M
                          </div>
                          <div>
                            <p className="font-medium">Michael Brown</p>
                            <p className="text-xs text-muted-foreground">Member</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Important Dates</CardTitle>
                    <CardDescription>Upcoming events and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Committee Meeting</p>
                          <p className="text-sm text-muted-foreground">May 15, 2025 - 7:00 PM</p>
                          <p className="text-xs text-muted-foreground">Building Common Room</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Quarterly Levy Due</p>
                          <p className="text-sm text-muted-foreground">June 1, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full p-2 bg-muted">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Annual General Meeting</p>
                          <p className="text-sm text-muted-foreground">July 10, 2025 - 6:30 PM</p>
                          <p className="text-xs text-muted-foreground">Community Center</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="finances" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                  <CardDescription>Overview of strata finances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium">Administration Fund</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Current Balance:</span>
                            <span className="font-medium">$24,685</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Annual Budget:</span>
                            <span className="font-medium">$30,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">YTD Expenses:</span>
                            <span className="font-medium">$12,315</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Capital Works Fund</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Current Balance:</span>
                            <span className="font-medium">$156,432</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Target Balance:</span>
                            <span className="font-medium">$200,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">YTD Contributions:</span>
                            <span className="font-medium">$18,500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium mb-2">Recent Transactions</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-medium">Gardening Service</p>
                            <p className="text-xs text-muted-foreground">May 2, 2025</p>
                          </div>
                          <span className="text-red-500">-$450</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-medium">Unit 12B Levy</p>
                            <p className="text-xs text-muted-foreground">May 1, 2025</p>
                          </div>
                          <span className="text-green-500">+$850</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-medium">Elevator Maintenance</p>
                            <p className="text-xs text-muted-foreground">April 28, 2025</p>
                          </div>
                          <span className="text-red-500">-$1,200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="maintenance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Track and manage building maintenance</CardDescription>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Document Repository</CardTitle>
                  <CardDescription>Access important strata documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">By-Laws & Regulations</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Strata Scheme By-Laws</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Jan 15, 2025</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Pet Policy</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Mar 10, 2025</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Financial Documents</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Annual Financial Statement 2024</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Apr 5, 2025</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Budget Forecast 2025-2026</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Feb 20, 2025</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Meeting Minutes</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Committee Meeting - April 2025</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Apr 18, 2025</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>AGM Minutes - December 2024</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Updated: Dec 15, 2024</span>
                        </div>
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
