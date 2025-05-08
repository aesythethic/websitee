"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Calculator, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function LevyCalculatorPage() {
  const [unitEntitlement, setUnitEntitlement] = useState(10)
  const [totalEntitlement, setTotalEntitlement] = useState(100)
  const [adminBudget, setAdminBudget] = useState(30000)
  const [capitalBudget, setCapitalBudget] = useState(20000)
  const [specialLevyAmount, setSpecialLevyAmount] = useState(50000)
  const [includeSpecialLevy, setIncludeSpecialLevy] = useState(true)
  const [paymentFrequency, setPaymentFrequency] = useState("quarterly")

  // Calculate levies
  const adminLevy = (unitEntitlement / totalEntitlement) * adminBudget
  const capitalLevy = (unitEntitlement / totalEntitlement) * capitalBudget
  const specialLevy = includeSpecialLevy ? (unitEntitlement / totalEntitlement) * specialLevyAmount : 0
  const totalAnnualLevy = adminLevy + capitalLevy + specialLevy

  // Calculate payment amounts based on frequency
  const getPaymentAmount = () => {
    switch (paymentFrequency) {
      case "monthly":
        return totalAnnualLevy / 12
      case "quarterly":
        return totalAnnualLevy / 4
      case "annually":
        return totalAnnualLevy
      default:
        return totalAnnualLevy / 4
    }
  }

  const paymentAmount = getPaymentAmount()

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
            <Link href="/finances" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <span className="text-sm text-muted-foreground">Welcome, Guest</span>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              G
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Levy Calculator</h1>
            <Button variant="outline" asChild>
              <Link href="/finances">View Your Payments</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Strata Levy Calculator</CardTitle>
                <CardDescription>
                  Calculate your strata levies based on unit entitlement and building budget
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="unit-entitlement">
                      Your Unit Entitlement
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 inline" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Unit entitlement determines your share of levies. It's based on the relative value and
                              size of your lot.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <span className="text-sm font-medium">{unitEntitlement}</span>
                  </div>
                  <Slider
                    id="unit-entitlement"
                    min={1}
                    max={50}
                    step={1}
                    value={[unitEntitlement]}
                    onValueChange={(value) => setUnitEntitlement(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="total-entitlement">
                      Total Building Entitlement
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 inline" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">The sum of all unit entitlements in your strata scheme.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <span className="text-sm font-medium">{totalEntitlement}</span>
                  </div>
                  <Slider
                    id="total-entitlement"
                    min={50}
                    max={500}
                    step={10}
                    value={[totalEntitlement]}
                    onValueChange={(value) => setTotalEntitlement(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="admin-budget">
                      Administrative Fund Budget
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 inline" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Annual budget for day-to-day expenses like cleaning, gardening, and minor repairs.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <span className="text-sm font-medium">${adminBudget}</span>
                  </div>
                  <Slider
                    id="admin-budget"
                    min={10000}
                    max={100000}
                    step={1000}
                    value={[adminBudget]}
                    onValueChange={(value) => setAdminBudget(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="capital-budget">
                      Capital Works Fund Budget
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 inline" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Annual budget for major repairs and improvements to common property.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <span className="text-sm font-medium">${capitalBudget}</span>
                  </div>
                  <Slider
                    id="capital-budget"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={[capitalBudget]}
                    onValueChange={(value) => setCapitalBudget(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="special-levy" className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={includeSpecialLevy}
                        onChange={(e) => setIncludeSpecialLevy(e.target.checked)}
                      />
                      Special Levy Amount
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 ml-1 inline" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              One-time levy for specific projects like facade repairs or major upgrades.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <span className="text-sm font-medium">${specialLevyAmount}</span>
                  </div>
                  <Slider
                    id="special-levy"
                    min={10000}
                    max={200000}
                    step={5000}
                    value={[specialLevyAmount]}
                    onValueChange={(value) => setSpecialLevyAmount(value[0])}
                    disabled={!includeSpecialLevy}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-frequency">Payment Frequency</Label>
                  <Select value={paymentFrequency} onValueChange={setPaymentFrequency}>
                    <SelectTrigger id="payment-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Levy Calculation</CardTitle>
                <CardDescription>Based on your unit entitlement and building budget</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Your Unit Entitlement:</span>
                    <span>{unitEntitlement} units</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Percentage of Building:</span>
                    <span>{((unitEntitlement / totalEntitlement) * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Administrative Fund Levy:</span>
                    <span>${adminLevy.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Capital Works Fund Levy:</span>
                    <span>${capitalLevy.toFixed(2)}</span>
                  </div>
                  {includeSpecialLevy && (
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Special Levy:</span>
                      <span>${specialLevy.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Total Annual Levy:</span>
                    <span className="font-bold">${totalAnnualLevy.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-bold">
                      {paymentFrequency.charAt(0).toUpperCase() + paymentFrequency.slice(1)} Payment:
                    </span>
                    <span className="text-lg font-bold text-primary">${paymentAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Calculator className="h-4 w-4 mr-2" />
                    Understanding Your Levy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your strata levy is calculated based on your unit entitlement relative to the total building
                    entitlement. This ensures costs are distributed fairly according to the size and value of your
                    property.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Under the NSW Strata Schemes Management Act (2015), levies must be paid on time to maintain the
                    building and ensure all common areas are properly maintained.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button asChild>
                  <Link href="/finances">View Your Payments</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
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
