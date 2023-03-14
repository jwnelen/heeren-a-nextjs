import * as React from 'react';

import useDaltons from '@/hooks/daltons';

import Layout from '@/components/layout/Layout';

import { Dalton } from '@/types';

export default function Daltons() {
  const { daltons, isLoading, isError } = useDaltons();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Layout>
      <div className='h-screen text-center'>
        <h1>Daltons</h1>
        {daltons &&
          daltons.map((dalton: Dalton) => (
            <div key={dalton.id}>
              <h2>{dalton.reason}</h2>
            </div>
          ))}
      </div>
    </Layout>
  );
}
