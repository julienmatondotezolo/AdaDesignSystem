# 🚀 ADA Design System Integration Guide

Quick setup guide for importing ADA Design System components into your Next.js menu builder project.

## 📦 Method 1: Copy Components (Recommended)

### 1. Install Required Dependencies

```bash
npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-dialog @radix-ui/react-avatar @radix-ui/react-progress @radix-ui/react-toast class-variance-authority clsx country-flag-icons lucide-react tailwind-merge tailwindcss-animate
```

### 2. Setup Tailwind Configuration

Create or update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ADA Brand Colors - Your Original Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Pure White #FFFFFF
        foreground: "hsl(var(--foreground))",
        
        // Your Electric Blue & Atmospheric Blue
        primary: {
          DEFAULT: "hsl(var(--primary))", // #4d6aff Electric Blue
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // #45b9ee Atmospheric Blue
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. Add CSS Variables

Create or update your `app/globals.css` or `styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ADA Design System - Your Original Brand Colors */
    --background: 0 0% 100%; /* Pure White #FFFFFF */
    --foreground: 224 71% 4%;
    
    --card: 0 0% 100%;
    --card-foreground: 224 71% 4%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 224 71% 4%;
    
    /* Primary - Electric/Professional Blue #4d6aff */
    --primary: 232 100% 66%;
    --primary-foreground: 210 40% 98%;
    
    /* Secondary - Tech/Atmospheric Blue #45b9ee */
    --secondary: 201 85% 60%;
    --secondary-foreground: 210 40% 98%;
    
    /* Muted */
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    
    /* Accent - Professional Cyan */
    --accent: 199 89% 48%;
    --accent-foreground: 210 40% 98%;
    
    /* Success - Professional Green */
    --success: 142 76% 36%;
    --success-foreground: 210 40% 98%;
    
    /* Warning - Professional Orange */
    --warning: 32 95% 44%;
    --warning-foreground: 210 40% 98%;
    
    /* Destructive - Professional Red */
    --destructive: 346 87% 43%;
    --destructive-foreground: 210 40% 98%;
    
    /* Border & Input */
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 232 100% 66%; /* Electric Blue for focus rings */
    
    /* Radius */
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    
    --primary: 232 100% 66%;
    --primary-foreground: 222.2 84% 4.9%;
    
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 232 100% 66%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
}
```

### 4. Create Utils Helper

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. Copy Components You Need

Copy these components from the ADA Design System to your project:

```bash
# Essential components for menu builder
cp AdaDesignSystem/components/ui/button.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/card.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/input.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/label.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/badge.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/select.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/switch.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/table.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/dialog.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/progress.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/spinner.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/ada-logo.tsx your-project/components/ui/
cp AdaDesignSystem/components/ui/language-switcher.tsx your-project/components/ui/
cp AdaDesignSystem/lib/i18n.ts your-project/lib/
```

## 🍽️ Menu Builder Example Usage

Here's how to use the components in your menu builder:

### Basic Menu Builder Layout

```tsx
'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AdaLogo } from '@/components/ui/ada-logo'
import { LanguageSwitcher, useLocale } from '@/components/ui/language-switcher'
import { Progress } from '@/components/ui/progress'
import { Spinner } from '@/components/ui/spinner'
import { Plus, Edit, Trash2, Save } from 'lucide-react'

export default function MenuBuilder() {
  const { locale, setLocale } = useLocale()
  const [loading, setLoading] = useState(false)
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 14.50, status: 'available' },
    { id: 2, name: 'Spaghetti Carbonara', category: 'Pasta', price: 12.50, status: 'available' },
    { id: 3, name: 'Tiramisu', category: 'Dessert', price: 6.50, status: 'low-stock' },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <AdaLogo size="md" variant="primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Menu Builder</h1>
                <p className="text-muted-foreground">Create and manage your restaurant menu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher 
                currentLocale={locale}
                onLocaleChange={setLocale}
                variant="minimal"
              />
              <Button variant="default">
                <Save className="mr-2 h-4 w-4" />
                Save Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Menu Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Manage menu categories</CardDescription>
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
                <Button variant="outline" className="w-full" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Menu Items */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Menu Items</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Menu Item
                  </Button>
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
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pizza">Pizza</SelectItem>
                          <SelectItem value="pasta">Pasta</SelectItem>
                          <SelectItem value="dessert">Dessert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="price">Price (€)</Label>
                      <Input id="price" type="number" placeholder="0.00" step="0.01" />
                    </div>
                    <div className="flex justify-end space-x-2 mt-6">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="default">Add Item</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Menu Items Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
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
                            variant={item.status === 'available' ? 'success' : 'warning'}
                          >
                            {item.status === 'available' ? 'Available' : 'Low Stock'}
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

            {/* Progress/Loading Example */}
            {loading && (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Spinner size="sm" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Saving menu changes...</p>
                      <Progress value={65} className="mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Quick Import Reference

For menu builder, you'll most likely need:

```tsx
// Core UI
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Data Display  
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

// Forms & Controls
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

// Dialogs & Modals
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

// Loading States
import { Progress } from '@/components/ui/progress'
import { Spinner } from '@/components/ui/spinner'

// Branding
import { AdaLogo } from '@/components/ui/ada-logo'
import { LanguageSwitcher, useLocale } from '@/components/ui/language-switcher'

// Icons
import { Plus, Edit, Trash2, Save } from 'lucide-react'
```

## 🎨 Your Brand Colors Are Ready

All components automatically use your ADA brand colors:
- **Electric Blue** (`#4d6aff`) for primary actions
- **Atmospheric Blue** (`#45b9ee`) for secondary elements  
- **Pure White** background with professional typography

Just import and use - the brand colors are built in! 🚀