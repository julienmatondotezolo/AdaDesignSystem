# 🧩 Component Documentation

## 🎨 Design Principles

**Culinary Minimalism** - Clean, professional, structured interfaces for the hospitality industry.

### Core Principles
- **Structured Efficiency** - Every element serves a purpose
- **Professional Trust** - Blue tones convey reliability 
- **Seamless Technology** - Minimal friction, maximum usability
- **High Contrast** - Clear visual hierarchy
- **Responsive Design** - Works on all devices

---

## 🎯 Usage Guidelines

### CSS Classes Naming Convention
```css
.ada-{component}
.ada-{component}--{variant}
.ada-{component}__{element}
.ada-{component}__{element}--{modifier}
```

### Examples
```css
.ada-btn                    /* Base component */
.ada-btn--primary          /* Variant */
.ada-card__header          /* Element */
.ada-card__header--large   /* Element modifier */
```

---

## 📋 Component Library

### 🔘 Buttons

**Base Class:** `.ada-btn`

#### Variants
```html
<!-- Primary Actions -->
<button class="ada-btn ada-btn--primary">Primary</button>
<button class="ada-btn ada-btn--secondary">Secondary</button>

<!-- Alternative Styles -->
<button class="ada-btn ada-btn--outline">Outline</button>
<button class="ada-btn ada-btn--ghost">Ghost</button>

<!-- Semantic States -->
<button class="ada-btn ada-btn--success">Success</button>
<button class="ada-btn ada-btn--danger">Danger</button>
```

#### Sizes
```html
<button class="ada-btn ada-btn--primary ada-btn--sm">Small</button>
<button class="ada-btn ada-btn--primary">Default</button>
<button class="ada-btn ada-btn--primary ada-btn--lg">Large</button>
```

#### Icon Buttons
```html
<button class="ada-btn ada-btn--primary ada-btn--icon">+</button>
<button class="ada-btn ada-btn--primary ada-btn--icon ada-btn--sm">+</button>
<button class="ada-btn ada-btn--primary ada-btn--icon ada-btn--lg">+</button>
```

#### States
- `:hover` - Darker background
- `:focus` - Outline ring
- `:disabled` - Reduced opacity, no interaction

---

### 🎴 Cards

**Base Class:** `.ada-card`

#### Basic Structure
```html
<div class="ada-card">
  <div class="ada-card__header">
    <h4 class="ada-card__title">Card Title</h4>
    <p class="ada-card__subtitle">Optional subtitle</p>
  </div>
  <div class="ada-card__body">
    <!-- Card content -->
  </div>
  <div class="ada-card__footer">
    <!-- Actions or meta info -->
  </div>
</div>
```

#### Variants
```html
<!-- Interactive card (hover effects) -->
<div class="ada-card ada-card--interactive">

<!-- Elevated shadow -->
<div class="ada-card ada-card--elevated">

<!-- Thicker border -->
<div class="ada-card ada-card--bordered">
```

#### Use Cases
- **Product Cards** - Menu items, inventory
- **Info Cards** - Stats, summaries
- **Interactive Cards** - Navigation, clickable items

---

### 📝 Forms & Inputs

**Base Class:** `.ada-input`, `.ada-textarea`, `.ada-select`

#### Basic Form Structure
```html
<div class="ada-form-group">
  <label class="ada-label ada-label--required" for="input-id">
    Label Text
  </label>
  <input type="text" id="input-id" class="ada-input" placeholder="Placeholder">
  <span class="ada-help-text">Optional help text</span>
</div>
```

#### Input Variants
```html
<!-- States -->
<input class="ada-input ada-input--error">
<input class="ada-input ada-input--success">

<!-- Sizes -->
<input class="ada-input ada-input--sm">
<input class="ada-input">
<input class="ada-input ada-input--lg">
```

#### Form Elements
```html
<!-- Text Input -->
<input type="text" class="ada-input">

<!-- Textarea -->
<textarea class="ada-textarea"></textarea>

<!-- Select -->
<select class="ada-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Help Text States
```html
<span class="ada-help-text">Normal help text</span>
<span class="ada-help-text ada-help-text--error">Error message</span>
<span class="ada-help-text ada-help-text--success">Success message</span>
```

---

### 📊 Tables

**Base Class:** `.ada-table`

#### Basic Structure
```html
<div class="ada-table-container">
  <table class="ada-table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>
          <button class="ada-btn ada-btn--ghost ada-btn--sm">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Table Variants
```html
<!-- Striped rows -->
<table class="ada-table ada-table--striped">

<!-- Compact spacing -->
<table class="ada-table ada-table--compact">
```

#### Use Cases
- **Menu Management** - Items, prices, availability
- **Order Lists** - Order details, status tracking
- **Inventory** - Stock levels, reorder points
- **Staff Management** - Schedules, roles, contact info

---

### 🔄 Switches & Toggles

**Base Class:** `.ada-switch`

#### Basic Switch
```html
<label class="ada-switch">
  <input type="checkbox" class="ada-switch__input">
  <span class="ada-switch__track">
    <span class="ada-switch__thumb"></span>
  </span>
  <span class="ada-switch__label">Toggle Label</span>
</label>
```

#### States
```html
<!-- Checked -->
<input type="checkbox" class="ada-switch__input" checked>

<!-- Disabled -->
<input type="checkbox" class="ada-switch__input" disabled>
```

#### Use Cases
- **Settings** - Feature toggles, preferences
- **Availability** - Menu item availability
- **Notifications** - Alert preferences

---

### 🏷️ Badges & Status

**Base Class:** `.ada-badge`

#### Basic Badge
```html
<span class="ada-badge ada-badge--primary">Badge Text</span>
```

#### Badge Variants
```html
<span class="ada-badge ada-badge--primary">Primary</span>
<span class="ada-badge ada-badge--secondary">Secondary</span>
<span class="ada-badge ada-badge--success">Success</span>
<span class="ada-badge ada-badge--warning">Warning</span>
<span class="ada-badge ada-badge--error">Error</span>
<span class="ada-badge ada-badge--gray">Neutral</span>
```

#### Badge with Dot
```html
<span class="ada-badge ada-badge--success">
  <span class="ada-badge__dot"></span>
  Active
</span>
```

#### Use Cases
- **Order Status** - Pending, Ready, Served
- **Inventory Status** - In Stock, Low Stock, Out of Stock
- **User Roles** - Manager, Staff, Owner

---

### 🗂️ Tabs & Navigation

**Base Class:** `.ada-tabs`

#### Tab Structure
```html
<div class="ada-tabs">
  <ul class="ada-tabs__list">
    <li class="ada-tabs__item">
      <button class="ada-tabs__button ada-tabs__button--active">Tab 1</button>
    </li>
    <li class="ada-tabs__item">
      <button class="ada-tabs__button">Tab 2</button>
    </li>
    <li class="ada-tabs__item">
      <button class="ada-tabs__button">Tab 3</button>
    </li>
  </ul>
</div>
```

#### Tab States
- `.ada-tabs__button--active` - Currently selected tab
- `:hover` - Hover state with color change

#### Use Cases
- **Dashboard Navigation** - Menu, Orders, Analytics
- **Settings Pages** - General, Notifications, Security
- **Menu Categories** - Appetizers, Mains, Desserts

---

### 🔔 Modals & Overlays

**Base Class:** `.ada-modal`

#### Modal Structure
```html
<div class="ada-modal ada-modal--open" id="modal-id">
  <div class="ada-modal__content ada-modal__content--md">
    <div class="ada-modal__header">
      <h3 class="ada-modal__title">Modal Title</h3>
      <button class="ada-modal__close">&times;</button>
    </div>
    <div class="ada-modal__body">
      <!-- Modal content -->
    </div>
    <div class="ada-modal__footer">
      <button class="ada-btn ada-btn--ghost">Cancel</button>
      <button class="ada-btn ada-btn--primary">Save</button>
    </div>
  </div>
</div>
```

#### Modal Sizes
```html
<div class="ada-modal__content ada-modal__content--sm">   <!-- 400px -->
<div class="ada-modal__content ada-modal__content--md">   <!-- 600px -->
<div class="ada-modal__content ada-modal__content--lg">   <!-- 800px -->
<div class="ada-modal__content ada-modal__content--xl">   <!-- 1000px -->
```

#### Modal States
- `.ada-modal--open` - Visible modal
- Default - Hidden modal

#### JavaScript Control
```javascript
// Open modal
document.getElementById('modal-id').classList.add('ada-modal--open');

// Close modal
document.getElementById('modal-id').classList.remove('ada-modal--open');
```

#### Use Cases
- **Form Dialogs** - Add/edit items, settings
- **Confirmations** - Delete actions, important changes
- **Details View** - Order details, item information

---

### ⏳ Loading & Progress

**Loading Spinner:** `.ada-spinner`
```html
<span class="ada-spinner"></span>
<span class="ada-spinner ada-spinner--sm"></span>
<span class="ada-spinner ada-spinner--lg"></span>
```

**Progress Bar:** `.ada-progress`
```html
<div class="ada-progress">
  <div class="ada-progress__bar" style="width: 75%;"></div>
</div>
```

#### Use Cases
- **Data Loading** - API requests, page transitions
- **File Upload** - Upload progress indication
- **Process Status** - Order preparation, sync status

---

## 🎨 Design Tokens

### Colors
```css
/* Primary Colors */
--ada-primary: #4d6aff;
--ada-secondary: #45b9ee;

/* Semantic Colors */
--ada-success: #10b981;
--ada-warning: #f59e0b;
--ada-error: #ef4444;

/* Neutral Colors */
--ada-white: #ffffff;
--ada-gray-500: #6b7280;
--ada-gray-900: #1f2937;
```

### Typography
```css
/* Font Families */
--ada-font-primary: 'Space Grotesk', sans-serif;
--ada-font-secondary: 'Geist Sans', sans-serif;
--ada-font-mono: 'JetBrains Mono', monospace;

/* Font Weights */
--ada-weight-regular: 400;
--ada-weight-medium: 500;
--ada-weight-semibold: 600;
--ada-weight-bold: 700;
```

### Spacing
```css
--ada-space-1: 0.25rem;  /* 4px */
--ada-space-2: 0.5rem;   /* 8px */
--ada-space-3: 0.75rem;  /* 12px */
--ada-space-4: 1rem;     /* 16px */
--ada-space-6: 1.5rem;   /* 24px */
--ada-space-8: 2rem;     /* 32px */
```

### Border Radius
```css
--ada-radius-sm: 0.25rem;   /* 4px */
--ada-radius-base: 0.5rem;  /* 8px */
--ada-radius-md: 0.75rem;   /* 12px */
--ada-radius-lg: 1rem;      /* 16px */
--ada-radius-full: 9999px;  /* Pill */
```

---

## 🔧 Utility Classes

### Display
```css
.ada-flex { display: flex; }
.ada-block { display: block; }
.ada-hidden { display: none; }
```

### Flexbox
```css
.ada-items-center { align-items: center; }
.ada-justify-between { justify-content: space-between; }
.ada-flex-col { flex-direction: column; }
```

### Spacing
```css
.ada-m-4 { margin: 1rem; }
.ada-p-4 { padding: 1rem; }
.ada-p-6 { padding: 1.5rem; }
```

### Text
```css
.ada-text-center { text-align: center; }
.ada-text-sm { font-size: 0.875rem; }
.ada-weight-bold { font-weight: 700; }
```

### Colors
```css
.ada-text-primary { color: var(--ada-text-primary); }
.ada-text-secondary { color: var(--ada-text-secondary); }
.ada-bg-primary { background-color: var(--ada-primary); }
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px+ (default)
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1280px+

### Responsive Utilities
```css
/* Hide on mobile */
@media (max-width: 767px) {
  .ada-hidden-mobile { display: none; }
}

/* Mobile-first button behavior */
@media (max-width: 767px) {
  .ada-btn { width: 100%; }
}
```

---

## ♿ Accessibility

### Focus Management
- All interactive elements have `:focus-visible` styles
- Tab navigation follows logical order
- Modal focus trapping

### ARIA Support
```html
<!-- Buttons -->
<button aria-label="Close modal">×</button>

<!-- Form inputs -->
<input aria-describedby="help-text" aria-invalid="true">

<!-- Loading states -->
<div aria-live="polite" aria-busy="true">Loading...</div>
```

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have sufficient contrast
- Focus indicators are clearly visible

---

## 🚀 Best Practices

### Performance
- Use CSS custom properties for theming
- Minimize layout shifts
- Optimize for mobile-first

### Maintainability  
- Follow BEM naming convention
- Use design tokens consistently
- Document component variations

### User Experience
- Provide clear feedback for actions
- Ensure consistent interaction patterns
- Test on real devices and browsers

---

## 🍽️ Hospitality-Specific Use Cases

### Restaurant Management
- **Menu Cards** - Item display with pricing, availability
- **Order Tables** - Status tracking, timing
- **Staff Switches** - Availability, role toggles

### Kitchen Display
- **Order Badges** - Priority, dietary restrictions
- **Progress Indicators** - Cooking times, preparation
- **Status Cards** - Item completion, modifications

### POS Systems
- **Product Buttons** - Quick selection, categories
- **Total Cards** - Price breakdown, payment
- **Receipt Modals** - Order confirmation, printing