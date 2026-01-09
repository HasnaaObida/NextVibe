import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-3 mb-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              NextVibe<span className="text-indigo-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Nous créons des sites web modernes, performants et pensés
              pour faire grandir votre activité.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-500">Email</span><br />
                contact@nextvibe.com
              </li>
              <li>
                <span className="text-gray-500">Téléphone</span><br />
                +212 6 00 00 00 00
              </li>
              <li>
                <span className="text-gray-500">Localisation</span><br />
                Rabat, Maroc
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} NextVibe Studio. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-white transition">
              Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
