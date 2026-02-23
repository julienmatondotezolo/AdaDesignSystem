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
exports.progressBarVariants = exports.progressVariants = exports.Progress = void 0;
exports.LoadingProgress = LoadingProgress;
exports.CircularProgress = CircularProgress;
exports.StepProgress = StepProgress;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const ProgressPrimitive = __importStar(require("@radix-ui/react-progress"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const progressVariants = (0, class_variance_authority_1.cva)("w-full overflow-hidden rounded-full bg-secondary", {
    variants: {
        size: {
            xs: "h-1",
            sm: "h-1.5",
            default: "h-2",
            lg: "h-3",
            xl: "h-4",
        },
    },
    defaultVariants: {
        size: "default",
    },
});
exports.progressVariants = progressVariants;
const progressBarVariants = (0, class_variance_authority_1.cva)("h-full w-full flex-1 transition-all duration-300 ease-in-out", {
    variants: {
        variant: {
            default: "bg-primary",
            success: "bg-success",
            warning: "bg-warning",
            destructive: "bg-destructive",
            accent: "bg-accent",
            secondary: "bg-secondary",
            pink: "bg-pink",
        },
        animated: {
            true: "transition-all duration-500 ease-out",
            false: "transition-all duration-300 ease-in-out",
        },
    },
    defaultVariants: {
        variant: "default",
        animated: false,
    },
});
exports.progressBarVariants = progressBarVariants;
const Progress = React.forwardRef(({ className, value, size, variant, animated, showValue, striped, ...props }, ref) => ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)(ProgressPrimitive.Root, { ref: ref, className: (0, utils_1.cn)(progressVariants({ size }), className), ...props, children: (0, jsx_runtime_1.jsx)(ProgressPrimitive.Indicator, { className: (0, utils_1.cn)(progressBarVariants({ variant, animated }), striped && "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:40px_40px] animate-pulse"), style: {
                    transform: `translateX(-${100 - (value || 0)}%)`,
                    ...(striped && {
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
                    })
                } }) }), showValue && ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [(0, jsx_runtime_1.jsx)("span", { children: "Progress" }), (0, jsx_runtime_1.jsxs)("span", { children: [value, "%"] })] }))] })));
exports.Progress = Progress;
Progress.displayName = ProgressPrimitive.Root.displayName;
// Indeterminate loading progress
function LoadingProgress({ variant = "default", size = "default", className }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)(progressVariants({ size }), "relative", className), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(progressBarVariants({ variant }), "absolute h-full w-1/3 animate-pulse"), style: {
                    animation: "loading-slide 2s infinite ease-in-out"
                } }), (0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: {
                    __html: `
          @keyframes loading-slide {
            0% { left: -33.333%; }
            100% { left: 100%; }
          }
        `
                } })] }));
}
// Circular progress
function CircularProgress({ value = 0, size = 60, strokeWidth = 4, variant = "default", showValue = false, className }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / 100) * circumference;
    const colorMap = {
        default: "stroke-primary",
        success: "stroke-success",
        warning: "stroke-warning",
        destructive: "stroke-destructive",
        accent: "stroke-accent",
        secondary: "stroke-secondary",
        pink: "stroke-pink"
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative inline-flex items-center justify-center", className), children: [(0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, className: "transform -rotate-90", children: [(0, jsx_runtime_1.jsx)("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, className: "text-muted opacity-20" }), (0, jsx_runtime_1.jsx)("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", strokeWidth: strokeWidth, strokeDasharray: circumference, strokeDashoffset: strokeDashoffset, strokeLinecap: "round", className: (0, utils_1.cn)(colorMap[variant], "transition-all duration-300 ease-out") })] }), showValue && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute text-xs font-medium", children: [value, "%"] }))] }));
}
// Multi-step progress
function StepProgress({ steps, currentStep = 0, variant = "default", className }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("space-y-3", className), children: [(0, jsx_runtime_1.jsx)(Progress, { value: (currentStep / (steps.length - 1)) * 100, variant: variant, animated: true }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-between", children: steps.map((step, index) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("flex flex-col items-center text-xs", index <= currentStep ? "text-foreground" : "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("w-6 h-6 rounded-full border-2 flex items-center justify-center mb-1", index < currentStep
                                ? "bg-primary border-primary text-primary-foreground"
                                : index === currentStep
                                    ? "border-primary text-primary"
                                    : "border-muted"), children: index < currentStep ? "✓" : index + 1 }), (0, jsx_runtime_1.jsx)("span", { className: "max-w-16 text-center leading-tight", children: step })] }, index))) })] }));
}
//# sourceMappingURL=progress.js.map