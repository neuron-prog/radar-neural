import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://radarneural.com'),
  title: {
    default: 'Radar Neural — Notícias e Análises sobre IA',
    template: '%s | Radar Neural',
  },
  description:
    'Acompanhe as últimas notícias, análises e tendências do mundo da inteligência artificial.',
  openGraph: {
    title: 'Radar Neural',
    description:
      'Notícias e análises sobre inteligência artificial.',
    url: 'https://radarneural.com',
    siteName: 'Radar Neural',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="page-wrapper">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
