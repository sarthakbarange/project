import React from 'react';
// Use a global CSS file for base styles. You should rename loginModule.css 
// to something like globals.css and place it in src/app/ if you want 
// to use it here, or import a dedicated global style file.
import './globals.css'; 

// Define metadata for the head tag (SEO and basic info)
export const metadata = {
  title: 'Vibrant Login Project',
  description: 'A modern, colorful login page inspired by a vibrant design.',
};

// Define the root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className="h-full">
    <body className="h-full overflow-y-auto">
      {children}
    </body>
  </html>
);
}
