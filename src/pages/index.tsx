import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <div
          className='flex h-screen flex-col
          items-center space-y-2 py-12 text-center'
        >
          <h1>Heeren A Tenniphil</h1>
          <p>
            Welkom op de nieuwe Heeren-A website 🎾
            <br />
          </p>
        </div>
        <div className='absolute top-0 -z-10 h-screen w-screen opacity-30'>
          <Image
            fill={true}
            className='relative h-full w-full object-cover'
            alt='heeren a'
            src='/images/heeren-a-hero.jpeg'
          ></Image>
        </div>
      </main>
    </Layout>
  );
}
