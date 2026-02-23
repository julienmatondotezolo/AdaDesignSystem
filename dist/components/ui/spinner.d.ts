import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const spinnerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "xs" | null | undefined;
    variant?: "default" | "primary" | "secondary" | "white" | "destructive" | "success" | "warning" | "accent" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface SpinnerProps extends Omit<React.SVGProps<SVGSVGElement>, "size">, VariantProps<typeof spinnerVariants> {
}
declare const Spinner: React.ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
declare function LoadingOverlay({ children, loading, className, spinnerSize, spinnerVariant, text, blur }: {
    children: React.ReactNode;
    loading: boolean;
    className?: string;
    spinnerSize?: VariantProps<typeof spinnerVariants>["size"];
    spinnerVariant?: VariantProps<typeof spinnerVariants>["variant"];
    text?: string;
    blur?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function PulseLoader({ variant, className }: {
    variant?: "default" | "dots" | "bars";
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function PageLoader({ text, className }: {
    text?: string;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function LoadingButton({ children, loading, disabled, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Spinner, LoadingOverlay, PulseLoader, PageLoader, LoadingButton, spinnerVariants };
//# sourceMappingURL=spinner.d.ts.map