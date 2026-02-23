import { type Locale } from "@/lib/i18n";
interface LanguageSwitcherProps {
    currentLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
    className?: string;
    variant?: 'default' | 'minimal' | 'button';
    size?: 'sm' | 'md' | 'lg';
}
export declare function LanguageSwitcher({ currentLocale, onLocaleChange, className, variant, size, }: LanguageSwitcherProps): import("react/jsx-runtime").JSX.Element;
export declare function useLocale(): {
    locale: Locale;
    setLocale: (newLocale: Locale) => void;
};
export {};
//# sourceMappingURL=language-switcher.d.ts.map