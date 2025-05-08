"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Calendar, CreditCard, DollarSign, Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function FinancesPage() {
  const [selectedUnit, setSelectedUnit] = useState("5A")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // Sample data for the unit
  const unitData = {
    "5A": {
      owner: "John Smith",
      quarterlyLevy: 850,
      specialLevy: 250,
      totalDue: 1100,
      dueDate: "June 1, 2025",
      paymentHistory: [
        { date: "March 1, 2025", amount: 850, type: "Quarterly Levy", status: "Paid" },
        { date: "December 1, 2024", amount: 850, type: "Quarterly Levy", status: "Paid" },
        { date: "September 1, 2024", amount: 850, type: "Quarterly Levy", status: "Paid" },
        { date: "August 15, 2024", amount: 500, type: "Special Levy", status: "Paid" },
      ],
    },
    "10B": {
      owner: "Sarah Johnson",
      quarterlyLevy: 950,
      specialLevy: 280,
      totalDue: 1230,
      dueDate: "June 1, 2025",
      paymentHistory: [
        { date: "March 1, 2025", amount: 950, type: "Quarterly Levy", status: "Paid" },
        { date: "December 1, 2024", amount: 950, type: "Quarterly Levy", status: "Paid" },
        { date: "September 1, 2024", amount: 950, type: "Quarterly Levy", status: "Paid" },
        { date: "August 15, 2024", amount: 560, type: "Special Levy", status: "Paid" },
      ],
    },
    "3C": {
      owner: "Michael Brown",
      quarterlyLevy: 750,
      specialLevy: 220,
      totalDue: 970,
      dueDate: "June 1, 2025",
      paymentHistory: [
        { date: "March 1, 2025", amount: 750, type: "Quarterly Levy", status: "Paid" },
        { date: "December 1, 2024", amount: 750, type: "Quarterly Levy", status: "Paid" },
        { date: "September 1, 2024", amount: 750, type: "Quarterly Levy", status: "Paid" },
        { date: "August 15, 2024", amount: 440, type: "Special Levy", status: "Paid" },
      ],
    },
  }

  const currentUnit = unitData[selectedUnit]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>StrataManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/finances" className="font-medium text-foreground transition-colors">
              Finances
            </Link>
            <Link href="/maintenance" className="text-muted-foreground hover:text-foreground transition-colors">
              Maintenance
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Documents
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Residents
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {currentUnit.owner}</span>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              {currentUnit.owner.split(" ")[0][0]}
              {currentUnit.owner.split(" ")[1][0]}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Financial Management</h1>
            <div className="flex items-center gap-4">
              <Label htmlFor="unit-select">Your Unit:</Label>
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger id="unit-select" className="w-[100px]">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5A">Unit 5A</SelectItem>
                  <SelectItem value="10B">Unit 10B</SelectItem>
                  <SelectItem value="3C">Unit 3C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quarterly Levy</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${currentUnit.quarterlyLevy}</div>
                <p className="text-xs text-muted-foreground">Due: {currentUnit.dueDate}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Special Levy</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${currentUnit.specialLevy}</div>
                <p className="text-xs text-muted-foreground">Building Facade Repairs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Due</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${currentUnit.totalDue}</div>
                <p className="text-xs text-muted-foreground">Due: {currentUnit.dueDate}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">Upcoming</div>
                <p className="text-xs text-muted-foreground">Last paid: March 1, 2025</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View your recent levy payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentUnit.paymentHistory.map((payment, index) => (
                      <TableRow key={index}>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                            {payment.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Statement
                </Button>
                <Button variant="outline" size="sm">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>Pay your current levy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-amount">Payment Amount</Label>
                  <Input id="payment-amount" type="text" value={`$${currentUnit.totalDue}`} readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={paymentMethod === "credit-card" ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => setPaymentMethod("credit-card")}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit Card
                    </Button>
                    <Button
                      variant={paymentMethod === "direct-debit" ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => setPaymentMethod("direct-debit")}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Direct Debit
                    </Button>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Pay Now</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Payment Confirmation</DialogTitle>
                      <DialogDescription>
                        You are about to make a payment of ${currentUnit.totalDue} for Unit {selectedUnit}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Confirm Payment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Building Financial Summary</CardTitle>
              <CardDescription>Overview of strata finances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Administration Fund</h3>
                    <span className="text-sm font-medium">$24,685 / $30,000</span>
                  </div>
                  <Progress value={82} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    This fund covers day-to-day expenses like cleaning, gardening, and minor repairs.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Capital Works Fund</h3>
                    <span className="text-sm font-medium">$156,432 / $200,000</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    This fund is for major repairs and improvements to common property.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Special Levy Collection</h3>
                    <span className="text-sm font-medium">$42,500 / $50,000</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Current special levy for building facade repairs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
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
