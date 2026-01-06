import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center p-6">

        <div className="text-2xl font-extrabold text-indigo-600">
          NextVibe
        </div>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/" className="hover:text-indigo-600 transition">Services</Link>
          <Link href="/" className="hover:text-indigo-600 transition">À propos</Link>
          <Link href="/" className="hover:text-indigo-600 transition">Contact</Link>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Démarrer un projet
          </Link>
        </div>
      </nav>
    </header>
  )
}
