import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  title: 'Elettroservice',
  description: 'Illuminiamo ogni contatto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-normal">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
