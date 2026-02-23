'use client'

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { AdaLogo } from '../components/ui/ada-logo';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Progress } from '../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Plus, Bell, User, Settings, Calendar, Star } from 'lucide-react';

export default function HomePage() {
  const [progress, setProgress] = useState(60)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AdaLogo size="lg" variant="primary" className="mx-auto mb-8" />
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ADA Design System v2.0
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern, vibrant components built on shadcn/ui with premium hospitality design
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Modern Color System</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-muted-foreground">Primary</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-primary rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-primary/80 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-primary/60 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-primary/40 rounded-lg shadow-sm"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-muted-foreground">Secondary</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-secondary rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-secondary/80 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-secondary/60 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-secondary/40 rounded-lg shadow-sm"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-muted-foreground">Accent</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-accent rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-success rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-warning rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-destructive rounded-lg shadow-sm"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-muted-foreground">Pink</h3>
              <div className="space-y-2">
                <div className="w-full h-12 bg-pink rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-pink/80 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-pink/60 rounded-lg shadow-sm"></div>
                <div className="w-full h-12 bg-pink/40 rounded-lg shadow-sm"></div>
              </div>
            </div>
          </div>
        </section>

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
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Modern Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Button Variants</CardTitle>
                <CardDescription>All available button styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="default" className="w-full">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary Button</Button>
                <Button variant="accent" className="w-full">Accent Button</Button>
                <Button variant="success" className="w-full">Success Button</Button>
                <Button variant="warning" className="w-full">Warning Button</Button>
                <Button variant="pink" className="w-full">Pink Button</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
                <Button variant="ghost" className="w-full">Ghost Button</Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Button Sizes</CardTitle>
                <CardDescription>From tiny to extra large</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col items-center">
                <Button size="tiny" variant="default">Tiny Button</Button>
                <Button size="sm" variant="default">Small Button</Button>
                <Button size="default" variant="default">Default Button</Button>
                <Button size="lg" variant="default">Large Button</Button>
                <Button size="xl" variant="default">Extra Large</Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Icon Buttons</CardTitle>
                <CardDescription>With icons and states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Button size="icon-sm" variant="default"><Plus className="h-4 w-4" /></Button>
                  <Button size="icon" variant="secondary"><Bell className="h-4 w-4" /></Button>
                  <Button size="icon-lg" variant="accent"><User className="h-4 w-4" /></Button>
                </div>
                <Button className="w-full" variant="default">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Item
                </Button>
                <Button className="w-full" variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress & Avatars */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Progress & Avatars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Progress Bars</CardTitle>
                <CardDescription>
                  Track completion and loading states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Order Progress</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} variant="default" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Daily Target</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} variant="success" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Storage Used</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} variant="warning" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Error Rate</span>
                    <span>15%</span>
                  </div>
                  <Progress value={15} variant="destructive" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">User Avatars</CardTitle>
                <CardDescription>
                  Team member profiles and user representation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Sizes</p>
                  <div className="flex items-center gap-4">
                    <Avatar size="sm">
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Avatar size="default">
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <Avatar size="xl">
                      <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Team Members</p>
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white">
                      <AvatarFallback className="bg-primary text-primary-foreground">AQ</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarFallback className="bg-secondary text-secondary-foreground">VM</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarFallback className="bg-accent text-accent-foreground">PS</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarFallback className="bg-pink text-pink-foreground">+3</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dialogs & Popups */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Dialogs & Modals</h2>
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Modal Examples</CardTitle>
              <CardDescription>
                Interactive dialogs and confirmation modals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                      <DialogDescription>
                        This action will permanently delete this item. This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Add Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Menu Item</DialogTitle>
                      <DialogDescription>
                        Create a new item for your restaurant menu.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="item-name">Item Name</Label>
                        <Input id="item-name" placeholder="Enter item name" />
                      </div>
                      <div>
                        <Label htmlFor="item-price">Price</Label>
                        <Input id="item-price" placeholder="€0.00" />
                      </div>
                      <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="success">Add Item</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="accent">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Restaurant Settings</DialogTitle>
                      <DialogDescription>
                        Configure your restaurant preferences and settings.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Push Notifications</Label>
                        <Switch id="notifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="analytics">Analytics Tracking</Label>
                        <Switch id="analytics" />
                      </div>
                      <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="default">Save Changes</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
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
                      <SelectItem value="losteria">L&apos;Osteria Deerlijk</SelectItem>
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

        {/* Badges & Tags */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Tags & Status Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Status Badges</CardTitle>
                <CardDescription>
                  Colorful status indicators for operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Restaurant Status</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="active">Active</Badge>
                    <Badge variant="pending">Pending</Badge>
                    <Badge variant="confirmed">Confirmed</Badge>
                    <Badge variant="cancelled">Cancelled</Badge>
                    <Badge variant="alert">Alert</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Color Variants</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="pink">Pink</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Error</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Sizes & Styles</CardTitle>
                <CardDescription>
                  Different badge sizes and outline styles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Sizes</p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge size="sm" variant="default">Small</Badge>
                    <Badge size="default" variant="default">Default</Badge>
                    <Badge size="lg" variant="default">Large</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Outline Style</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Draft</Badge>
                    <Badge variant="outline">Review</Badge>
                    <Badge variant="outline">Inactive</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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