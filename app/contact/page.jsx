'use client'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-28 px-4">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADER TEXTE */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Parlons de votre
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              prochain projet
            </span>
          </h1>

          <p className="text-lg text-gray-600">
            Une idée, un besoin ou une question ? Notre équipe vous accompagne
            dans la création de solutions digitales performantes et élégantes.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
              🚀 Startup
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
              💼 Entreprise
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
              🎯 Sur mesure
            </span>
          </div>
        </div>

        {/* FORM + MAPS */}
        <div className="grid md:grid-cols-2 gap-20 items-stretch">

          {/* FORMULAIRE */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "url('/images/agence-marketing-digital.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative p-10 md:p-14 space-y-6 text-white"
            >
              <div>
                <h2 className="text-3xl font-bold">Envoyez-nous un message</h2>
                <p className="text-white/80 mt-2">
                  Remplissez le formulaire et nous vous recontacterons rapidement.
                </p>
              </div>

              {[
                { label: 'Nom', placeholder: 'Votre nom', type: 'text' },
                { label: 'Entreprise', placeholder: "Nom de l'entreprise", type: 'text' },
                { label: 'Email', placeholder: 'votre@email.com', type: 'email' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-sm font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3
                               text-white placeholder-white/70 backdrop-blur-md
                               focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm font-medium">Sujet</label>
                <select
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3
                             text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option className="text-black">Choisir un sujet</option>
                  <option className="text-black">Demande d'information</option>
                  <option className="text-black">Demande de devis</option>
                  <option className="text-black">Support</option>
                  <option className="text-black">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre demande..."
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3
                             text-white placeholder-white/70 backdrop-blur-md resize-none
                             focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                           py-4 text-lg font-semibold shadow-lg hover:shadow-xl
                           hover:scale-[1.02] active:scale-95 transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* GOOGLE MAPS */}
          <div className="rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Rabat&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </main>
  )
}
