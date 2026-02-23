import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const skeletonVariants: (props?: ({
    variant?: "default" | "image" | "text" | "card" | "avatar" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
}
declare function Skeleton({ className, variant, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
declare function SkeletonAvatar({ size, className }: {
    size?: "sm" | "default" | "lg" | "xl";
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SkeletonButton({ className }: {
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SkeletonCard({ className }: {
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SkeletonTable({ rows, columns, className }: {
    rows?: number;
    columns?: number;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function SkeletonList({ items, withAvatar, className }: {
    items?: number;
    withAvatar?: boolean;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonList, skeletonVariants };
//# sourceMappingURL=skeleton.d.ts.map