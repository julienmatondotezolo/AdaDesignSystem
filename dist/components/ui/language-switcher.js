"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSwitcher = LanguageSwitcher;
exports.useLocale = useLocale;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("@/lib/utils");
// Import flag icons from country-flag-icons package
const _3x2_1 = require("country-flag-icons/react/3x2");
const _3x2_2 = require("country-flag-icons/react/3x2");
const _3x2_3 = require("country-flag-icons/react/3x2");
const languages = {
    en: { label: 'English', FlagIcon: _3x2_1.US },
    fr: { label: 'Français', FlagIcon: _3x2_2.FR },
    nl: { label: 'Nederlands', FlagIcon: _3x2_3.NL },
};
function LanguageSwitcher({ currentLocale, onLocaleChange, className, variant = 'default', size = 'md', }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const sizeStyles = {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-2',
        lg: 'text-base px-4 py-3',
    };
    const variantStyles = {
        default: 'bg-card border border-border hover:bg-muted/50',
        minimal: 'bg-transparent hover:bg-muted/30',
        button: 'bg-primary text-primary-foreground hover:bg-primary/90',
    };
    if (variant === 'minimal') {
        const CurrentFlag = languages[currentLocale].FlagIcon;
        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative", className), children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => setIsOpen(!isOpen), className: (0, utils_1.cn)("flex items-center gap-2 rounded-md transition-colors", "focus:outline-none focus:ring-2 focus:ring-ring", variantStyles[variant], sizeStyles[size]), children: [(0, jsx_runtime_1.jsx)(CurrentFlag, { className: "w-4 h-3" }), (0, jsx_runtime_1.jsx)("span", { className: "font-medium", children: currentLocale.toUpperCase() }), (0, jsx_runtime_1.jsx)("svg", { className: (0, utils_1.cn)("w-4 h-4 transition-transform", isOpen && "rotate-180"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), isOpen && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-full mt-1 left-0 z-50 bg-popover border border-border rounded-md shadow-lg min-w-[120px]", children: Object.entries(languages).map(([locale, lang]) => {
                        const FlagIcon = lang.FlagIcon;
                        return ((0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                                onLocaleChange(locale);
                                setIsOpen(false);
                            }, className: (0, utils_1.cn)("w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-muted/50", "first:rounded-t-md last:rounded-b-md transition-colors", currentLocale === locale && "bg-muted text-foreground font-medium"), children: [(0, jsx_runtime_1.jsx)(FlagIcon, { className: "w-4 h-3" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm", children: lang.label })] }, locale));
                    }) }))] }));
    }
    const CurrentFlag = languages[currentLocale].FlagIcon;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative", className), children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => setIsOpen(!isOpen), className: (0, utils_1.cn)("flex items-center gap-2 rounded-md transition-colors", "focus:outline-none focus:ring-2 focus:ring-ring", variantStyles[variant], sizeStyles[size]), children: [(0, jsx_runtime_1.jsx)(CurrentFlag, { className: "w-5 h-4" }), (0, jsx_runtime_1.jsx)("span", { className: "font-medium", children: languages[currentLocale].label }), (0, jsx_runtime_1.jsx)("svg", { className: (0, utils_1.cn)("w-4 h-4 transition-transform", isOpen && "rotate-180"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), isOpen && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-full mt-1 left-0 z-50 bg-popover border border-border rounded-md shadow-lg min-w-[150px]", children: Object.entries(languages).map(([locale, lang]) => {
                    const FlagIcon = lang.FlagIcon;
                    return ((0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                            onLocaleChange(locale);
                            setIsOpen(false);
                        }, className: (0, utils_1.cn)("w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-muted/50", "first:rounded-t-md last:rounded-b-md transition-colors", currentLocale === locale && "bg-muted text-foreground font-medium"), children: [(0, jsx_runtime_1.jsx)(FlagIcon, { className: "w-5 h-4" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm", children: lang.label })] }, locale));
                }) }))] }));
}
// Hook for managing locale state
function useLocale() {
    const [locale, setLocale] = React.useState('en');
    React.useEffect(() => {
        // Try to get saved locale from localStorage
        const savedLocale = localStorage.getItem('ada-locale');
        if (savedLocale && ['en', 'fr', 'nl'].includes(savedLocale)) {
            setLocale(savedLocale);
        }
        else {
            // Fallback to browser detection
            const browserLang = navigator.language.split('-')[0];
            if (['en', 'fr', 'nl'].includes(browserLang)) {
                setLocale(browserLang);
            }
        }
    }, []);
    const changeLocale = React.useCallback((newLocale) => {
        setLocale(newLocale);
        localStorage.setItem('ada-locale', newLocale);
    }, []);
    return { locale, setLocale: changeLocale };
}
//# sourceMappingURL=language-switcher.js.map