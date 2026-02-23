"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skeletonVariants = void 0;
exports.Skeleton = Skeleton;
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonButton = SkeletonButton;
exports.SkeletonText = SkeletonText;
exports.SkeletonCard = SkeletonCard;
exports.SkeletonTable = SkeletonTable;
exports.SkeletonList = SkeletonList;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("@/lib/utils");
const skeletonVariants = (0, class_variance_authority_1.cva)("animate-pulse rounded-md bg-muted", {
    variants: {
        variant: {
            default: "bg-muted",
            card: "bg-muted/50",
            text: "bg-muted/80",
            avatar: "bg-muted/70",
            image: "bg-muted/60",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.skeletonVariants = skeletonVariants;
function Skeleton({ className, variant, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(skeletonVariants({ variant, className })), ...props }));
}
// Preset skeleton components for common use cases
function SkeletonAvatar({ size = "default", className }) {
    const sizeClasses = {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16"
    };
    return ((0, jsx_runtime_1.jsx)(Skeleton, { variant: "avatar", className: (0, utils_1.cn)("rounded-full", sizeClasses[size], className) }));
}
function SkeletonButton({ className }) {
    return ((0, jsx_runtime_1.jsx)(Skeleton, { className: (0, utils_1.cn)("h-10 w-20", className) }));
}
function SkeletonText({ lines = 1, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("space-y-2", className), children: Array.from({ length: lines }, (_, i) => ((0, jsx_runtime_1.jsx)(Skeleton, { variant: "text", className: (0, utils_1.cn)("h-4", i === lines - 1 && lines > 1 ? "w-3/4" : "w-full") }, i))) }));
}
function SkeletonCard({ className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("rounded-lg border bg-card p-6", className), children: (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [(0, jsx_runtime_1.jsx)(Skeleton, { variant: "text", className: "h-5 w-1/3" }), (0, jsx_runtime_1.jsx)(SkeletonText, { lines: 3 }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 pt-2", children: [(0, jsx_runtime_1.jsx)(SkeletonButton, {}), (0, jsx_runtime_1.jsx)(SkeletonButton, {})] })] }) }));
}
function SkeletonTable({ rows = 5, columns = 4, className }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("space-y-3", className), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex gap-4", children: Array.from({ length: columns }, (_, i) => ((0, jsx_runtime_1.jsx)(Skeleton, { variant: "text", className: "h-4 flex-1" }, i))) }), Array.from({ length: rows }, (_, rowIndex) => ((0, jsx_runtime_1.jsx)("div", { className: "flex gap-4", children: Array.from({ length: columns }, (_, colIndex) => ((0, jsx_runtime_1.jsx)(Skeleton, { variant: "default", className: (0, utils_1.cn)("h-8 flex-1", colIndex === 0 && "max-w-16" // First column (avatar/icon)
                    ) }, colIndex))) }, rowIndex)))] }));
}
function SkeletonList({ items = 3, withAvatar = true, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("space-y-4", className), children: Array.from({ length: items }, (_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [withAvatar && (0, jsx_runtime_1.jsx)(SkeletonAvatar, { size: "sm" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 space-y-2", children: [(0, jsx_runtime_1.jsx)(Skeleton, { variant: "text", className: "h-4 w-3/4" }), (0, jsx_runtime_1.jsx)(Skeleton, { variant: "text", className: "h-3 w-1/2" })] }), (0, jsx_runtime_1.jsx)(Skeleton, { className: "h-6 w-16" })] }, i))) }));
}
//# sourceMappingURL=skeleton.js.map