import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: '3D Interior Design Los Angeles | Premium Visualization Studio',
  description: 'Award-winning 3D interior design visualization studio in Beverly Hills. Photorealistic rendering, VR walkthroughs, and architectural visualization.',
  authors: [{ name: '3D Interior Design LA' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: '3D Interior Design Los Angeles',
    description: 'Transform your vision into reality with photorealistic 3D visualization from Beverly Hills\' premier design studio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Interior Design Los Angeles',
    description: 'Transform your vision into reality with photorealistic 3D visualization from Beverly Hills\' premier design studio.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
