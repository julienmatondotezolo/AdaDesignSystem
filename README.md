# 🎨 Ada Design System v3.0

**Professional Typography With Your Brand Colors™** - Clean shadcn/ui design system with your original ADA brand colors and complete component library.

![Ada Design System](https://img.shields.io/badge/Design%20System-v3.0.0-blue)
![shadcn/ui](https://img.shields.io/badge/Built%20with-shadcn%2Fui-black)
![Clean](https://img.shields.io/badge/Style-Clean-brightgreen)
![Multilingual](https://img.shields.io/badge/Languages-EN%2FFR%2FNL-orange)
![Status](https://img.shields.io/badge/Status-Production-green)

## 🎯 Design Philosophy

**"Professional Typography Without Gradients™"**

Inspired by professional typography like Visuelt Pro, this design system emphasizes clean, readable interfaces without gradient effects. Built on shadcn/ui with clear hierarchy, consistent spacing, and international language support.

---

## ✨ What's New in v3.0?

- 🚫 **No Gradients** - Clean, professional aesthetic without color gradients
- 🌍 **Multilingual Support** - Built-in English, French, and Dutch translations
- 🔤 **Typography Focus** - Emphasis on hierarchy, spacing, and readability
- 🎛️ **Language Switcher** - Easy language switching component
- 📝 **Clean Components** - Removed all gradient styling for professional look
- 🏷️ **International** - Ready for Belgian/European market deployment

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

## 🚀 Installation

### Method 1: NPM Package (Recommended)

```bash
# Install the AdaDesignSystem package
npm install ada-design-system

# Or using yarn
yarn add ada-design-system

# Or using pnpm
pnpm add ada-design-system
```

**Note**: This package is published on npm as `ada-design-system` and includes all components, utilities, and translations.

#### NPM Package Setup

After installing the package, add the required CSS imports to your app:

```tsx
// In your main layout.tsx or _app.tsx
import "ada-design-system/dist/styles.css"
import "./globals.css" // Your custom styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

#### Tailwind Configuration for NPM Package

Update your `tailwind.config.js` to include the design system:

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

### Method 2: Manual Installation in Next.js Apps

If you prefer to copy components directly:

### 1. Install Dependencies

```bash
npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-switch class-variance-authority clsx country-flag-icons lucide-react tailwind-merge
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

### NPM Package Publishing

To publish this design system as an npm package, the `package.json` includes:

```json
{
  "name": "ada-design-system",
  "version": "3.1.0",
  "description": "Professional design system for ADA restaurant management platform",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "keywords": [
    "design-system",
    "react",
    "tailwindcss",
    "shadcn-ui",
    "restaurant",
    "multilingual",
    "ada-systems"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/julienmatondotezolo/AdaDesignSystem.git"
  }
}
```

#### Publishing Commands

```bash
# Build the package for distribution
npm run build-package

# Login to npm (first time only)
npm login

# Publish to npm
npm publish

# Or publish with specific tag
npm publish --tag beta

# Check package info
npm info ada-design-system
```

#### Installation for End Users

```bash
# Install from npm
npm install ada-design-system

# Or with specific version
npm install ada-design-system@3.1.0

# Install with all peer dependencies
npm install ada-design-system react react-dom
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

### Real-World Usage Examples

```tsx
// AdaMenu Integration
import { Card, CardHeader, CardTitle, Button, Badge, t, useLocale } from "ada-design-system"

export default function MenuItemCard({ item }) {
  const { locale } = useLocale()
  const translate = t(locale)
  
  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{item.name}</CardTitle>
          <Badge variant={item.available ? "success" : "secondary"}>
            {item.available ? translate('menu.available') : translate('menu.unavailable')}
          </Badge>
        </div>
      </CardHeader>
      <div className="flex gap-2 mt-4">
        <Button variant="outline">{translate('menu.edit')}</Button>
        <Button variant="destructive">{translate('common.delete')}</Button>
      </div>
    </Card>
  )
}

// AdaStaff Integration  
import { Dialog, Select, LanguageSwitcher, LoadingButton } from "ada-design-system"

export default function ShiftScheduler() {
  const { locale, setLocale } = useLocale()
  
  return (
    <Dialog>
      <div className="space-y-4">
        <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
        <Select placeholder={t(locale)('staff.selectEmployee')} />
        <LoadingButton loading={saving}>
          {t(locale)('common.save')}
        </LoadingButton>
      </div>
    </Dialog>
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

## 📄 License

MIT License - Built for Professional AdaSystems Platform

**Professional Typography Without Gradients™** - Clean design for serious business applications.