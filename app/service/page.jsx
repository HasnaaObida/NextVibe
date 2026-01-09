import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO SERVICES ================= */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        {/* Image de fond décorative */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/annie-spratt-sggw4-qDD54-unsplash.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Des solutions complètes pour votre succès
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            De la conception au déploiement, nous vous accompagnons à chaque étape
            pour créer une présence digitale performante et moderne.
          </p>
        </div>
      </section>

      {/* ================= LISTE DES SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design UI/UX",
                desc: "Interfaces modernes et intuitives pensées pour l’expérience utilisateur.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                )
              },
              {
                title: "Développement Web",
                desc: "Sites performants construits avec des technologies modernes.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 18l6-6-6-6" />
                    <path d="M8 6l-6 6 6 6" />
                  </svg>
                )
              },
              {
                title: "Performance",
                desc: "Optimisation des temps de chargement et Core Web Vitals.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "SEO",
                desc: "Optimisation pour les moteurs de recherche dès la conception.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                )
              },
              {
                title: "Responsive Design",
                desc: "Expérience parfaite sur mobile, tablette et desktop.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                )
              },
              {
                title: "Accompagnement",
                desc: "Support, maintenance et évolution continue de votre site.",
                icon: (
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 8a6 6 0 0 0-12 0" />
                    <path d="M12 14v7" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-100
                 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6
                  group-hover:bg-indigo-100 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-center overflow-hidden rounded-3xl mx-6 md:mx-16">
        <div className="relative z-10 max-w-4xl mx-auto px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl py-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 text-lg md:text-xl">
            Contactez-nous dès aujourd'hui pour discuter de votre vision
            et obtenir un devis personnalisé.
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
