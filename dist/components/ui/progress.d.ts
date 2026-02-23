import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type VariantProps } from "class-variance-authority";
declare const progressVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const progressBarVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "success" | "warning" | "accent" | "pink" | null | undefined;
    animated?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, VariantProps<typeof progressVariants>, VariantProps<typeof progressBarVariants> {
    animated?: boolean;
    showValue?: boolean;
    striped?: boolean;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
declare function LoadingProgress({ variant, size, className }: {
    variant?: VariantProps<typeof progressBarVariants>["variant"];
    size?: VariantProps<typeof progressVariants>["size"];
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function CircularProgress({ value, size, strokeWidth, variant, showValue, className }: {
    value?: number;
    size?: number;
    strokeWidth?: number;
    variant?: "default" | "success" | "warning" | "destructive" | "accent" | "secondary" | "pink";
    showValue?: boolean;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
declare function StepProgress({ steps, currentStep, variant, className }: {
    steps: string[];
    currentStep?: number;
    variant?: VariantProps<typeof progressBarVariants>["variant"];
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Progress, LoadingProgress, CircularProgress, StepProgress, progressVariants, progressBarVariants };
//# sourceMappingURL=progress.d.ts.map