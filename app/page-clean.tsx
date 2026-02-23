'use client'

import React from 'react';
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
import { t, type Locale } from '../lib/i18n';
import { Plus, Settings, User } from 'lucide-react';

export default function CleanShowcase() {
  const { locale, setLocale } = useLocale()
  const translate = t(locale)

  const content = {
    en: {
      title: 'ADA Design System',
      subtitle: 'Professional typography without gradients™',
      description: 'Built with shadcn/ui, React, and TypeScript. Copy and paste into any ADA application.',
      sections: {
        typography: 'Typography Showcase',
        components: 'Core Components',
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
      subtitle: 'Typographie professionnelle sans dégradés™',
      description: 'Construit avec shadcn/ui, React et TypeScript. Copiez et collez dans n\'importe quelle application ADA.',
      sections: {
        typography: 'Présentation Typographie',
        components: 'Composants Principaux',
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
      subtitle: 'Professionele typografie zonder verloopkleuren™',
      description: 'Gebouwd met shadcn/ui, React en TypeScript. Kopieer en plak in elke ADA-toepassing.',
      sections: {
        typography: 'Typografie Showcase',
        components: 'Kerncomponenten',
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
        {/* Clean Header - No Gradients */}
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

        {/* Typography Section - Inspired by Visuelt Pro */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.typography}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                Heading 1 / Bold
              </div>
              <div className="text-4xl font-bold text-foreground leading-tight">
                {t.typography.modern}
              </div>
              <div className="text-sm text-muted-foreground">
                48px / 110% line height<br />
                Spacing: -1%<br />
                Font: Bold
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                Headline 2 / Medium  
              </div>
              <div className="text-2xl font-medium text-foreground leading-tight">
                {t.typography.clean}
              </div>
              <div className="text-sm text-muted-foreground">
                24px / 110% line height<br />
                Spacing: 0%<br />
                Font: Medium
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                Body / Regular
              </div>
              <div className="text-base text-muted-foreground leading-relaxed">
                {t.typography.professional}
              </div>
              <div className="text-sm text-muted-foreground">
                16px / 150% line height<br />
                Spacing: 0%<br />
                Font: Regular
              </div>
            </div>
          </div>
        </section>

        {/* Clean Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t.sections.components}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Button Variants</CardTitle>
                <CardDescription>Professional button styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="default" className="w-full">Primary Action</Button>
                <Button variant="secondary" className="w-full">Secondary Action</Button>
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
                  <Badge variant="success">{t.menu.available}</Badge>
                  <Badge variant="warning">{t.menu.lowStock}</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="outline">Inactive</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Icon Actions</CardTitle>
                <CardDescription>Clean iconography</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <User className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  {translate('common.add')}
                </Button>
              </CardContent>
            </Card>
          </div>
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
                  <Label htmlFor="notifications">{translate('navigation.settings')}</Label>
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
        Professional Action
      </Button>
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
            ADA Design System v3.0 - Clean Typography Edition
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with shadcn/ui • No gradients • Professional aesthetic
          </p>
        </footer>
      </div>
    </div>
  );
}