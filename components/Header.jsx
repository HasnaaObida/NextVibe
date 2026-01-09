import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          NextVibe<span className="font-light">Studio</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-700">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/service', label: 'Services' },
            { href: '/about', label: 'À propos' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative hover:text-indigo-600 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95"
        >
           Démarrer un projet
        </Link>
      </nav>
    </header>
  )
}
