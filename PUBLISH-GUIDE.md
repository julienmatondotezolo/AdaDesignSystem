# 📦 ADA Design System - Publishing & Installation Guide

Transform your design system into an installable npm package for easy use across projects.

## 🚀 Option 1: Publish to npm (Recommended)

### Setup for Publishing

1. **Prepare the package for publishing:**

```bash
cd AdaDesignSystem

# Copy the npm-ready package.json
cp package-npm.json package.json

# Login to npm (create account at npmjs.com if needed)
npm login

# Publish the package
npm publish
```

2. **Install in any project:**

```bash
# In your menu builder or any other project
npm install @ada-systems/design-system
```

3. **Use in your projects:**

```tsx
// Import components directly
import { Button, Card, CardContent, AdaLogo, LanguageSwitcher } from '@ada-systems/design-system'
import '@ada-systems/design-system/styles' // Import the CSS

export default function MenuBuilder() {
  return (
    <div className="p-6">
      <AdaLogo size="lg" variant="primary" />
      <Card className="mt-6">
        <CardContent>
          <Button variant="default">Add Menu Item</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

4. **Setup Tailwind config in your project:**

```javascript
// tailwind.config.js in your project
const adaConfig = require('@ada-systems/design-system/tailwind-config')

module.exports = {
  ...adaConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ada-systems/design-system/**/*.{js,ts,jsx,tsx}' // Include the package
  ]
}
```

## 🔐 Option 2: Private npm Package

### For Private/Commercial Use

1. **Publish as private package:**

```bash
# Update package.json
{
  "name": "@your-company/ada-design-system",
  "private": true,
  "publishConfig": {
    "access": "restricted"
  }
}

# Publish privately (requires paid npm account)
npm publish --access=restricted
```

2. **Install in projects:**

```bash
npm install @your-company/ada-design-system
```

## 📁 Option 3: GitHub Packages (Free Private)

### Use GitHub as Package Registry

1. **Setup GitHub Packages:**

Create `.npmrc` in your design system repo:
```
@your-username:registry=https://npm.pkg.github.com
```

2. **Update package.json:**

```json
{
  "name": "@your-username/ada-design-system",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/AdaDesignSystem.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

3. **Publish to GitHub:**

```bash
# Generate GitHub Personal Access Token with packages:write scope
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc

# Publish
npm publish
```

4. **Install in projects:**

Create `.npmrc` in your project:
```
@your-username:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

```bash
npm install @your-username/ada-design-system
```

## 🌐 Option 4: Git Dependency (Simplest)

### Direct from GitHub (No publishing needed)

1. **Install directly from GitHub:**

```bash
# In your menu builder project
npm install git+https://github.com/julienmatondotezolo/AdaDesignSystem.git
```

2. **Or specify a specific version/tag:**

```bash
npm install git+https://github.com/julienmatondotezlo/AdaDesignSystem.git#v3.1.0-stable
```

3. **Use in package.json:**

```json
{
  "dependencies": {
    "ada-design-system": "git+https://github.com/julienmatondotezolo/AdaDesignSystem.git#v3.1.0-stable"
  }
}
```

4. **Import and use:**

```tsx
import { Button, Card, AdaLogo } from 'ada-design-system'
import 'ada-design-system/app/globals.css'
```

## 🛠️ Complete Project Setup Guide

### Once Installed, Setup Your Project:

1. **Install Tailwind & Dependencies:**

```bash
npm install tailwindcss postcss autoprefixer tailwindcss-animate
```

2. **Create tailwind.config.js:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/ada-design-system/**/*.{js,ts,jsx,tsx}' // Include ADA components
  ],
  theme: {
    extend: {
      colors: {
        // ADA Brand Colors automatically included
        background: "hsl(var(--background))", // Pure White
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Electric Blue #4d6aff
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Atmospheric Blue #45b9ee
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... other colors automatically included
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

3. **Add CSS to your app/globals.css:**

```css
@import 'ada-design-system/app/globals.css';
@tailwind base;
@tailwind components; 
@tailwind utilities;
```

4. **Start using components:**

```tsx
// app/menu-builder/page.tsx
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  AdaLogo,
  LanguageSwitcher,
  useLocale 
} from 'ada-design-system'

export default function MenuBuilder() {
  const { locale, setLocale } = useLocale()
  
  return (
    <div className="min-h-screen bg-background p-6">
      {/* Your Electric Blue & Atmospheric Blue colors applied automatically! */}
      <div className="flex items-center gap-4 mb-8">
        <AdaLogo size="lg" variant="primary" />
        <h1 className="text-2xl font-bold">Menu Builder</h1>
        <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Menu Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="default" className="mb-4">
            Add Menu Item
          </Button>
          {/* All your components with ADA brand colors! */}
        </CardContent>
      </Card>
    </div>
  )
}
```

## 📦 Recommended Approach

**For Production/Business Use:**
1. **GitHub Packages** (Free private hosting)
2. **Git Dependency** (Simplest, no setup required)

**For Open Source/Public:**
1. **Public npm Package** (Most professional)

## 🎯 Benefits of Package Approach

✅ **One command install:** `npm install @ada-systems/design-system`  
✅ **Automatic updates:** `npm update` gets latest version  
✅ **Version control:** Pin to specific versions for stability  
✅ **Easy sharing:** Same package across all ADA projects  
✅ **Your brand colors included:** No configuration needed  
✅ **TypeScript support:** Full type safety out of the box  

Choose the option that works best for your workflow!