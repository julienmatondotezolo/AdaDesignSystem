"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badgeVariants = void 0;
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground border-border",
            success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
            warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
            accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
            pink: "border-transparent bg-pink text-pink-foreground hover:bg-pink/80",
            // Modern status badges
            active: "border-transparent bg-green-500 text-white hover:bg-green-600",
            pending: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
            confirmed: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
            cancelled: "border-transparent bg-gray-500 text-white hover:bg-gray-600",
            alert: "border-transparent bg-red-500 text-white hover:bg-red-600",
        },
        size: {
            default: "px-2.5 py-0.5 text-xs",
            sm: "px-2 py-0.5 text-xs",
            lg: "px-3 py-1 text-sm",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.badgeVariants = badgeVariants;
function Badge({ className, variant, size, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(badgeVariants({ variant, size }), className), ...props }));
}
//# sourceMappingURL=badge.js.map