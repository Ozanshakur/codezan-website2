import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Codezan
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Moderne Websites für Ihr Unternehmen
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/#uber-mich" className="text-muted-foreground hover:text-primary transition-colors">
              Über mich
            </Link>
            <Link href="/#dienstleistungen" className="text-muted-foreground hover:text-primary transition-colors">
              Dienstleistungen
            </Link>
            <Link href="/#preise" className="text-muted-foreground hover:text-primary transition-colors">
              Preise
            </Link>
            <Link href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-muted flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <Link href="/impressum" className="hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors">
            Datenschutz
          </Link>
          <Link href="/agb" className="hover:text-primary transition-colors">
            AGB
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Codezan. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}

