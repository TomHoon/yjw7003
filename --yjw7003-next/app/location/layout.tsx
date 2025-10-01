import SubBanner from "@/components/SubBanner";
import React from "react";
import Script from "next/script";

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 네이버 지도 스크립트는 Script 컴포넌트로 추가 */}
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy="beforeInteractive"
      />

      <SubBanner title="오시는 길" />
      {children}
    </>
  );
}
