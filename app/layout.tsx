import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Anthony Volk — Full-Stack Developer',
  description:
    'Software engineer and international relations professional building digital tools that empower people.',
  icons: {
    icon: '/ico/favicon.ico',
    apple: '/ico/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="main-content">
            <div className="page-inner">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
