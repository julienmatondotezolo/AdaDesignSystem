# ADA Logo Component

The official logo component for ADA Systems platform, available in both React and CSS-only implementations.

## Features

- **Multiple Size Variants**: Small, medium, large, XL, and responsive
- **Color Variants**: Primary blue, secondary blue, monochrome, and white
- **Design System Integration**: Uses CSS custom properties from the ADA Design System
- **Accessibility**: Proper ARIA labels and semantic markup
- **Responsive**: Adapts to different screen sizes
- **Interactive**: Optional hover effects and animations

## React Component

### Installation

```jsx
import { AdaLogo } from './components/logo/AdaLogo';
```

### Basic Usage

```jsx
// Default logo (medium size, primary color)
<AdaLogo />

// Custom size and variant
<AdaLogo size="large" variant="secondary" />

// Custom dimensions
<AdaLogo size="custom" width="400px" height="175px" />

// With additional styling
<AdaLogo 
  size="medium" 
  variant="primary"
  className="my-logo-class"
  style={{ margin: '20px' }}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small"` \| `"medium"` \| `"large"` \| `"xl"` \| `"custom"` | `"medium"` | Predefined size or custom |
| `width` | `string` | - | Custom width (when size="custom") |
| `height` | `string` | - | Custom height (when size="custom") |
| `variant` | `"primary"` \| `"secondary"` \| `"monochrome"` \| `"white"` | `"primary"` | Color variant |
| `className` | `string` | `""` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## CSS-Only Implementation

### Installation

```html
<link rel="stylesheet" href="components/logo/ada-logo.css">
```

### Basic Usage

```html
<!-- Default logo -->
<svg class="ada-logo ada-logo--medium ada-logo--primary" viewBox="0 0 689.5 300.5">
  <path d="[SVG path data]" />
</svg>

<!-- Responsive logo -->
<svg class="ada-logo ada-logo--responsive ada-logo--primary" viewBox="0 0 689.5 300.5">
  <path d="[SVG path data]" />
</svg>

<!-- Interactive logo with animation -->
<svg class="ada-logo ada-logo--medium ada-logo--primary ada-logo--interactive ada-logo--animated" viewBox="0 0 689.5 300.5">
  <path d="[SVG path data]" />
</svg>
```

## Size Variants

| Class | Dimensions | Use Case |
|-------|------------|----------|
| `ada-logo--small` | 172×75px | Icons, compact spaces |
| `ada-logo--medium` | 275×120px | Default, most common |
| `ada-logo--large` | 413×180px | Headers, hero sections |
| `ada-logo--xl` | 689×300px | Large displays, print |
| `ada-logo--responsive` | Responsive | Mobile-first, adapts to screen |

## Color Variants

| Class | Colors | Use Case |
|-------|--------|----------|
| `ada-logo--primary` | Primary blue (#4d6aff) | Default brand representation |
| `ada-logo--secondary` | Secondary blue (#45b9ee) | Alternative branding |
| `ada-logo--monochrome` | Dark gray | Subtle, professional contexts |
| `ada-logo--white` | White | Dark backgrounds, overlays |

## Modifiers

| Class | Effect |
|-------|--------|
| `ada-logo--interactive` | Adds hover effects and cursor pointer |
| `ada-logo--animated` | Fade-in animation on load |
| `ada-logo--responsive` | Responsive sizing for mobile devices |

## Examples

### Navigation Header

```jsx
<nav className="navbar">
  <AdaLogo size="small" variant="primary" />
  <ul>...</ul>
</nav>
```

### Hero Section

```jsx
<section className="hero">
  <AdaLogo size="large" variant="primary" className="hero-logo" />
  <h1>Welcome to ADA Systems</h1>
</section>
```

### Dark Background

```jsx
<footer className="dark-footer">
  <AdaLogo size="medium" variant="white" />
</footer>
```

### Loading Page

```jsx
<div className="loading-screen">
  <AdaLogo 
    size="large" 
    variant="primary"
    className="ada-logo--animated" 
  />
</div>
```

## Design System Integration

The logo component uses CSS custom properties from the ADA Design System:

- `--ada-primary` (#4d6aff)
- `--ada-secondary` (#45b9ee) 
- `--ada-white` (#ffffff)
- `--ada-gray-800` (#1f2937)
- `--ada-gray-700` (#374151)

This ensures consistent colors across the entire platform and allows for easy theming.

## Accessibility

- Uses `role="img"` for semantic meaning
- Includes descriptive `aria-label` attributes
- Scalable vector format ensures crisp display at any size
- High contrast ratios for all color variants

## Browser Support

- Modern browsers with SVG support
- CSS custom properties support (IE11+ with polyfills)
- React 16.8+ for the React component

## Files

- `AdaLogo.jsx` - React component implementation
- `ada-logo.css` - CSS-only styles and utilities
- `logo-examples.html` - Live examples and documentation
- `README.md` - This documentation file

## Contributing

When updating the logo:

1. Maintain the original SVG path data
2. Ensure all color variants work with the design system
3. Test responsiveness across different screen sizes
4. Update documentation and examples
5. Test both React and CSS implementations