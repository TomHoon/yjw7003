"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("memberId");
    if (id) {
      setIsLogged(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("memberId");
    location.href = "/";
  };

  return (
    <header>
      <div className="auto">
        <div className="flex-container">
          <a href="/">
            <img src="/images/icon.png" alt="" className="logo" />
          </a>
          <ul>
            <li>
              <Link href="/business">사업안내</Link>
            </li>
            <li>
              <Link href="/location">오시는길</Link>
            </li>
            <li>
              <Link href="/giver">후원 및 기부</Link>
            </li>
            <li>
              <Link href="/education">교육</Link>
            </li>
            <li>
              <Link href="/introduction">복지관 소개</Link>
            </li>
          </ul>
          <div className="userBtns">
            {isLogged ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <>
                <button>
                  <Link href="/login">로그인</Link>
                </button>
                <button>
                  <Link href="/signup">회원가입</Link>
                </button>
              </>
            )}
          </div>
          <div className="menu">
            <span
              className={`hamburger ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              메뉴
            </span>
          </div>

          <div className={active ? "dim" : ""}></div>
          <div className={`side-menu ${active ? "active" : ""}`}>
            <ul>
              <li>사업안내</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
