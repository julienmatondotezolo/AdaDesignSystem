import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const logoVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "primary" | "secondary" | "muted" | "white" | null | undefined;
    interactive?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface AdaLogoProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof logoVariants> {
}
declare const AdaLogo: React.ForwardRefExoticComponent<AdaLogoProps & React.RefAttributes<SVGSVGElement>>;
export { AdaLogo, logoVariants };
//# sourceMappingURL=ada-logo.d.ts.map