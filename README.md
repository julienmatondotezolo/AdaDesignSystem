# 🎨 Ada Design System

**Culinary Minimalism** - shadcn/ui based design system for AdaSystems platform with premium hospitality software aesthetics.

![Ada Design System](https://img.shields.io/badge/Design%20System-v2.0.0-blue)
![shadcn/ui](https://img.shields.io/badge/Built%20with-shadcn%2Fui-black)
![Status](https://img.shields.io/badge/Status-Active-green)

## 🎯 Brand Philosophy

**"shadcn/ui meets Culinary Minimalism"**

Built on the solid foundation of shadcn/ui components with ADA's premium design tokens. Perfect for reusing across all Next.js ADA applications with consistent branding and behavior.

---

## ✨ Why shadcn/ui Base?

- ✅ **Consistent Architecture** - Same patterns across all ADA apps
- ✅ **Easy Integration** - Drop into any Next.js project
- ✅ **Accessibility First** - Built-in ARIA support via Radix UI
- ✅ **TypeScript Native** - Full type safety out of the box
- ✅ **Tailwind Integration** - Design tokens as CSS variables
- ✅ **Customizable** - Variant-based component system

---

## 🎨 ADA Design Tokens

### Colors (HSL Format for Tailwind)
- **Primary**: `hsl(232, 100%, 66%)` - ADA Blue (#4d6aff)
- **Secondary**: `hsl(201, 85%, 60%)` - ADA Light Blue (#45b9ee)
- **Background**: `hsl(0, 0%, 100%)` - Pure White
- **Foreground**: `hsl(222, 84%, 5%)` - Charcoal Text
- **Muted**: `hsl(210, 40%, 96%)` - Light Gray
- **Border**: `hsl(214, 32%, 91%)` - Subtle Border

### Typography
- **Primary**: Space Grotesk (Modern geometric, brand headers)
- **Secondary**: Geist Sans (Technical precision, UI text)
- **Mono**: JetBrains Mono (Code, technical data)
- **Mono**: JetBrains Mono (Code/data)

### Spacing Scale
- **4px** - Tight spacing
- **8px** - Small spacing  
- **12px** - Medium spacing
- **16px** - Base spacing
- **24px** - Large spacing
- **32px** - XL spacing
- **48px** - XXL spacing

### Border Radius
- **4px** - Small (inputs, badges)
- **8px** - Medium (buttons)
- **12px** - Large (cards)
- **16px** - XL (modals)
- **24px** - Pill (switches, tags)

---

## 🧩 Components Available

### Core shadcn/ui Components (ADA Styled)
- ✅ **AdaLogo** - Brand logo with size/color variants
- ✅ **Button** - Primary, Secondary, Destructive, Outline, Ghost, Link
- ✅ **Card** - Header, Content, Footer with consistent spacing
- ✅ **Input** - Text inputs with focus states
- ✅ **Label** - Accessible form labels
- ✅ **Badge** - Status indicators with semantic colors
- ✅ **Switch** - Toggle controls
- ✅ **Select** - Dropdown selects with search
- ✅ **Table** - Data tables with header/body/footer

### Coming Soon
- 🔄 **Dialog** - Modals and overlays
- 🔄 **Form** - Complete form layouts with validation
- 🔄 **Dropdown Menu** - Context menus
- 🔄 **Toast** - Notification system
- 🔄 **Tabs** - Navigation tabs
- 🔄 **Accordion** - Collapsible content

---

## 🚀 Installation in Next.js Apps

### 1. Install Dependencies

```bash
npm install @radix-ui/react-label @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-switch class-variance-authority clsx lucide-react tailwind-merge
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
    './node_modules/ada-design-system/**/*.{ts,tsx}', // If installed as package
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // ADA Blue
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // ADA Light Blue
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... rest of color system
      },
      fontFamily: {
        sans: ["Space Grotesk", "Geist Sans", "system-ui"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. Add CSS Variables

Add to your `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 232 100% 66%; /* ADA Blue */
    --secondary: 201 85% 60%; /* ADA Light Blue */
    /* ... rest of design tokens */
  }
}
```

### 4. Copy Components

Copy the components you need from this design system:

```bash
# Example: Copy button component
cp -r AdaDesignSystem/components/ui/button.tsx your-app/components/ui/
cp -r AdaDesignSystem/lib/utils.ts your-app/lib/
```

### 5. Use in Your App

```tsx
import { Button } from "@/components/ui/button"
import { AdaLogo } from "@/components/ui/ada-logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="p-8">
      <AdaLogo size="lg" variant="primary" />
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Welcome to ADA Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Premium hospitality software with beautiful design.</p>
          <Button className="mt-4">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## 🎯 Perfect for ADA Apps

This design system is specifically architected for:

- **AdaMenu** - Restaurant menu management
- **AdaStock** - Inventory tracking  
- **AdaStaff** - Employee scheduling
- **AdaAuth** - Authentication services
- **AdaKDS** - Kitchen display systems
- **AdaPhone** - AI receptionist interfaces

All apps share the same component library for consistency!
- **Desktop**: 1024px+
- **Large**: 1280px+

---

## 🎯 Use Cases

Perfect for:
- Restaurant management applications
- POS systems and interfaces
- Hospitality software
- Kitchen display systems
- Staff management tools
- Inventory applications

---

## 📄 License

MIT License - Built for AdaSystems Platform