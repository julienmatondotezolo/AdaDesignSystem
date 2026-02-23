'use client'

import React from 'react';
import { FontViewer, FontViewerShowcase } from '../../components/ui/font-viewer';
import { LanguageSwitcher, useLocale } from '../../components/ui/language-switcher';
import { AdaLogo } from '../../components/ui/ada-logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

export default function FontsPage() {
  const { locale, setLocale } = useLocale()

  const headlines = {
    en: {
      title: 'Professional Typography',
      subtitle: 'Inter + Plus Jakarta Sans specimen showcase',
      description: 'Inspired by Visuelt Pro - clean, professional font display without gradients'
    },
    fr: {
      title: 'Typographie Professionnelle',
      subtitle: 'Présentation des spécimens Inter + Plus Jakarta Sans',
      description: 'Inspiré par Visuelt Pro - affichage de police propre et professionnel sans dégradés'
    },
    nl: {
      title: 'Professionele Typografie',
      subtitle: 'Inter + Plus Jakarta Sans lettertype showcase',
      description: 'Geïnspireerd door Visuelt Pro - schone, professionele lettertype weergave zonder verloopkleuren'
    }
  }

  const content = headlines[locale]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <AdaLogo size="md" variant="primary" />
            <LanguageSwitcher
              currentLocale={locale}
              onLocaleChange={setLocale}
              variant="minimal"
              size="sm"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">
            {content.title}
          </h1>
          <p className="text-xl font-medium text-muted-foreground mb-6 tracking-wide">
            {content.subtitle}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Professional Typography Principles */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Font Pairing</CardTitle>
                <CardDescription>Two complementary typefaces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge variant="outline">Display Font</Badge>
                  <p className="font-display font-semibold text-lg">
                    Plus Jakarta Sans
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Headlines, titles, display text
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Body Font</Badge>
                  <p className="font-sans font-medium text-lg">
                    Inter
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Body text, interfaces, reading
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Clean Hierarchy</CardTitle>
                <CardDescription>Professional typography scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">Display</div>
                  <div className="text-lg font-semibold">Headline</div>
                  <div className="text-base font-medium">Subheading</div>
                  <div className="text-base font-normal">Body Text</div>
                  <div className="text-sm font-medium">Caption</div>
                  <div className="text-xs font-normal">Small</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">No Gradients</CardTitle>
                <CardDescription>Professional aesthetic only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm">Solid colors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-foreground rounded"></div>
                    <span className="text-sm">High contrast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-border rounded"></div>
                    <span className="text-sm">Clean borders</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Professional typography without visual distractions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Font Viewer */}
        <section className="mb-16">
          <FontViewer 
            language={locale}
            className="max-w-6xl mx-auto"
          />
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {locale === 'fr' ? 'Exemples d\'Utilisation' : 
             locale === 'nl' ? 'Gebruiksvoorbeelden' : 
             'Usage Examples'}
          </h2>
          
          <Card className="border border-border bg-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {locale === 'fr' ? 'Classes CSS' : 
                 locale === 'nl' ? 'CSS Klassen' : 
                 'CSS Classes'}
              </CardTitle>
              <CardDescription>
                {locale === 'fr' ? 'Classes Tailwind pour typographie professionnelle' : 
                 locale === 'nl' ? 'Tailwind klassen voor professionele typografie' : 
                 'Tailwind classes for professional typography'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-6 rounded-md text-sm overflow-x-auto border">
{`/* Display Headlines - Plus Jakarta Sans */
.font-display = font-family: "Plus Jakarta Sans"
text-6xl font-bold font-display leading-none tracking-tight
text-4xl font-semibold font-display leading-tight tracking-tight

/* Body Text - Inter */
.font-sans = font-family: "Inter" (default)
text-3xl font-bold leading-tight tracking-tight
text-xl font-medium leading-tight
text-base font-normal leading-relaxed

/* Professional Hierarchy */
text-5xl font-bold          /* Page titles */
text-3xl font-semibold      /* Section headers */
text-xl font-medium         /* Card titles */  
text-base font-normal       /* Body text */
text-sm font-medium         /* Labels */
text-xs font-normal         /* Captions */`}
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Back to Design System */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="/">
              {locale === 'fr' ? '← Retour au Système de Design' : 
               locale === 'nl' ? '← Terug naar Design Systeem' : 
               '← Back to Design System'}
            </a>
          </Button>
        </div>

        {/* Clean Footer */}
        <footer className="text-center py-12 border-t border-border mt-16">
          <AdaLogo size="sm" variant="primary" className="mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            ADA Design System v3.0 - Professional Typography
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            {locale === 'fr' ? 'Inspiré par Visuelt Pro • Sans dégradés • Esthétique professionnelle' : 
             locale === 'nl' ? 'Geïnspireerd door Visuelt Pro • Geen verloopkleuren • Professionele esthetiek' : 
             'Inspired by Visuelt Pro • No gradients • Professional aesthetic'}
          </p>
        </footer>
      </div>
    </div>
  );
}