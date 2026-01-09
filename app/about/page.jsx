import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Une équipe passionnée par le digital
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Chez NextVibe Studio, nous aidons les entreprises à se démarquer grâce à des expériences digitales modernes, performantes et durables.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/annie-spratt-sggw4-qDD54-unsplash.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/Blog copernic6.webp"
              alt="Notre histoire"
              width={800}
              height={700}
              className="object-cover w-full h-[420px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition" />
          </div>

          {/* TEXTE */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Notre histoire
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              NextVibe Studio est née de la vision de créer une agence web différente. Une agence où la créativité rencontre l'excellence technique, où chaque projet est traité avec passion et attention.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fondée en 2019 à Rabat, notre agence a rapidement su se démarquer par son approche unique alliant design moderne et performances optimales.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Aujourd'hui, notre équipe de passionnés accompagne des entreprises de toutes tailles dans leur réussite digitale, avec toujours la même exigence de qualité.
            </p>

            {/* VALUES CARD */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Approche orientée résultats",
                "Design moderne & sur-mesure",
                "Technologies performantes",
                "Accompagnement personnalisé"
              ].map((value, idx) => (
                <div key={idx} className="flex gap-3 items-center p-4 bg-white border border-gray-100 rounded-xl shadow hover:shadow-lg transition">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-22">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Simplicité", text: "Des solutions claires, efficaces et faciles à utiliser." },
              { title: "Excellence", text: "Un souci du détail constant pour livrer des projets de qualité." },
              { title: "Innovation", text: "Nous utilisons les meilleures technologies pour rester à la pointe." }
            ].map((val, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (STYLE HOMEPAGE) */}
      <section className="py-24 text-center relative overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl py-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Travaillons ensemble
          </h2>
          <p className="text-gray-600 mb-8 text-lg md:text-xl">
            Vous avez un projet ou une idée ? Parlons-en et construisons quelque chose d’exceptionnel.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-medium hover:bg-indigo-500 hover:scale-105 transition-transform shadow-lg"
          >
            Nous contacter
          </Link>
        </div>
      </section>

    </main>
  );
}
