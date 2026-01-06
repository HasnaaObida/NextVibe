import './globals.css'
import Header from '../components/Header';

export const metadata = {
  title: 'NextVibe Studio',
  description: 'Site vitrine professionnel NextVibe',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-gray-50 text-gray-800">
        <Header />
        <main className="min-h-[calc(100vh-128px)]">{children}</main>
       
      </body>
    </html>
  )
}
