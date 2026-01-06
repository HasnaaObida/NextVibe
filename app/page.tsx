import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="font-sans bg-gray-50">

      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 py-40 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Donnez vie à vos idées digitales
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
            NextVibe Studio conçoit des sites vitrines modernes, performants et sur-mesure qui propulsent votre entreprise vers le succès.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href="/"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Démarrer un projet
            </Link>
            <Link
              href="/"
              className="bg-indigo-500 bg-opacity-20 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Nos services
            </Link>
          </div>
        </div>
      </section>




    </main>
  )
}
