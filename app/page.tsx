'use client'

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { AdaLogo } from '../components/ui/ada-logo';
import { LanguageSwitcher, useLocale } from '../components/ui/language-switcher';
import { FontViewer } from '../components/ui/font-viewer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Progress, LoadingProgress, CircularProgress, StepProgress } from '../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonList } from '../components/ui/skeleton';
import { Spinner, LoadingOverlay, PulseLoader, PageLoader, LoadingButton } from '../components/ui/spinner';
import { t, type Locale } from '../lib/i18n';
import { Plus, Settings, User, Bell, RefreshCw, Download } from 'lucide-react';

export default function HomePage() {
  const { locale, setLocale } = useLocale()
  const [loading, setLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const content = {
    en: {
      title: 'ADA Design System',
      subtitle: 'Professional typography with your brand colors',
      description: 'Built with shadcn/ui, React, and TypeScript using ADA Electric Blue (#4d6aff) and Atmospheric Blue (#45b9ee).',
      sections: {
        colors: 'ADA Brand Colors',
        typography: 'Typography Showcase',
        components: 'Core Components',
        loading: 'Loading States & Progress',
        skeletons: 'Skeleton Loaders',
        dialogs: 'Dialogs & Modals',
        forms: 'Form Elements',
        data: 'Data Display',
        usage: 'Usage Example'
      },
      typography: {
        modern: 'Modern typography',
        clean: 'Clean interface',
        professional: 'Professional aesthetic'
      },
      menu: {
        margherita: 'Margherita Pizza',
        carbonara: 'Spaghetti Carbonara',
        tiramisu: 'Tiramisu',
        pizza: 'Pizza',
        pasta: 'Pasta',
        dessert: 'Dessert',
        available: 'Available',
        lowStock: 'Low Stock'
      }
    },
    fr: {
      title: 'Système de Design ADA',
      subtitle: 'Typographie professionnelle avec vos couleurs de marque',
      description: 'Construit avec shadcn/ui, React et TypeScript utilisant ADA Electric Blue (#4d6aff) et Atmospheric Blue (#45b9ee).',
      sections: {
        colors: 'Couleurs de Marque ADA',
        typography: 'Présentation Typographie',
        components: 'Composants Principaux',
        loading: 'États de Chargement et Progression',
        skeletons: 'Chargeurs Squelettes',
        dialogs: 'Dialogues et Modales',
        forms: 'Éléments de Formulaire',
        data: 'Affichage de Données',
        usage: 'Exemple d\'Utilisation'
      },
      typography: {
        modern: 'Typographie moderne',
        clean: 'Interface épurée',
        professional: 'Esthétique professionnelle'
      },
      menu: {
        margherita: 'Pizza Margherita',
        carbonara: 'Spaghetti Carbonara',
        tiramisu: 'Tiramisu',
        pizza: 'Pizza',
        pasta: 'Pâtes',
        dessert: 'Dessert',
        available: 'Disponible',
        lowStock: 'Stock Bas'
      }
    },
    nl: {
      title: 'ADA Design Systeem',
      subtitle: 'Professionele typografie met uw merkkleuren',
      description: 'Gebouwd met shadcn/ui, React en TypeScript met ADA Electric Blue (#4d6aff) en Atmospheric Blue (#45b9ee).',
      sections: {
        colors: 'ADA Merkkleurenpalette',
        typography: 'Typografie Showcase',
        components: 'Kerncomponenten',
        loading: 'Laadstatussen en Voortgang',
        skeletons: 'Skelet Laders',
        dialogs: 'Dialogen en Modals',
        forms: 'Formulierelementen',
        data: 'Gegevensweergave',
        usage: 'Gebruiksvoorbeeld'
      },
      typography: {
        modern: 'Moderne typografie',
        clean: 'Schone interface',
        professional: 'Professionele esthetiek'
      },
      menu: {
        margherita: 'Margherita Pizza',
        carbonara: 'Spaghetti Carbonara',
        tiramisu: 'Tiramisu',
        pizza: 'Pizza',
        pasta: 'Pasta',
        dessert: 'Dessert',
        available: 'Beschikbaar',
        lowStock: 'Lage Voorraad'
      }
    }
  }

  const t = content[locale]
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-6">
        {/* Clean Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <AdaLogo size="lg" variant="primary" />
            <LanguageSwitcher
              currentLocale={locale}
              onLocaleChange={setLocale}
              variant="minimal"
              size="sm"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl font-medium text-muted-foreground mb-6 tracking-wide">
            {t.subtitle}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* ADA Brand Colors Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.colors}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Primary Blue</CardTitle>
                <CardDescription>Electric/Professional Blue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 bg-primary rounded-lg shadow-sm"></div>
                <div className="text-center">
                  <div className="font-mono text-sm font-medium">#4d6aff</div>
                  <div className="text-xs text-muted-foreground">HSL(232, 100%, 66%)</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">Primary</Button>
                  <Badge variant="default">Active</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Secondary Blue</CardTitle>
                <CardDescription>Tech/Atmospheric Blue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 bg-secondary rounded-lg shadow-sm"></div>
                <div className="text-center">
                  <div className="font-mono text-sm font-medium">#45b9ee</div>
                  <div className="text-xs text-muted-foreground">HSL(201, 85%, 60%)</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">Secondary</Button>
                  <Badge variant="secondary">Info</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Background</CardTitle>
                <CardDescription>Pure White Base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-24 bg-background border-2 border-border rounded-lg"></div>
                <div className="text-center">
                  <div className="font-mono text-sm font-medium">#FFFFFF</div>
                  <div className="text-xs text-muted-foreground">HSL(0, 0%, 100%)</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Outline</Button>
                  <Badge variant="outline">Clean</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Font Viewer Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.typography}
          </h2>
          <div className="text-center mb-8">
            <Button variant="outline" asChild>
              <a href="/fonts">
                {locale === 'fr' ? 'Voir la Présentation Complète des Polices →' : 
                 locale === 'nl' ? 'Bekijk Volledige Lettertype Showcase →' : 
                 'View Full Typography Showcase →'}
              </a>
            </Button>
          </div>
          <FontViewer 
            language={locale}
            className="max-w-4xl mx-auto"
          />
        </section>

        {/* Core Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.components}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Button Variants</CardTitle>
                <CardDescription>ADA brand colors in action</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="default" className="w-full">Primary Action</Button>
                <Button variant="secondary" className="w-full">Secondary Action</Button>
                <Button variant="accent" className="w-full">Accent Button</Button>
                <Button variant="success" className="w-full">Success Button</Button>
                <Button variant="outline" className="w-full">Outline Style</Button>
                <Button variant="ghost" className="w-full">Ghost Style</Button>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Status Badges</CardTitle>
                <CardDescription>Clean status indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">{t.menu.available}</Badge>
                  <Badge variant="warning">{t.menu.lowStock}</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Icon Actions</CardTitle>
                <CardDescription>Professional iconography</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button size="icon" variant="default">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <User className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loading States & Progress Bars */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.loading}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Progress Bars */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Progress Bars</CardTitle>
                <CardDescription>Track completion states</CardDescription>
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
                    <span>Loading...</span>
                  </div>
                  <LoadingProgress variant="default" />
                </div>
              </CardContent>
            </Card>

            {/* Spinners & Loaders */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Spinners & Loaders</CardTitle>
                <CardDescription>Loading indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Spinner Sizes</p>
                  <div className="flex items-center gap-4">
                    <Spinner size="xs" variant="primary" />
                    <Spinner size="sm" variant="secondary" />
                    <Spinner size="default" variant="accent" />
                    <Spinner size="lg" variant="success" />
                    <Spinner size="xl" variant="warning" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Pulse Loaders</p>
                  <div className="space-y-3">
                    <PulseLoader variant="dots" />
                    <PulseLoader variant="bars" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Circular Progress</p>
                  <div className="flex gap-3">
                    <CircularProgress value={25} size={50} variant="default" showValue />
                    <CircularProgress value={65} size={50} variant="secondary" showValue />
                    <CircularProgress value={90} size={50} variant="success" showValue />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loading Buttons & Overlay */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Loading States</CardTitle>
                <CardDescription>Interactive loading demos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Button States</p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setButtonLoading(true)
                        setTimeout(() => setButtonLoading(false), 2000)
                      }}
                      disabled={buttonLoading}
                    >
                      {buttonLoading && <Spinner size="sm" variant="white" className="mr-2" />}
                      {buttonLoading ? 'Processing...' : 'Process Order'}
                    </Button>
                    <Button variant="secondary" className="w-full" disabled>
                      <Spinner size="sm" className="mr-2" />
                      Loading Data...
                    </Button>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Loading Overlay</p>
                  <LoadingOverlay loading={loading} text="Loading content...">
                    <div className="p-4 border rounded-lg">
                      <p>Content with overlay loading state.</p>
                      <Button 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          setLoading(true)
                          setTimeout(() => setLoading(false), 2000)
                        }}
                      >
                        Trigger Loading
                      </Button>
                    </div>
                  </LoadingOverlay>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skeleton Loaders */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.skeletons}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Basic Skeletons</CardTitle>
                <CardDescription>Content placeholders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Avatars</p>
                  <div className="flex gap-3">
                    <SkeletonAvatar size="sm" />
                    <SkeletonAvatar size="default" />
                    <SkeletonAvatar size="lg" />
                    <SkeletonAvatar size="xl" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Text Lines</p>
                  <SkeletonText lines={1} />
                  <SkeletonText lines={3} />
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Buttons</p>
                  <div className="flex gap-2">
                    <SkeletonButton />
                    <SkeletonButton className="w-24" />
                    <SkeletonButton className="w-16" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Complex Skeletons</CardTitle>
                <CardDescription>Full layouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">List Items</p>
                  <SkeletonList items={3} withAvatar />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Full Width Skeleton Examples */}
          <div className="mt-8 space-y-8">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Card Skeleton</CardTitle>
                <CardDescription>Loading placeholder for complete cards</CardDescription>
              </CardHeader>
              <CardContent>
                <SkeletonCard />
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Table Skeleton</CardTitle>
                <CardDescription>Loading placeholder for data tables</CardDescription>
              </CardHeader>
              <CardContent>
                <SkeletonTable rows={4} columns={4} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dialogs & Modals */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.dialogs}
          </h2>
          
          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Interactive Dialogs</CardTitle>
              <CardDescription>
                Modal dialogs and confirmation popups
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
                        <Button variant="default">Add Item</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
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
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.forms}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="restaurant">Restaurant</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose restaurant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="losteria">L'Osteria Deerlijk</SelectItem>
                      <SelectItem value="victor">Restaurant Victor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Toggle Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Settings</Label>
                  <Switch id="notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics">Analytics</Label>
                  <Switch id="analytics" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.data}
          </h2>
          
          <Card className="border border-border bg-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Menu Items</CardTitle>
              <CardDescription>Restaurant menu with pricing</CardDescription>
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
                    <TableCell className="font-medium">{t.menu.margherita}</TableCell>
                    <TableCell>{t.menu.pizza}</TableCell>
                    <TableCell>€14.50</TableCell>
                    <TableCell>
                      <Badge variant="success">{t.menu.available}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.menu.carbonara}</TableCell>
                    <TableCell>{t.menu.pasta}</TableCell>
                    <TableCell>€12.50</TableCell>
                    <TableCell>
                      <Badge variant="success">{t.menu.available}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t.menu.tiramisu}</TableCell>
                    <TableCell>{t.menu.dessert}</TableCell>
                    <TableCell>€6.50</TableCell>
                    <TableCell>
                      <Badge variant="warning">{t.menu.lowStock}</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Usage Example */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.usage}
          </h2>
          
          <Card className="border border-border bg-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Import Components</CardTitle>
              <CardDescription>
                How to use in your ADA applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-6 rounded-md text-sm overflow-x-auto border">
{`import { Button } from "@/components/ui/button"
import { AdaLogo } from "@/components/ui/ada-logo"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { Progress, Spinner, LoadingOverlay } from "@/components/ui"

export default function RestaurantDashboard() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <AdaLogo size="md" variant="primary" />
        <LanguageSwitcher 
          currentLocale={locale}
          onLocaleChange={setLocale}
        />
      </div>
      
      <Button variant="default">
        <Plus className="mr-2 h-4 w-4" />
        Add Order
      </Button>
      
      <Progress value={75} variant="default" className="mt-4" />
    </div>
  )
}`}
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Clean Footer */}
        <footer className="text-center py-12 border-t border-border">
          <AdaLogo size="sm" variant="primary" className="mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            ADA Design System v3.0 - Your Brand Colors Edition
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Professional Blue (#4d6aff) • Atmospheric Blue (#45b9ee) • Pure White Background
          </p>
        </footer>
      </div>
    </div>
  );
}