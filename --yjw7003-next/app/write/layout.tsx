import SubBanner from '@/components/SubBanner';
import React from 'react';

export default function WriteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubBanner title="후원/자원봉사" />
      {children}
    </>
  );
}
