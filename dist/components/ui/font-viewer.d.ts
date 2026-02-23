import * as React from "react";
interface FontSpecimenProps {
    weight: string;
    size: string;
    lineHeight: string;
    spacing: string;
    className?: string;
    children: React.ReactNode;
}
declare function FontSpecimen({ weight, size, lineHeight, spacing, className, children }: FontSpecimenProps): import("react/jsx-runtime").JSX.Element;
interface FontViewerProps {
    className?: string;
    sampleText?: string;
    language?: 'en' | 'fr' | 'nl';
}
export declare function FontViewer({ className, sampleText, language }: FontViewerProps): import("react/jsx-runtime").JSX.Element;
export declare function FontViewerShowcase(): import("react/jsx-runtime").JSX.Element;
export { FontSpecimen };
//# sourceMappingURL=font-viewer.d.ts.map