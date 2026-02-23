import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "alert" | "destructive" | "outline" | "success" | "warning" | "accent" | "pink" | "active" | "pending" | "confirmed" | "cancelled" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map