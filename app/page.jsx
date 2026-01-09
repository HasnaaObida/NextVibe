import Link from "next/link";
import Image from "next/image";
import { Palette, Code2, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-28 md:pt-32 pb-28">

          {/* TEXTE */}
          <div className="relative z-10">
            <span className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Agence digitale moderne
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Donnez vie à vos idées digitales
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              NextVibe Studio conçoit des sites vitrines modernes, performants
              et sur-mesure pour propulser votre entreprise vers le succès.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-indigo-500 transition"
              >
                Démarrer un projet
              </Link>

              <Link
                href="/service"
                className="border border-gray-300 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition"
              >
                Nos services
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[420px] md:h-[480px] -mt-12 md:-mt-16">

            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>

            <Image
              src="/images/austin-distel-wawEfYdpkag-unsplash.jpg"
              alt="NextVibe banner"
              fill
              className="object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projets réalisés" },
              { value: "15 ans", label: "D’expérience" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "50+", label: "Partenaires" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Ce que nous proposons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour créer votre présence digitale idéale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design UI/UX",
                desc: "Interfaces modernes et intuitives pensées pour vos utilisateurs.",
                icon: Palette,
              },
              {
                title: "Développement Web",
                desc: "Sites performants construits avec les dernières technologies.",
                icon: Code2,
              },
              {
                title: "Optimisation",
                desc: "Performances optimales et temps de chargement ultra-rapides.",
                icon: Zap,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                                bg-indigo-50 text-indigo-600 mb-5
                                group-hover:bg-indigo-600 group-hover:text-white transition">
                  <service.icon size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 text-center overflow-hidden rounded-3xl mx-6 md:mx-16">


        <div className="relative z-10 max-w-4xl mx-auto px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl py-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 text-lg md:text-xl">
            Contactez-nous dès aujourd'hui pour discuter de votre vision et obtenir un devis personnalisé.
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
