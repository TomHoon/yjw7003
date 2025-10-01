"use client";

import { X } from "lucide-react";
import styles from "@/styles/Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // 모달 안쪽 클릭 시 닫히지 않음
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
