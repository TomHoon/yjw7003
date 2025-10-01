"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function MainNavi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainNavi">
      <div className="auto">
        <ul>
          <li>
            <Link href="/business">
              <img src="/images/사업안내.png" alt="" />
              사업안내
            </Link>
          </li>
          <li>
            <Link href="/location">
              <img src="/images/guide.png" alt="" />
              오시는길
            </Link>
          </li>
          <li>
            <a href="">
              <img src="/images/자원봉사신청.png" alt="" />
              <span>자원봉사신청</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/후원신청.png" alt="" />
              <span>후원신청</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/images/소식지.png" alt="" />
              <span>소식지</span>
            </a>
          </li>
        </ul>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>안내</h2>
        <p>이곳에 모달 내용을 넣으세요.</p>
      </Modal>
    </div>
  );
}
