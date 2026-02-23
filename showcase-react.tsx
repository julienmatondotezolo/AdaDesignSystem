import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { Switch } from './components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { AdaLogo } from './components/ui/ada-logo';

export default function ShowcaseReact() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AdaLogo size="lg" variant="primary" className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ADA Design System v2.0
          </h1>
          <p className="text-xl text-muted-foreground">
            shadcn/ui components with Culinary Minimalism design tokens
          </p>
        </div>

        {/* Logo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Logo Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Size Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Small</p>
                  <AdaLogo size="sm" variant="primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Medium</p>
                  <AdaLogo size="md" variant="primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Large</p>
                  <AdaLogo size="lg" variant="primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Color Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Primary</p>
                  <AdaLogo size="md" variant="primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Secondary</p>
                  <AdaLogo size="md" variant="secondary" />
                </div>
                <div className="bg-gray-900 p-4 rounded-md">
                  <p className="text-sm text-white mb-2">White</p>
                  <AdaLogo size="md" variant="white" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Hover to see effect
                  </p>
                  <AdaLogo size="md" variant="primary" interactive className="cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Buttons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Button Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="default">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Button Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="sm">Small Button</Button>
                <Button size="default">Default Button</Button>
                <Button size="lg">Large Button</Button>
                <Button size="icon">🚀</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Form Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" placeholder="Enter password" />
                </div>
                <div>
                  <Label htmlFor="search">Search</Label>
                  <Input type="search" placeholder="Search..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select & Switch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="restaurant">Restaurant</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose restaurant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="losteria">L'Osteria Deerlijk</SelectItem>
                      <SelectItem value="victor">Restaurant Victor</SelectItem>
                      <SelectItem value="demo">Demo Restaurant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="analytics" />
                  <Label htmlFor="analytics">Analytics tracking</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Status Badges
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Badge Variants</CardTitle>
              <CardDescription>
                Status indicators for restaurant operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Active</Badge>
                <Badge variant="secondary">Pending</Badge>
                <Badge variant="success">Completed</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Data Table
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Menu Items</CardTitle>
              <CardDescription>
                Restaurant menu items with pricing and status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Margherita Pizza</TableCell>
                    <TableCell>Pizza</TableCell>
                    <TableCell>€14.50</TableCell>
                    <TableCell>
                      <Badge variant="success">Available</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Spaghetti Carbonara</TableCell>
                    <TableCell>Pasta</TableCell>
                    <TableCell>€12.50</TableCell>
                    <TableCell>
                      <Badge variant="success">Available</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tiramisu</TableCell>
                    <TableCell>Dessert</TableCell>
                    <TableCell>€6.50</TableCell>
                    <TableCell>
                      <Badge variant="warning">Low Stock</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Usage Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-4">
            Usage in ADA Apps
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Import Components</CardTitle>
              <CardDescription>
                How to use these components in your Next.js ADA apps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button"
import { AdaLogo } from "@/components/ui/ada-logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RestaurantDashboard() {
  return (
    <div className="p-8">
      <AdaLogo size="md" variant="primary" />
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Today's Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>View Details</Button>
        </CardContent>
      </Card>
    </div>
  )
}`}
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <AdaLogo size="sm" variant="muted" className="mx-auto mb-4" />
          <p className="text-muted-foreground">
            ADA Design System v2.0 - Built with shadcn/ui
          </p>
        </footer>
      </div>
    </div>
  );
}