import SubBanner from '@/components/SubBanner';
import React from 'react';

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubBanner title="회원 서비스" />
      {children}
    </>
  );
}
