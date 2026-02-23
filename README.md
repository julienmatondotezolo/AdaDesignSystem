# 🎨 Ada Design System

**Professional Typography With Your Brand Colors™** - Clean shadcn/ui design system with multilingual support for restaurant management applications.

[![NPM Package](https://img.shields.io/npm/v/ada-design-system?color=blue&label=npm)](https://www.npmjs.com/package/ada-design-system)
[![Downloads](https://img.shields.io/npm/dm/ada-design-system)](https://www.npmjs.com/package/ada-design-system)
![MIT License](https://img.shields.io/badge/License-MIT-green)
![shadcn/ui](https://img.shields.io/badge/Built%20with-shadcn%2Fui-black)
![Multilingual](https://img.shields.io/badge/Languages-EN%2FFR%2FNL-orange)

## 🚀 Quick Start

```bash
npm install ada-design-system
```

```tsx
import { Button, AdaLogo, Card, CardHeader, CardTitle } from "ada-design-system"
import "ada-design-system/styles.css"

export default function App() {
  return (
    <Card className="p-6">
      <CardHeader>
        <div className="flex items-center gap-3">
          <AdaLogo size="md" variant="primary" />
          <CardTitle>Welcome to ADA</CardTitle>
        </div>
      </CardHeader>
      <Button>Get Started</Button>
    </Card>
  )
}
```

## 🎯 Design Philosophy

**"Professional Typography Without Gradients™"**

Inspired by professional typography like Visuelt Pro, this design system emphasizes clean, readable interfaces without gradient effects. Built on shadcn/ui with clear hierarchy, consistent spacing, and international language support.

---

## ✨ Features

- 🚫 **No Gradients** - Clean, professional aesthetic without color gradients
- 🌍 **Multilingual Support** - Built-in English, French, and Dutch translations
- 🔤 **Typography Focus** - Emphasis on hierarchy, spacing, and readability
- 🎛️ **Language Switcher** - Easy language switching component
- 📝 **Clean Components** - Removed all gradient styling for professional look
- 🏷️ **International** - Ready for Belgian/European market deployment
- 🎨 **ADA Brand Colors** - Professional Blue (#4d6aff) + Atmospheric Blue (#45b9ee)
- 📦 **NPM Package** - Easy installation and updates
- 🔧 **TypeScript** - Full type support included

## 📦 Installation

```bash
# Install the package
npm install ada-design-system

# Install peer dependencies (if not already installed)
npm install react react-dom
```

### Setup in Your App

**1. Import the CSS (required):**
```tsx
// In your main layout.tsx, _app.tsx, or index.tsx
import "ada-design-system/styles.css"
```

**2. Update Tailwind Config (recommended):**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ada-design-system/dist/**/*.{js,ts,jsx,tsx}', // Add this
  ],
  // ... rest of your config
}
```

## 🎨 AdaLogo Usage

The AdaLogo component displays your professional ADA brand:

```tsx
import { AdaLogo } from "ada-design-system"

// Different sizes
<AdaLogo size="sm" />   // 24px height
<AdaLogo size="md" />   // 32px height  
<AdaLogo size="lg" />   // 48px height
<AdaLogo size="xl" />   // 64px height

// Different variants
<AdaLogo variant="primary" />    // Electric Blue (#4d6aff)
<AdaLogo variant="secondary" />  // Atmospheric Blue (#45b9ee)
<AdaLogo variant="white" />      // White (for dark backgrounds)
<AdaLogo variant="dark" />       // Dark gray

// Combined usage
<AdaLogo size="lg" variant="primary" className="mb-4" />
```

## 🧩 Component Examples

### Basic UI Components

```tsx
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Input,
  Label,
  Badge
} from "ada-design-system"

export default function RestaurantCard() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AdaLogo size="sm" />
          L'Osteria Deerlijk
          <Badge variant="success">Open</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="capacity">Table Capacity</Label>
          <Input id="capacity" placeholder="Enter capacity" />
        </div>
        <Button className="w-full">Update Menu</Button>
      </CardContent>
    </Card>
  )
}
```

### Loading States

```tsx
import { 
  Spinner, 
  Progress, 
  LoadingButton, 
  SkeletonCard 
} from "ada-design-system"

export default function LoadingStates() {
  return (
    <div className="space-y-4">
      {/* Spinners */}
      <Spinner size="sm" variant="primary" />
      <Spinner size="lg" variant="secondary" />
      
      {/* Progress bars */}
      <Progress value={75} className="w-full" />
      
      {/* Loading buttons */}
      <LoadingButton loading={true}>
        Saving Menu...
      </LoadingButton>
      
      {/* Skeleton placeholders */}
      <SkeletonCard />
    </div>
  )
}
```

### Data Tables

```tsx
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell,
  Badge
} from "ada-design-system"

export default function MenuItemsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Margherita Pizza</TableCell>
          <TableCell>€12.50</TableCell>
          <TableCell>
            <Badge variant="success">Available</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

---

## 🌍 Language Support

### Built-in Translations
- **English** (en) - Default language
- **French** (fr) - Français - Full translation support
- **Dutch** (nl) - Nederlands - Full translation support

### LanguageSwitcher Component
```tsx
import { LanguageSwitcher, useLocale } from "@/components/ui/language-switcher"

export default function App() {
  const { locale, setLocale } = useLocale()
  
  return (
    <LanguageSwitcher
      currentLocale={locale}
      onLocaleChange={setLocale}
      variant="minimal"
    />
  )
}
```

### Translation System
```tsx
import { t } from "@/lib/i18n"

export default function Component() {
  const { locale } = useLocale()
  const translate = t(locale)
  
  return (
    <button>{translate('common.save')}</button>
  )
}
```

---

## 🎨 Clean Design Tokens

### Your Original ADA Brand Colors (Clean, No Gradients)
- **Primary Blue**: `#4d6aff` - Electric/Professional Blue `hsl(232, 100%, 66%)`
- **Secondary Blue**: `#45b9ee` - Tech/Atmospheric Blue `hsl(201, 85%, 60%)`
- **Background**: `#FFFFFF` - Pure White `hsl(0, 0%, 100%)`
- **Success**: `hsl(142, 76%, 36%)` - Professional Green
- **Warning**: `hsl(32, 95%, 44%)` - Professional Orange
- **Destructive**: `hsl(346, 87%, 43%)` - Professional Red
- **Accent**: Additional colors for variety

### Professional Typography
- **Primary**: Inter (Clean, modern, highly readable)
- **Display**: Plus Jakarta Sans (Professional headings)
- **Features**: Optimized line-height and letter-spacing
- **Hierarchy**: Clear weight system (400, 500, 600, 700)

### Typography Scale (Visuelt Pro Inspired)
- **Heading 1 / Bold**: 48px, 110% line-height, -1% spacing
- **Headline 2 / Medium**: 24px, 110% line-height, 0% spacing  
- **Body / Regular**: 16px, 150% line-height, 0% spacing
- **Caption / Small**: 14px, 140% line-height, 0% spacing

### Clean Spacing
- **2px** - Micro spacing
- **4px** - Tight spacing
- **8px** - Small spacing  
- **12px** - Medium spacing
- **16px** - Base spacing
- **24px** - Large spacing
- **32px** - XL spacing

---

## 🧩 Complete Component Library

### Core UI Elements (Your Brand Colors)
- ✅ **AdaLogo** - Brand logo with ADA Electric Blue (#4d6aff)
- ✅ **Button** - All variants with your brand colors
- ✅ **Card** - Clean cards with professional borders
- ✅ **Input** - Form inputs with ADA brand styling
- ✅ **Label** - Accessible form labels
- ✅ **Badge** - Status indicators in your color palette
- ✅ **Switch** - Toggle controls with brand colors
- ✅ **Select** - Dropdown menus with ADA styling
- ✅ **Table** - Data tables with brand consistency

### Loading States & Progress (All Included!)
- ✅ **Progress** - Progress bars with ADA brand colors
- ✅ **LoadingProgress** - Indeterminate loading bars
- ✅ **CircularProgress** - Circular progress with brand colors
- ✅ **StepProgress** - Multi-step process indicators
- ✅ **Spinner** - Loading spinners in all sizes and your colors
- ✅ **PulseLoader** - Dots and bars pulse animations
- ✅ **LoadingOverlay** - Overlay loading states
- ✅ **LoadingButton** - Buttons with integrated loading states

### Skeleton Loaders (Complete Set!)
- ✅ **Skeleton** - Basic skeleton elements
- ✅ **SkeletonAvatar** - Avatar placeholders
- ✅ **SkeletonButton** - Button placeholders
- ✅ **SkeletonText** - Text line placeholders
- ✅ **SkeletonCard** - Complete card skeletons
- ✅ **SkeletonTable** - Table loading skeletons
- ✅ **SkeletonList** - List item placeholders

### Popups & Notifications (All Present!)
- ✅ **Dialog** - Modal dialogs with backdrop
- ✅ **DialogContent** - Dialog content areas
- ✅ **DialogHeader/Title/Description** - Dialog structure
- ✅ **Toast** - Notification system (ready to implement)
- ✅ **Avatar** - User profile components

### Language & Accessibility
- ✅ **LanguageSwitcher** - Elegant language selection with SVG flag icons (EN/FR/NL)
- ✅ **FontViewer** - Professional typography showcase  
- ✅ **Multilingual Support** - Complete translation system
- ✅ **Cross-Platform Flags** - SVG flag icons work on Windows/Mac/Linux
- ✅ **International Formatting** - Date/currency per locale

### Your Brand Features
- 🎨 **Original ADA Colors** - Electric Blue (#4d6aff) + Atmospheric Blue (#45b9ee)
- 📝 **Clean Typography** - Professional hierarchy without gradients
- 🌍 **Multilingual Ready** - French/Dutch/English translations
- ♿ **Accessibility First** - ARIA labels, keyboard navigation
- 🎯 **Complete Library** - All components you requested included

---

## 🚀 Installation & Setup

### NPM Package (Recommended)

```bash
# Install the AdaDesignSystem package
npm install ada-design-system

# Or using yarn
yarn add ada-design-system

# Or using pnpm
pnpm add ada-design-system
```

### Setup Steps

**1. Import Styles (Required)**
```tsx
// In your main layout.tsx, _app.tsx, or index.tsx
import "ada-design-system/styles.css"
import "./globals.css" // Your custom styles (optional)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**2. Update Tailwind Config (Recommended)**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/ada-design-system/dist/**/*.{js,ts,jsx,tsx}', // Include package
  ],
  theme: {
    extend: {
      // The package includes all required color tokens and typography
      // No additional configuration needed
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

**3. Start Using Components**
```tsx
import { AdaLogo, Button, Card } from "ada-design-system"

export default function MyApp() {
  return (
    <Card className="p-6">
      <AdaLogo size="lg" variant="primary" />
      <Button>Get Started</Button>
    </Card>
  )
}
```

### 2. Configure Tailwind CSS

Add to your `tailwind.config.js`:

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
  theme: {
    extend: {
      colors: {
        // Clean ADA Color System (No Gradients)
        primary: {
          DEFAULT: "hsl(221, 83%, 53%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(262, 83%, 58%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        // ... rest of clean color tokens
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. Add Clean CSS Variables

Add to your `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Clean ADA Design System - No Gradients */
    --background: 0 0% 100%;
    --foreground: 224 71% 4%;
    --primary: 221 83% 53%; /* Professional Blue */
    --secondary: 262 83% 58%; /* Professional Purple */
    /* ... rest of clean design tokens */
  }
}
```

### 4. Copy Components

Copy the components you need:

```bash
# Copy core components
cp -r AdaDesignSystem/components/ui/button.tsx your-app/components/ui/
cp -r AdaDesignSystem/components/ui/language-switcher.tsx your-app/components/ui/
cp -r AdaDesignSystem/lib/i18n.ts your-app/lib/
```

## 📦 Using NPM Package

### Quick Start

```tsx
import { 
  Button, 
  AdaLogo, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  LanguageSwitcher, 
  useLocale,
  t 
} from "ada-design-system"

export default function MyApp() {
  const { locale, setLocale } = useLocale()
  const translate = t(locale)
  
  return (
    <Card className="p-6">
      <CardHeader>
        <div className="flex items-center gap-4">
          <AdaLogo size="lg" variant="primary" />
          <CardTitle>AdaMenu Dashboard</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Button variant="default">
            {translate('common.save')}
          </Button>
          <LanguageSwitcher 
            currentLocale={locale}
            onLocaleChange={setLocale}
            variant="minimal"
          />
        </div>
      </CardContent>
    </Card>
  )
}
```

### Available Components

```tsx
// Core UI Components
import { 
  Button,
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter,
  Input,
  Label,
  Badge,
  Switch,
  Select,
  Table,
  AdaLogo 
} from "ada-design-system"

// Loading & Progress Components
import {
  Spinner,
  Progress,
  LoadingProgress,
  CircularProgress,
  StepProgress,
  PulseLoader,
  LoadingOverlay,
  LoadingButton
} from "ada-design-system"

// Skeleton Components
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonText,
  SkeletonCard,
  SkeletonTable,
  SkeletonList
} from "ada-design-system"

// Dialogs & Notifications
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Toast,
  Avatar
} from "ada-design-system"

// Language & Internationalization
import {
  LanguageSwitcher,
  FontViewer,
  useLocale,
  t
} from "ada-design-system"
```

### 5. Manual Installation Usage

```tsx
import { Button } from "@/components/ui/button"
import { AdaLogo } from "@/components/ui/ada-logo"
import { LanguageSwitcher, useLocale } from "@/components/ui/language-switcher"
import { t } from "@/lib/i18n"

export default function RestaurantDashboard() {
  const { locale, setLocale } = useLocale()
  const translate = t(locale)
  
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <AdaLogo size="md" variant="primary" />
        <LanguageSwitcher 
          currentLocale={locale}
          onLocaleChange={setLocale}
          variant="minimal"
        />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">
        {locale === 'fr' ? 'Tableau de bord' : 
         locale === 'nl' ? 'Dashboard' : 
         'Dashboard'}
      </h1>
      
      <Button variant="default">
        {translate('common.save')}
      </Button>
    </div>
  )
}
```

### 6. Professional Typography Examples

```tsx
// Clean typography following Visuelt Pro principles
export default function TypographyShowcase() {
  return (
    <div className="space-y-8">
      {/* Heading 1 / Bold */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground uppercase tracking-wide">
          Heading 1 / Bold
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          Professional Typography
        </h1>
        <div className="text-sm text-muted-foreground">
          48px / 110% line height / -1% spacing / Bold
        </div>
      </div>

      {/* Headline 2 / Medium */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground uppercase tracking-wide">
          Headline 2 / Medium
        </div>
        <h2 className="text-2xl font-medium leading-tight">
          Clean Interface Design
        </h2>
        <div className="text-sm text-muted-foreground">
          24px / 110% line height / 0% spacing / Medium
        </div>
      </div>

      {/* Body / Regular */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground uppercase tracking-wide">
          Body / Regular
        </div>
        <p className="text-base leading-relaxed">
          Built with shadcn/ui, React, and TypeScript for professional applications.
        </p>
        <div className="text-sm text-muted-foreground">
          16px / 150% line height / 0% spacing / Regular
        </div>
      </div>
    </div>
  )
}
```

---

## 🎯 Perfect for ADA Apps

### Package Information

**Published on NPM**: [`ada-design-system`](https://www.npmjs.com/package/ada-design-system)

```bash
# Check latest version and info
npm info ada-design-system

# Install specific version
npm install ada-design-system@3.1.0

# View on NPM website
# https://www.npmjs.com/package/ada-design-system
```

### Easy Integration Across ADA Platform

```tsx
// AdaMenu - Menu Management
import { Card, Button, Table, Badge } from "ada-design-system"

// AdaStock - Inventory Tracking  
import { Progress, LoadingButton, SkeletonTable } from "ada-design-system"

// AdaStaff - Employee Scheduling
import { Dialog, Select, LanguageSwitcher } from "ada-design-system"

// AdaAuth - Authentication
import { AdaLogo, Input, Label, Spinner } from "ada-design-system"
```

## 🏢 Real-World ADA Apps Integration

### AdaMenu - Menu Management
```tsx
import { Card, CardHeader, CardTitle, Button, Badge, AdaLogo } from "ada-design-system"

export default function MenuDashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <AdaLogo size="lg" variant="primary" />
        <h1 className="text-2xl font-bold">L'Osteria Menu Manager</h1>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Margherita Pizza</CardTitle>
            <Badge variant="success">Available</Badge>
          </div>
        </CardHeader>
        <div className="p-4 flex gap-2">
          <Button variant="outline">Edit Menu Item</Button>
          <Button>AI Import Photo</Button>
        </div>
      </Card>
    </div>
  )
}
```

### AdaPlanning - Staff Scheduling
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  Select, 
  Button, 
  AdaLogo,
  LanguageSwitcher,
  useLocale 
} from "ada-design-system"

export default function StaffScheduler() {
  const { locale, setLocale } = useLocale()
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <AdaLogo size="md" variant="primary" />
          <h1 className="text-xl font-bold">Employee Planning</h1>
        </div>
        <LanguageSwitcher 
          currentLocale={locale} 
          onLocaleChange={setLocale}
          variant="minimal" 
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Create Shift</CardTitle>
        </CardHeader>
        <div className="p-4 space-y-4">
          <Select placeholder="Select Employee" />
          <Select placeholder="Select Time Slot" />
          <Button className="w-full">Schedule Shift</Button>
        </div>
      </Card>
    </div>
  )
}
```

### AdaAuth - Authentication
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  Input, 
  Label, 
  Button, 
  AdaLogo,
  Spinner 
} from "ada-design-system"

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <AdaLogo size="lg" variant="primary" className="mx-auto mb-4" />
          <CardTitle>Sign In to ADA Platform</CardTitle>
        </CardHeader>
        <div className="p-6 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" disabled={loading}>
            {loading && <Spinner size="sm" className="mr-2" />}
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  )
}
```

### Multilingual Restaurant Software
- **AdaMenu** - Menu management (FR: Gestion des menus, NL: Menumanagement)
- **AdaStock** - Inventory tracking (FR: Suivi des stocks, NL: Voorraadbeheer)
- **AdaStaff** - Employee scheduling (FR: Planification du personnel, NL: Personeelsplanning)
- **AdaAuth** - Authentication services (FR: Services d'authentification, NL: Authenticatiediensten)

### International Deployment Ready
- **Belgium** - French/Dutch bilingual support
- **France** - Full French localization
- **Netherlands** - Complete Dutch translation
- **EU Markets** - Professional, clean aesthetic

---

## 🚫 Design Principles

### What We Removed (v3.0)
- ❌ All gradient backgrounds and text effects
- ❌ Vibrant/flashy color variants
- ❌ Complex shadow effects
- ❌ Overly decorative elements

### What We Emphasize
- ✅ Clear typography hierarchy
- ✅ Professional color usage
- ✅ Consistent spacing rhythm
- ✅ International accessibility
- ✅ Clean component borders
- ✅ Readable font weights

---

## 📚 Complete Component Reference

### Available Components
```tsx
import {
  // 🎨 Branding
  AdaLogo,
  
  // 🔘 Buttons & Actions
  Button,
  LoadingButton,
  
  // 📄 Cards & Layout
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  
  // 📝 Forms
  Input,
  Label,
  Select,
  Switch,
  
  // 📊 Data Display
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  Avatar,
  
  // ⏳ Loading States
  Spinner,
  Progress,
  LoadingProgress,
  CircularProgress,
  StepProgress,
  PulseLoader,
  LoadingOverlay,
  
  // 💀 Skeletons
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonText,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
  
  // 🪟 Dialogs & Overlays
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Toast,
  
  // 🌍 Language & Typography
  LanguageSwitcher,
  FontViewer,
  useLocale,
  
  // 🛠️ Utilities
  t // Translation function
} from "ada-design-system"
```

### Required Imports
```tsx
// Always import the CSS first
import "ada-design-system/styles.css"

// Then import components
import { AdaLogo, Button, Card } from "ada-design-system"
```

### TypeScript Support ✅
- Full TypeScript definitions included
- IntelliSense support in VS Code
- Proper component prop types
- Type-safe translation functions

---

## 🔗 Links

- **📦 NPM Package**: https://www.npmjs.com/package/ada-design-system
- **💻 GitHub Repository**: https://github.com/julienmatondotezolo/AdaDesignSystem  
- **🌐 Live Demo**: https://ada-design-system.vercel.app
- **🐛 Issues**: https://github.com/julienmatondotezolo/AdaDesignSystem/issues
- **📖 Documentation**: Complete usage examples above

---

## 📄 License

MIT License - Built for Professional AdaSystems Platform

**Professional Typography Without Gradients™** - Clean design for serious business applications.