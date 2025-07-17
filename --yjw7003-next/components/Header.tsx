
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
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
            <li>사업안내</li>
            <li>이용안내</li>
            <li>
              <Link href="/giver">후원 및 기부</Link>
            </li>
            <li>교육</li>
            <li>복지관 소개</li>
          </ul>
          <div className="userBtns">

            {isLogged ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <>
                <button>
                  <Link href="/login">로그인</Link>
                </button>
                <button>회원가입</button>
              </>
            )}
            

          </div>
        </div>
      </div>
    </header>
  );
}
