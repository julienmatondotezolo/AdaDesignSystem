import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "link" | "destructive" | "outline" | "success" | "warning" | "accent" | "pink" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "tiny" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map