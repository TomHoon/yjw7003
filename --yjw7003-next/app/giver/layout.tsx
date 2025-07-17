import SubBanner from "@/components/SubBanner";
import React from "react";
import { Suspense } from "react";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <SubBanner title="후원 및 기부" />
        {children}
      </Suspense>
    </>
  );
}
