// Example: How to use ADA Design System as an installed package
// After: npm install @ada-systems/design-system

'use client'

import React, { useState } from 'react'
// Import all components directly from the package
import { 
  Button, 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Input,
  Label,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  AdaLogo,
  LanguageSwitcher,
  useLocale,
  Progress,
  Spinner
} from '@ada-systems/design-system'

// Import the CSS styles
import '@ada-systems/design-system/styles'

// Import icons
import { Plus, Edit, Trash2, Save } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  category: string
  price: number
  status: 'available' | 'low-stock' | 'out-of-stock'
}

export default function MenuBuilderWithPackage() {
  const { locale, setLocale } = useLocale()
  const [saving, setSaving] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 14.50, status: 'available' },
    { id: 2, name: 'Spaghetti Carbonara', category: 'Pasta', price: 12.50, status: 'available' },
    { id: 3, name: 'Tiramisu', category: 'Dessert', price: 6.50, status: 'low-stock' },
  ])

  const handleSaveMenu = () => {
    setSaving(true)
    setTimeout(() => setSaving(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with ADA branding - Electric Blue automatically applied */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* ADA Logo with your Electric Blue brand color */}
              <AdaLogo size="md" variant="primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">ADA Menu Builder</h1>
                <p className="text-muted-foreground">Professional menu management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language switcher with SVG flags (Windows compatible) */}
              <LanguageSwitcher 
                currentLocale={locale}
                onLocaleChange={setLocale}
                variant="minimal"
              />
              
              {/* Primary action button - Electric Blue styling */}
              <Button variant="default" onClick={handleSaveMenu} disabled={saving}>
                {saving ? (
                  <>
                    <Spinner size="sm" className="mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Menu
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Menu organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  🍕 Pizza
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  🍝 Pasta  
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  🍰 Desserts
                </Button>
                
                {/* Add Category Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Category
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Category</DialogTitle>
                      <DialogDescription>
                        Create a new menu category for organizing items.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="category-name">Category Name</Label>
                        <Input id="category-name" placeholder="e.g. Appetizers" />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="default">Add Category</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {locale === 'fr' ? 'Articles du Menu' : 
                 locale === 'nl' ? 'Menu Items' : 
                 'Menu Items'}
              </h2>
              
              {/* Add Menu Item Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    <Plus className="mr-2 h-4 w-4" />
                    {locale === 'fr' ? 'Ajouter Article' : 
                     locale === 'nl' ? 'Item Toevoegen' : 
                     'Add Menu Item'}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {locale === 'fr' ? 'Nouvel Article du Menu' : 
                       locale === 'nl' ? 'Nieuw Menu Item' : 
                       'Add New Menu Item'}
                    </DialogTitle>
                    <DialogDescription>
                      {locale === 'fr' ? 'Créer un nouvel article pour votre menu restaurant.' : 
                       locale === 'nl' ? 'Maak een nieuw item voor uw restaurantmenu.' : 
                       'Create a new item for your restaurant menu.'}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="item-name">
                        {locale === 'fr' ? 'Nom de l\'article' : 
                         locale === 'nl' ? 'Naam van item' : 
                         'Item Name'}
                      </Label>
                      <Input id="item-name" placeholder={
                        locale === 'fr' ? 'Entrez le nom' : 
                        locale === 'nl' ? 'Voer naam in' : 
                        'Enter item name'
                      } />
                    </div>
                    <div>
                      <Label htmlFor="category">
                        {locale === 'fr' ? 'Catégorie' : 
                         locale === 'nl' ? 'Categorie' : 
                         'Category'}
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={
                            locale === 'fr' ? 'Sélectionnez catégorie' : 
                            locale === 'nl' ? 'Selecteer categorie' : 
                            'Select category'
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pizza">Pizza</SelectItem>
                          <SelectItem value="pasta">Pasta</SelectItem>
                          <SelectItem value="dessert">
                            {locale === 'fr' ? 'Dessert' : 
                             locale === 'nl' ? 'Nagerecht' : 
                             'Dessert'}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="price">
                        {locale === 'fr' ? 'Prix (€)' : 
                         locale === 'nl' ? 'Prijs (€)' : 
                         'Price (€)'}
                      </Label>
                      <Input id="price" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                      <Button variant="outline">
                        {locale === 'fr' ? 'Annuler' : 
                         locale === 'nl' ? 'Annuleren' : 
                         'Cancel'}
                      </Button>
                      <Button variant="default">
                        {locale === 'fr' ? 'Ajouter' : 
                         locale === 'nl' ? 'Toevoegen' : 
                         'Add Item'}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Progress bar if saving */}
            {saving && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Spinner size="sm" variant="primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {locale === 'fr' ? 'Sauvegarde du menu...' : 
                         locale === 'nl' ? 'Menu opslaan...' : 
                         'Saving menu changes...'}
                      </p>
                      <Progress value={65} className="mt-2" variant="default" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Menu Items Table - with your ADA brand colors */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        {locale === 'fr' ? 'Article' : 
                         locale === 'nl' ? 'Item' : 
                         'Item'}
                      </TableHead>
                      <TableHead>
                        {locale === 'fr' ? 'Catégorie' : 
                         locale === 'nl' ? 'Categorie' : 
                         'Category'}
                      </TableHead>
                      <TableHead>
                        {locale === 'fr' ? 'Prix' : 
                         locale === 'nl' ? 'Prijs' : 
                         'Price'}
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menuItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>€{item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              item.status === 'available' ? 'success' : 
                              item.status === 'low-stock' ? 'warning' : 
                              'destructive'
                            }
                          >
                            {item.status === 'available' ? (
                              locale === 'fr' ? 'Disponible' : 
                              locale === 'nl' ? 'Beschikbaar' : 
                              'Available'
                            ) : item.status === 'low-stock' ? (
                              locale === 'fr' ? 'Stock Bas' : 
                              locale === 'nl' ? 'Lage Voorraad' : 
                              'Low Stock'
                            ) : (
                              locale === 'fr' ? 'Rupture' : 
                              locale === 'nl' ? 'Uitverkocht' : 
                              'Out of Stock'
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}