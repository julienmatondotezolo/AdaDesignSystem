"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LOCALE = void 0;
exports.getTranslation = getTranslation;
exports.t = t;
exports.detectLocale = detectLocale;
const translations = {
    en: {
        common: {
            loading: 'Loading...',
            error: 'Error',
            success: 'Success',
            warning: 'Warning',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            edit: 'Edit',
            add: 'Add',
            close: 'Close',
            confirm: 'Confirm',
            search: 'Search',
            clear: 'Clear',
            back: 'Back',
            next: 'Next',
            previous: 'Previous',
            submit: 'Submit',
            reset: 'Reset',
        },
        forms: {
            required: 'This field is required',
            invalid: 'Invalid value',
            tooShort: 'Too short',
            tooLong: 'Too long',
            invalidEmail: 'Invalid email address',
            passwordMismatch: 'Passwords do not match',
        },
        navigation: {
            home: 'Home',
            dashboard: 'Dashboard',
            menu: 'Menu',
            settings: 'Settings',
            profile: 'Profile',
            logout: 'Logout',
        },
    },
    fr: {
        common: {
            loading: 'Chargement...',
            error: 'Erreur',
            success: 'Succès',
            warning: 'Attention',
            cancel: 'Annuler',
            save: 'Enregistrer',
            delete: 'Supprimer',
            edit: 'Modifier',
            add: 'Ajouter',
            close: 'Fermer',
            confirm: 'Confirmer',
            search: 'Rechercher',
            clear: 'Effacer',
            back: 'Retour',
            next: 'Suivant',
            previous: 'Précédent',
            submit: 'Soumettre',
            reset: 'Réinitialiser',
        },
        forms: {
            required: 'Ce champ est obligatoire',
            invalid: 'Valeur invalide',
            tooShort: 'Trop court',
            tooLong: 'Trop long',
            invalidEmail: 'Adresse email invalide',
            passwordMismatch: 'Les mots de passe ne correspondent pas',
        },
        navigation: {
            home: 'Accueil',
            dashboard: 'Tableau de bord',
            menu: 'Menu',
            settings: 'Paramètres',
            profile: 'Profil',
            logout: 'Déconnexion',
        },
    },
    nl: {
        common: {
            loading: 'Laden...',
            error: 'Fout',
            success: 'Succes',
            warning: 'Waarschuwing',
            cancel: 'Annuleren',
            save: 'Opslaan',
            delete: 'Verwijderen',
            edit: 'Bewerken',
            add: 'Toevoegen',
            close: 'Sluiten',
            confirm: 'Bevestigen',
            search: 'Zoeken',
            clear: 'Wissen',
            back: 'Terug',
            next: 'Volgende',
            previous: 'Vorige',
            submit: 'Verzenden',
            reset: 'Herstellen',
        },
        forms: {
            required: 'Dit veld is verplicht',
            invalid: 'Ongeldige waarde',
            tooShort: 'Te kort',
            tooLong: 'Te lang',
            invalidEmail: 'Ongeldig e-mailadres',
            passwordMismatch: 'Wachtwoorden komen niet overeen',
        },
        navigation: {
            home: 'Home',
            dashboard: 'Dashboard',
            menu: 'Menu',
            settings: 'Instellingen',
            profile: 'Profiel',
            logout: 'Uitloggen',
        },
    },
};
function getTranslation(locale, key) {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}
function t(locale) {
    return (key) => getTranslation(locale, key);
}
// Default locale
exports.DEFAULT_LOCALE = 'en';
// Utility function to detect browser locale
function detectLocale() {
    if (typeof window === 'undefined')
        return exports.DEFAULT_LOCALE;
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'fr', 'nl'].includes(browserLang) ? browserLang : exports.DEFAULT_LOCALE;
}
//# sourceMappingURL=i18n.js.map