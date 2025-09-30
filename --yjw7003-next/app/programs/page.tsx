"use client";

import styles from "@/styles/Programs.module.scss";

export default function Programs() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>사업안내</h2>

      <section className={styles.section}>
        <h3>자립 지원 프로그램</h3>
        <ul>
          <li>직업 훈련 및 취업 연계</li>
          <li>컴퓨터 및 문해 교육</li>
          <li>자조모임 지원</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>건강 증진 프로그램</h3>
        <ul>
          <li>운동 및 재활 프로그램</li>
          <li>심리 상담 및 정서 지원</li>
          <li>건강검진 및 의료 연계</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>사회 참여 및 여가 활동</h3>
        <ul>
          <li>문화·예술 프로그램</li>
          <li>지역사회 행사 참여</li>
          <li>동아리 활동 지원</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>가족 지원 서비스</h3>
        <ul>
          <li>가족 상담 및 교육</li>
          <li>돌봄 지원 연계</li>
          <li>부모·자녀 프로그램</li>
        </ul>
      </section>
    </main>
  );
}
