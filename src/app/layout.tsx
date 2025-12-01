import type { Metadata } from 'next';
import './globals.css';
import Navbar from './homepage/Navbar';

export const metadata: Metadata = {
  title: 'Authentication App',
  description: 'Secure authentication system with login and signup functionality',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Authentication App',
    description: 'Secure authentication system with login and signup functionality',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <div className="min-h-full">
          <Navbar />

          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}