import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/players', label: 'Spelers' },
  { href: '/daltons', label: 'Daltons' },
];

export default function Header() {
  return (
    <header className='absolute top-0 z-50 w-full'>
      <div className='layout flex h-14 items-center justify-between border-b-2 border-primary-200 px-10'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
