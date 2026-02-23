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
exports.spinnerVariants = exports.Spinner = void 0;
exports.LoadingOverlay = LoadingOverlay;
exports.PulseLoader = PulseLoader;
exports.PageLoader = PageLoader;
exports.LoadingButton = LoadingButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../../lib/utils");
const spinnerVariants = (0, class_variance_authority_1.cva)("animate-spin", {
    variants: {
        size: {
            xs: "h-3 w-3",
            sm: "h-4 w-4",
            default: "h-6 w-6",
            lg: "h-8 w-8",
            xl: "h-12 w-12",
        },
        variant: {
            default: "text-muted-foreground",
            primary: "text-primary",
            secondary: "text-secondary",
            accent: "text-accent",
            success: "text-success",
            warning: "text-warning",
            destructive: "text-destructive",
            white: "text-white",
        },
    },
    defaultVariants: {
        size: "default",
        variant: "default",
    },
});
exports.spinnerVariants = spinnerVariants;
const Spinner = React.forwardRef(({ className, size, variant, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { ref: ref, className: (0, utils_1.cn)(spinnerVariants({ size, variant, className })), ...props }));
});
exports.Spinner = Spinner;
Spinner.displayName = "Spinner";
// Loading overlay component
function LoadingOverlay({ children, loading, className, spinnerSize = "lg", spinnerVariant = "primary", text, blur = true }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative", className), children: [children, loading && ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 z-10", blur && "backdrop-blur-sm"), children: [(0, jsx_runtime_1.jsx)(Spinner, { size: spinnerSize, variant: spinnerVariant }), text && ((0, jsx_runtime_1.jsx)("p", { className: "text-sm text-muted-foreground animate-pulse", children: text }))] }))] }));
}
// Pulse loader for different shapes
function PulseLoader({ variant = "default", className }) {
    if (variant === "dots") {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex space-x-2", className), children: [0, 1, 2].map((i) => ((0, jsx_runtime_1.jsx)("div", { className: "h-2 w-2 bg-primary rounded-full animate-pulse", style: {
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s'
                } }, i))) }));
    }
    if (variant === "bars") {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex items-end space-x-1", className), children: [0, 1, 2, 3, 4].map((i) => ((0, jsx_runtime_1.jsx)("div", { className: "w-1 bg-primary rounded-full animate-pulse", style: {
                    height: `${12 + (i % 2) * 8}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s'
                } }, i))) }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex justify-center", className), children: (0, jsx_runtime_1.jsx)("div", { className: "h-8 w-8 bg-primary/20 rounded-full animate-pulse" }) }));
}
// Page loading component
function PageLoader({ text = "Loading...", className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm", className), children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center space-y-4", children: [(0, jsx_runtime_1.jsx)(Spinner, { size: "xl", variant: "primary" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold", children: text }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(PulseLoader, { variant: "dots" }) })] })] }) }));
}
// Button loading state
function LoadingButton({ children, loading = false, disabled, className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("button", { className: className, disabled: loading || disabled, ...props, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [loading && (0, jsx_runtime_1.jsx)(Spinner, { size: "sm", variant: "white" }), children] }) }));
}
//# sourceMappingURL=spinner.js.map