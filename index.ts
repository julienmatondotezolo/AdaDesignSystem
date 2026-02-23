// ADA Design System - Main Export
// Import this package in your projects: import { Button, Card } from 'ada-design-system'

// Core UI Components
export { AdaLogo } from './components/ui/ada-logo'
export { Button, buttonVariants } from './components/ui/button'
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
export { Input } from './components/ui/input'
export { Label } from './components/ui/label'
export { Badge, badgeVariants } from './components/ui/badge'
export { Switch } from './components/ui/switch'
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'

// Language & Internationalization
export { LanguageSwitcher, useLocale } from './components/ui/language-switcher'
export { FontViewer, FontViewerShowcase, FontSpecimen } from './components/ui/font-viewer'
export { t, getTranslation, detectLocale, DEFAULT_LOCALE, type Locale, type Translations } from './lib/i18n'

// Dialogs & Popups
export { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'

// Loading States & Progress
export { Progress, LoadingProgress, CircularProgress, StepProgress } from './components/ui/progress'
export { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonList } from './components/ui/skeleton'
export { Spinner, LoadingOverlay, PulseLoader, PageLoader, LoadingButton } from './components/ui/spinner'

// Notifications (Toast system components)
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './components/ui/toast'

// Utilities
export { cn } from './lib/utils'

// Types
export type { VariantProps } from 'class-variance-authority'