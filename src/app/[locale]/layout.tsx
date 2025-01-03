import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '../components/Header';
import './globals.css';
import SobreNosotros from '../components/SobreNosotros';
import Elegirnos from '../components/Elegirnos';
import Capacitacion from '../components/Capacitacion';
import LeadGeneration from '../components/LeadGeneration';
import EmailMarketing from '../components/EmailMarketing';
import Hablemos from '../components/Hablemos';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Walo</title>
        <meta name="description" content="En WALO, transformamos conexiones en oportunidades y estrategias en resultados. Somos más que una empresa de prospección B2B: somos tu socio estratégico para alcanzar clientes ideales y construir relaciones solidas." />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <SobreNosotros />
          <Elegirnos />
          <Capacitacion />
          <LeadGeneration/>
          <EmailMarketing/>
          <Hablemos/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

