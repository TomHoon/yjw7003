'use client'
import SubBanner from '@/components/SubBanner';
import Script from 'next/script';

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => window.dispatchEvent(new Event("naver-map-loaded"))}
      />

      <SubBanner title="오시는 길" />
      {children}
    </>
  );
}
