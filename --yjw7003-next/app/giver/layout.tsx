import SubBanner from "@/components/SubBanner";
import React from "react";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubBanner title="후원 및 기부" />
      {children}
    </>
  );
}
