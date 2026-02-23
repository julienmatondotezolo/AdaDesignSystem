export type Locale = 'en' | 'fr' | 'nl';
export interface Translations {
    common: {
        loading: string;
        error: string;
        success: string;
        warning: string;
        cancel: string;
        save: string;
        delete: string;
        edit: string;
        add: string;
        close: string;
        confirm: string;
        search: string;
        clear: string;
        back: string;
        next: string;
        previous: string;
        submit: string;
        reset: string;
    };
    forms: {
        required: string;
        invalid: string;
        tooShort: string;
        tooLong: string;
        invalidEmail: string;
        passwordMismatch: string;
    };
    navigation: {
        home: string;
        dashboard: string;
        menu: string;
        settings: string;
        profile: string;
        logout: string;
    };
}
export declare function getTranslation(locale: Locale, key: string): string;
export declare function t(locale: Locale): (key: string) => string;
export declare const DEFAULT_LOCALE: Locale;
export declare function detectLocale(): Locale;
//# sourceMappingURL=i18n.d.ts.map