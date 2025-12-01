'use client';
import React from 'react';
import Navbar from './homepage/Navbar';
import { usePathname } from 'next/navigation';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <div className="min-h-full">
      {!isAuthPage && <Navbar />}
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
