import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-h-screen overflow-hidden'>
      <Header />
      <div className='max-h-screen min-h-screen pt-16'>{children}</div>
      <footer className='absolute bottom-0 left-0 right-0 text-center text-gray-700'>
        {new Date().getFullYear()} Jeroen Nelen
      </footer>
    </div>
  );
}
