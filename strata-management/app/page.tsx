import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building, FileText, MessageSquare, PieChart, PenToolIcon as Tool, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>StrataManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/finances" className="text-muted-foreground hover:text-foreground transition-colors">
              Finances
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Maintenance
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Documents
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Residents
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline">Register</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simplify Your Strata Management
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Streamline your strata committee responsibilities with our comprehensive management platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                  <Image
                    src="/images/modern-house.png"
                    alt="Modern Strata Property"
                    width={600}
                    height={400}
                    className="aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Features Designed for Strata Committees
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your building efficiently and transparently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <PieChart className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Financial Management</CardTitle>
                  <CardDescription>Track levies, manage budgets, and monitor fund balances.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Administration fund tracking</li>
                    <li>Capital works fund management</li>
                    <li>Levy payment monitoring</li>
                    <li>Budget planning tools</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href="/finances">View Your Payments</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Tool className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Log, track, and manage building maintenance issues.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Request submission portal</li>
                    <li>Contractor assignment</li>
                    <li>Progress tracking</li>
                    <li>Maintenance history</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Document Repository</CardTitle>
                  <CardDescription>Store and access all strata documents securely.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>By-laws and regulations</li>
                    <li>Meeting minutes</li>
                    <li>Financial statements</li>
                    <li>Insurance policies</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Access Documents
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Communication Hub</CardTitle>
                  <CardDescription>Keep all residents informed and engaged.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Announcements and notices</li>
                    <li>Resident messaging</li>
                    <li>Committee discussions</li>
                    <li>Event planning</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    View Messages
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Meeting Management</CardTitle>
                  <CardDescription>Organize and document committee meetings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Meeting scheduling</li>
                    <li>Agenda creation</li>
                    <li>Minutes recording</li>
                    <li>Action item tracking</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    View Schedule
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Property Information</CardTitle>
                  <CardDescription>Centralize all building-related information.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Lot registry</li>
                    <li>Owner and tenant details</li>
                    <li>Building plans and specs</li>
                    <li>Service provider contacts</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    View Property
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 StrataManage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
