"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonVariants = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            success: "bg-success text-success-foreground hover:bg-success/90 shadow-sm hover:shadow-md",
            warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-sm hover:shadow-md",
            accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md",
            pink: "bg-pink text-pink-foreground hover:bg-pink/90 shadow-sm hover:shadow-md",
        },
        size: {
            tiny: "h-6 px-2 text-xs rounded-md",
            sm: "h-8 px-3 text-xs rounded-md",
            default: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-base rounded-lg",
            xl: "h-14 px-10 text-lg rounded-lg",
            icon: "h-10 w-10",
            "icon-sm": "h-8 w-8",
            "icon-lg": "h-12 w-12",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.buttonVariants = buttonVariants;
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
exports.Button = Button;
Button.displayName = "Button";
//# sourceMappingURL=button.js.map