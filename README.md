# 🎨 Ada Design System v2.0

**Modern Hospitality UI** - Vibrant, contemporary shadcn/ui design system with premium aesthetics for AdaSystems platform.

![Ada Design System](https://img.shields.io/badge/Design%20System-v2.0.0-blue)
![shadcn/ui](https://img.shields.io/badge/Built%20with-shadcn%2Fui-black)
![Modern](https://img.shields.io/badge/Style-Modern-brightgreen)
![Status](https://img.shields.io/badge/Status-Production-green)

## 🎯 Brand Philosophy

**"Modern, Vibrant, Professional"**

A complete transformation from minimalism to modern vibrancy. Built on shadcn/ui with contemporary colors, premium typography, and sophisticated interactions. Perfect for next-generation hospitality software.

---

## ✨ What's New in v2.0?

- 🎨 **Modern Color Palette** - Vibrant blues, purples, cyans, and pinks
- 🔤 **Premium Typography** - Inter & Plus Jakarta Sans for contemporary feel
- 🚀 **Enhanced Components** - Buttons with hover animations and shadows
- 📱 **New Components** - Toast, Dialog, Progress, Avatar
- 🌈 **More Variants** - Extended color and size options
- ⚡ **Improved UX** - Smooth transitions and micro-interactions

---

## 🎨 Modern Design Tokens

### Vibrant Color System (HSL for Tailwind)
- **Primary**: `hsl(221, 83%, 53%)` - Modern Blue
- **Secondary**: `hsl(262, 83%, 58%)` - Modern Purple  
- **Accent**: `hsl(199, 89%, 48%)` - Vibrant Cyan
- **Success**: `hsl(142, 76%, 36%)` - Modern Green
- **Warning**: `hsl(32, 95%, 44%)` - Modern Orange
- **Destructive**: `hsl(346, 87%, 43%)` - Modern Red
- **Pink**: `hsl(322, 100%, 65%)` - Vibrant Pink

### Premium Typography
- **Primary**: Inter (Clean, modern, highly readable)
- **Display**: Plus Jakarta Sans (Premium headings and accents)
- **Features**: OpenType features enabled for optimal rendering
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

### Core Components (Modern Design)
- ✅ **AdaLogo** - Brand logo with multiple size/color variants
- ✅ **Button** - 8 variants, 7 sizes, with hover animations & shadows
- ✅ **Card** - Glass-morphism inspired cards with backdrop blur
- ✅ **Input** - Modern inputs with enhanced focus states
- ✅ **Label** - Accessible form labels with premium typography
- ✅ **Badge** - 12 colorful variants for status indicators
- ✅ **Switch** - Smooth toggle controls with transitions
- ✅ **Select** - Modern dropdowns with enhanced styling
- ✅ **Table** - Clean data tables with modern spacing

### Feedback & Overlays
- ✅ **Toast** - Modern notification system with variants
- ✅ **Dialog** - Modal dialogs with backdrop blur and animations

### Loading States & Progress
- ✅ **Progress** - Multi-variant progress bars with animations
- ✅ **LoadingProgress** - Indeterminate loading bars
- ✅ **CircularProgress** - Circular progress indicators with percentages
- ✅ **StepProgress** - Multi-step process indicators
- ✅ **Spinner** - Loading spinners in 5 sizes, 8 color variants
- ✅ **PulseLoader** - Dots and bars pulse animations
- ✅ **LoadingOverlay** - Overlay loading states with backdrop blur
- ✅ **Skeleton** - Content placeholders while loading
- ✅ **SkeletonCard/Table/List** - Complex skeleton layouts

### User Interface
- ✅ **Avatar** - 5 sizes for user profiles and team displays

### Enhanced Features
- 🎨 **Vibrant Color Palette** - 7 semantic color variants
- 🔄 **Smooth Animations** - Micro-interactions and transitions
- 📱 **Glass Morphism** - Modern backdrop blur effects
- 🎯 **Active States** - Button scale animations on click
- 🌈 **Gradient Support** - Beautiful gradient text and backgrounds

### Coming Soon
- 🔄 **Dropdown Menu** - Context menus with modern styling
- 🔄 **Tabs** - Navigation tabs with indicator animations
- 🔄 **Accordion** - Collapsible content with smooth transitions
- 🔄 **Command** - Command palette with search
- 🔄 **Calendar** - Date picker with modern design

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

### 6. Loading States Examples

```tsx
import { 
  Progress, 
  LoadingProgress, 
  CircularProgress,
  Spinner,
  LoadingOverlay,
  Skeleton,
  SkeletonCard,
  SkeletonList
} from "@/components/ui"

export default function RestaurantDashboard() {
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="p-8 space-y-6">
      {/* Progress Bars */}
      <Progress value={75} variant="success" showValue />
      <LoadingProgress variant="primary" />
      
      {/* Circular Progress */}
      <CircularProgress value={85} variant="accent" showValue />
      
      {/* Spinners */}
      <div className="flex gap-3">
        <Spinner size="sm" variant="primary" />
        <Spinner size="lg" variant="success" />
      </div>
      
      {/* Loading Overlay */}
      <LoadingOverlay loading={loading} text="Processing order...">
        <Card>
          <CardContent className="p-6">
            <p>Order details will appear here</p>
          </CardContent>
        </Card>
      </LoadingOverlay>
      
      {/* Skeleton Loaders */}
      <SkeletonCard />
      <SkeletonList items={3} withAvatar />
      
      {/* Loading Button */}
      <Button disabled={loading}>
        {loading && <Spinner size="sm" variant="white" className="mr-2" />}
        {loading ? 'Processing...' : 'Submit Order'}
      </Button>
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