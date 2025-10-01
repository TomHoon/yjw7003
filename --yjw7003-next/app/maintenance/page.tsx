"use client";

import { Wrench, Clock, AlertCircle } from "lucide-react";
import styles from "@/styles/Maintenance.module.scss";

export default function Maintenance() {
  return (
    <main className={styles.main}>
      <div className={styles.iconWrapper}>
        <Wrench className={styles.icon} />
      </div>
      <h1 className={styles.title}>현재 작업중입니다</h1>
      <p className={styles.message}>
        사이트 점검 및 업데이트가 진행 중입니다. <br />
        보다 나은 서비스를 위해 잠시만 기다려주세요.
      </p>

      <div className={styles.info}>
        <Clock className={styles.infoIcon} />
        <span>예상 완료 시간: 오늘 오후 6시</span>
      </div>

      <div className={styles.info}>
        <AlertCircle className={styles.infoIcon} />
        <span>문의: 031-846-7003</span>
      </div>
    </main>
  );
}
