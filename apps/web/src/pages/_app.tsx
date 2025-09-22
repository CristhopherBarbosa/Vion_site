import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Montserrat } from 'next/font/google';
import Head from 'next/head';
import { reportWebVitals } from '@/lib/reportWebVitals';

// Configuração de fontes para otimizar Core Web Vitals
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`${inter.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

// Exporta a função reportWebVitals para o Next.js usar automaticamente
export { reportWebVitals };
