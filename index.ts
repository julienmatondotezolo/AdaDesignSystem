// ADA Design System v2.0 - Modern Component Exports
// shadcn/ui based components with vibrant, modern design

// Core UI Components
export { Button, buttonVariants, type ButtonProps } from "./components/ui/button"
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "./components/ui/card"
export { Input, type InputProps } from "./components/ui/input"
export { Label } from "./components/ui/label"
export { Badge, badgeVariants, type BadgeProps } from "./components/ui/badge"
export { Switch } from "./components/ui/switch"

// Form Components  
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./components/ui/select"

// Data Display
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/ui/table"

// Feedback & Overlays
export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "./components/ui/toast"

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog"

// Progress & Status
export { Progress, progressVariants, progressBarVariants } from "./components/ui/progress"

// User Interface
export { Avatar, AvatarImage, AvatarFallback, avatarVariants } from "./components/ui/avatar"

// Branding
export { AdaLogo, logoVariants, type AdaLogoProps } from "./components/ui/ada-logo"

// Utilities
export { cn } from "./lib/utils"

// Types for common patterns
export type { VariantProps } from "class-variance-authority"